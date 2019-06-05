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
          {props.title === "Expiring Leases" ? (
            <>
              <div style={{ height: "450px" }}>
                <h5 className="lease" style={{ color: "black" }}>
                  Track all property leases and schedule helpful reminders{" "}
                </h5>
                <h3 className="lease" style={{ color: "red" }}>
                  This Feature Coming Soon!
                </h3>
              </div>
            </>
          ) : (
            <></>
          )}
          {props.title === "Calendar" ? <Calendar /> : <></>}
        </p>
        {props.title === "Rental Listings" ? (
          <Link to="/Property">
            <button className="btn btn-warning">View All</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
