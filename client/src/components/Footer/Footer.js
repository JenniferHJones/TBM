import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <h5>Company</h5>
              <ul className="list-unstyled footer-list">
                <li>
                  <Link to="" className="fLink">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    Privacy &amp; Security
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-5 col-sm-12 col-md-offset-2">
              <h5>Products</h5>
              <ul className="list-unstyled footer-list">
                <li>
                  <Link to="" className="fLink">
                    Property Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    Tenant Portal
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    Tenant Screening
                  </Link>
                </li>
                <li>
                  <Link to="" className="fLink">
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-12">
              <h5>Media</h5>
              <ul className="list-inline social">
                <li>
                  <Link to="" className="bg-twitter">
                    <i className="fab fa-twitter fLink" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="bg-dribbble">
                    <i className="fab fa-dribbble fLink" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="bg-linkedin">
                    <i className="fab fa-linkedin fLink" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="bg-googleplus">
                    <i className="fab fa-google fLink" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="bg-facebook">
                    <i className="fab fa-facebook fLink" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <p className="copy-rights">
            Copyright © 2019 TBM &bull; All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
