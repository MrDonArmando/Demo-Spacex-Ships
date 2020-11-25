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
        {/*
            Wihout "/ships/:shipID" user will be redirected to path "/ships" when refreshing from path "/ships/:someShipID"
          */}
        <Redirect to={["/ships", "/ships/:shipID"]} />
      </Route>

      <Route path="/ships">
        <Ships />
      </Route>
    </Router>
  );
};

export default Pages;
