import React from "react";
import "./jumbotron.css";

import img from "../../images/bridge7.png";

function Jumbotron() {
  return (
    <div className="jumbotron text-center" style={{ background: img }}>
      <h1 className="title pb-5">Tower Bridge Management</h1>
      <h4 className="pb-3">Property Management Software</h4>
      <h4>Onboard new properties to your portfolio with ease.</h4>
    </div>
  );
}

export default Jumbotron;
