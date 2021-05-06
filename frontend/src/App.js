import React from "react";
import { Routers } from "./router";
import ReactFavicon from "react-favicon";
import ImageFavicon from "./assets/icons/favicon.ico";
import "./App.css";

export default function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Switch>
    //       <Route exact path="/login" component={Login} />
    //       <Route exact path="/register" component={Register} />
    //       <PrivateRoute exact path="/dashboard" />
    //       <Route exact path="/404" component={Page404} />
    //       <Route path="/" component={Customer} />
    //       <Route
    //         exact
    //         path="*"
    //         name="Page 404"
    //         render={(props) => <Page404 {...props} />}
    //       />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
    <div className="app">
      <ReactFavicon url={ImageFavicon} />
      <Routers />
    </div>
  );
}
