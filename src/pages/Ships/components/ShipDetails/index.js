import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./index.css";

const GET_DETAILS_ABOUT_SHIP = gql`
  query GetDetailAboutShip($shipID: ID!) {
    ship(id: $shipID) {
      id
      name
      image
      active
      year_built
      home_port
      weight_kg
      type
      roles
      image
    }
  }
`;

const ShipDetails = () => {
  const { shipID } = useParams();

  const { loading, error, data } = useQuery(GET_DETAILS_ABOUT_SHIP, {
    variables: {
      shipID: shipID,
    },
  });

  if (loading) return <span>Loading</span>;
  if (error) return <span>Error</span>;

  console.log("SHIP DETAILS: ", data.ship.image);

  return (
    <>
      <ShipImage url={data.ship.image} />
      <ul className="ship-details-list">
        {Object.entries(data.ship).map(([title, value], index) => (
          <ShipDetail title={title} value={value} isEven={index % 2 === 0} />
        ))}
      </ul>
    </>
  );
};

export default ShipDetails;

const ShipImage = ({ url }) => {
  console.log("IMAGE URL: ", url);

  return (
    <div className="ship-image">
      <img src={url} alt="A ship" />
    </div>
  );
};

const ShipDetail = ({ title, value, isEven }) => (
  <li key={title} className={`ship-detail ${isEven && "ship-detail--even"}`}>
    <span>{title}</span>
    <span>{value}</span>
  </li>
);
