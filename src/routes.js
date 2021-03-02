import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeJam from "./Components/HomeJam/home";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={HomeJam} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
