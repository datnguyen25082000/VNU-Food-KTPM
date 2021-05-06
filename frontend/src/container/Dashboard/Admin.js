import Auth from "../../Auth";
import axios from "axios";
import React, { Component } from "react";
import ListPost from "../../component/ListPost/ListPost";
import Sidebar from "../../component/Sidebar/Sidebar";
import PostForm from "../../component/PostForm/PostForm";

export const Admin = (props) => {
  const handleLogout = () => {
    Auth.logout(async () => {
      try {
        await axios.get("/clear-cookie");
      } catch (e) {
        console.log(e);
      }
      props.history.push("/login");
    });
  };

  return (
    <div>
      <div className="d-flex toggled" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <div id="page-content-wrapper">
            <PostForm />
            <ListPost />
          </div>
        </div>
      </div>
    </div>
  );
};
