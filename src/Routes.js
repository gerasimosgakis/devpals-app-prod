import React from "react";
import { Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AppliedRoute from "./components/AppliedRoute";

export default function Routes({ childProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Landing} props={childProps} />
      <AppliedRoute
        exact
        path="/register"
        component={Register}
        props={childProps}
      />
      <AppliedRoute exact path="/login" component={Login} props={childProps} />
    </Switch>
  );
}
