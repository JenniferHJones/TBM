import React, { Component } from "react";
import Card from "./cardsUI";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row col-md-12">
          <div className="col-md-4">
            <Card title="Rental Listings" />
          </div>
          <div className="col-md-4">
            <Card title="Expiring Leases" />
          </div>
          <div className="col-md-4">
            <Card title="Search Future Properties" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
