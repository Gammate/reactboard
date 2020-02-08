import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/shards-dashboards.1.1.0.css";

export default () => (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </Switch>
  </BrowserRouter>
);
