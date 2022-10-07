import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./home/index";

export function Routes({ toggleTheme }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage toggleTheme={toggleTheme} />
        </Route>
      </Switch>
    </Router>
  );
}
