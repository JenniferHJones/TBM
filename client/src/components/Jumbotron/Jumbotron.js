import React from "react";
import "./jumbotron.css";

import img from "../../images/Tower_Bridge.jpg";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <div className="bridge" style={{ background: img }}>
        <h1 className="title">Tower Bridge Management</h1>
        <h4>
          Property management software to help you onboard new properties to
          your portfolio with ease.
        </h4>
      </div>
    </div>
  );
}

export default Jumbotron;
