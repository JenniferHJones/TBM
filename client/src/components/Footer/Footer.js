import React from "react";
import icon from "../../images/icon.png";

import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container text-center">
          <img src={icon} alt="small bridge" className="pt-4 pb-4" />
          <h5 className="copy-rights pb-2">
            Copyright © 2019 TBM &bull; All Rights Reserved
          </h5>
        </div>
      </footer>
    </>
  );
}

export default Footer;
