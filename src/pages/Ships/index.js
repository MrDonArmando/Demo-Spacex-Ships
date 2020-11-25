import React from "react";
import { Route } from "react-router-dom";
import "./index.css";
import ShipsList from "./components/ShipsList";
import ShipDetails from "./components/ShipDetails";

const Ships = () => {
  return (
    <div className="container">
      <div className="ships-list">
        <ShipsList />
      </div>

      <div className="ship-details">
        <Route exact path="/ships">
          <span className="no-selected-ship-info">Please select a ship</span>
        </Route>
        <Route exact path="/ships/:shipID">
          <ShipDetails />
        </Route>
      </div>
    </div>
  );
};

export default Ships;
