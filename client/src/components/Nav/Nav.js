import React from "react";
// import SignInModal from "../SignInModal/SignInModal";
import "./nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          Tower Bridge Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <form className="form-inline">
            <button className="btn btn-outline-secondary" type="button">
              Sign In
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
