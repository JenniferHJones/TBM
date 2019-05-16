import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import icon from "../../images/icon.png";
import "./nav.css";

const Nav = props => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("current_user_token");
    console.log("token", token);
    if (token) {
      API.validateToken(token)
        .then(ax => dispatch({ type: "set_current_user", value: ax.data }))
        .catch(() => {
          dispatch({ type: "set_current_user", value: null });
          localStorage.setItem("current_user_token", "");
        });
    }
  }, [dispatch]);
  // console.log(UserContext);
  console.log(state);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark pt-3 pb-3">
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
              <Link className="nav-link ml-5" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {!state.currentUser && (
              <>
                <li className="nav-item">
                  <Link className="nav-link ml-5" to="">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ml-5" to="">
                    Pricing
                  </Link>
                </li>
              </>
            )}
            {state.currentUser && (
              <>
                <li className="nav-item">
                  <Link className="nav-link ml-5" to="/property">
                    Properties
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ml-5" to="/listing">
                    Listings
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div>
            {state.currentUser && (
              <span className="userName mr-5">
                {state.currentUser.firstName}
              </span>
            )}
            {!state.currentUser && (
              <>
                <Link to="/Register">
                  <button
                    className="btn btn-outline-warning mr-5"
                    type="button"
                  >
                    Register
                  </button>
                  {""}
                </Link>
                <Link to="/Login">
                  <button
                    className="btn btn-outline-warning mr-5"
                    type="button"
                  >
                    Log In
                  </button>
                </Link>
              </>
            )}
            {state.currentUser && (
              <button
                className="btn btn-outline-warning mr-5"
                type="button"
                onClick={() => {
                  localStorage.removeItem("current_user_token");
                  dispatch({ type: "set_current_user", value: null });
                  props.history.push("/");
                }}
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
