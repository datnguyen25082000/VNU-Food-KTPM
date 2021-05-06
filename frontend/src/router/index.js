import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from "./PublicRouter";
import {
  Customer,
  Page404,
  Page500,
  Login,
  Register,
  Detail,
  Profile,
} from "../container";
import {
  HeaderFooterLayout,
  OnlyFooterLayout,
  OnlyHeaderLayout,
  BlankLayout,
} from "../layouts";
import { Header, Footer } from "../component/common";

export const Routers = () => {
  return (
    <Router>
      <Switch>
        <PublicRouter
          exact={true}
          path={"/"}
          component={Customer}
          layout={OnlyHeaderLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />

        <PublicRouter
          exact={true}
          path={"/search"}
          component={Customer}
          layout={OnlyHeaderLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          exact={true}
          path={"/cart"}
          component={Customer}
          layout={OnlyHeaderLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          exact={true}
          path={"/posts/:id"}
          component={Detail}
          layout={OnlyHeaderLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          exact={true}
          path={"/profile"}
          component={Profile}
          layout={OnlyHeaderLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />

        <PublicRouter
          exact={true}
          path={"/404"}
          component={Page404}
          layout={BlankLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          exact={true}
          path={"/500"}
          component={Page500}
          layout={BlankLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          exact={true}
          path={"/login"}
          component={Login}
          layout={BlankLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          exact={true}
          path={"/register"}
          component={Register}
          layout={BlankLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Trang chủ"
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>
    </Router>
  );
};
