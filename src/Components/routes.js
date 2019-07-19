import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Form from "./Form/Form";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Form} path="/form" />
  </Switch>
);
