import { Route, Redirect } from "react-router-dom";
import Auth from "../Auth";
import Admin from "../container/Dashboard/Admin";
import User from "../container/Dashboard/User";
import axios from "axios";
import Page404 from "../container/Page404/Page404";
import React, { useState, useEffect } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [screen, setScreen] = useState("auth");

  const readCookie = async () => {
    try {
      const res = await axios.get("/read-cookie");
      if (res.data.screen === "admin" || res.data.screen === "user") {
        setScreen(res.data.screen);
      }
    } catch (e) {
      setScreen("auth");
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  if (screen === "admin") {
    Auth.loginAdmin(() => {});
  }
  if (screen === "user") {
    Auth.loginUser(() => {});
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated() === "admin") {
          return <Admin {...props} />;
        } else if (Auth.isAuthenticated() === "user") {
          return <User {...props} />;
        } else {
          return <Page404 />;
        }
      }}
    />
  );
};

export default PrivateRoute;
