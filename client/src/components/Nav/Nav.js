import React from "react";
import icon from "../../images/icon.png";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <img src={icon} alt="small bridge" />
        <div className="navbar-brand ml-3">TBM</div>
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
              <Link to="/">
                <a className="nav-link ml-5">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link ml-5" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ml-5" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <form className="form-inline">
            <Link to="/Register">
              <button
                className="btn btn-lg btn-outline-danger mr-5 register"
                type="button"
              >
                Register
              </button>
            </Link>
            <Link to="/Login">
              <button
                className="btn btn-lg btn-outline-danger mr-5 signIn"
                type="button"
              >
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
