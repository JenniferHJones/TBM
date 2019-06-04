import React from "react";
import { Link } from "react-router-dom";
import Chart from "./chart";

import "./cards.css";
import Calendar from "./calendar";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="card-body text-dark">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text text-secondary">
          {props.title === "Rental Listings" ? (
            <Chart title={props.title} />
          ) : (
            <></>
          )}
          {props.title === "Calendar" ? <Calendar /> : <></>}
        </p>
        {props.title !== "Calendar" ? (
          <Link to="/Property">
            <button className="btn btn-outline-warning">View All</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
