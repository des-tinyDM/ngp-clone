import React from "react";
import { Switch, Route } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import CampaignPage from "./pages/CampaignPage";
import VolunteersPage from "./pages/VolunteersPage";
import EventsPage from "./pages/EventsPage";
import CampaignContactsPage from "./pages/CampaignContactsPage";
import PhoneBankPage from "./pages/PhoneBankPage";

export const Main = (
  <Switch>
    {/* <Route exact path="/" render={() => <Landing />} /> */}
    <Route path="/settings" render={() => <SettingsPage />} />
    <Route path="/campaign" render={() => <CampaignPage />} />
    <Route path="/volunteers" render={() => <VolunteersPage />} />
    <Route path="/events" render={() => <EventsPage />} />
    <Route path="/contacts" render={() => <CampaignContactsPage />} />
    <Route path="/phonebank" render={() => <PhoneBankPage />} />
  </Switch>
);
