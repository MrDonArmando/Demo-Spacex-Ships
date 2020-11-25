import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, useRouteMatch } from "react-router-dom";
import "./index.css";

const GET_ALL_SHIPS = gql`
  query GetAllShips {
    ships {
      name
      id
    }
  }
`;

const ShipsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_SHIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className="list">
      {data.ships.map(({ id, name }) => (
        <li key={id} className="list-item">
          <Link to={`/ships/${id}`} className="link">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShipsList;
