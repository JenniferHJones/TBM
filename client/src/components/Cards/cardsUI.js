import React from "react";
import { Link } from "react-router-dom";
import Chart from "./chart";

import "./cards.css";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="card-body text-dark">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text text-secondary">
          {props.title === "Rental Listings" ? (
            <Chart title={props.title} />
          ) : (
            <p>Something Else</p>
          )}
        </p>
        <Link to="/Property">
          <button className="btn btn-outline-warning">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
