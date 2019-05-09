import React from "react";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center" style={{ borderRadius: 0 }}>
      <h1 className="title">Tower Bridge Management</h1>
      <h4>
        Property management software to help you onboard new properties to your
        portfolio with ease.
      </h4>
    </div>
  );
}

export default Jumbotron;
