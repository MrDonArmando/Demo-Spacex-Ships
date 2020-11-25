import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Ships from "./Ships";

const Pages = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/ships" />
      </Route>

      <Route path="/ships">
        <Ships />
      </Route>
    </Router>
  );
};

export default Pages;
