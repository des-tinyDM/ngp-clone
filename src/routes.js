import React from "react";
import { Switch, Route } from "react-router-dom";
import SettingsPage from "./components/Settings";

export const Main = (
  <Switch>
    {/* <Route exact path="/" render={() => <Landing />} /> */}
    <Route path="/settings" render={() => <SettingsPage />} />
  </Switch>
);
