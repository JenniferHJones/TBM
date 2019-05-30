// External imports
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import green from "@material-ui/core/colors/green";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Internal imports
import { UserContext } from "../../context";
import icon from "../../images/icon.png";
import API from "../../utils/API";
import "./nav.css";

const Nav = props => {
  const [openSnackStatus, setSnackStatus] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const variantIcon = {
    success: CheckCircleIcon
  };
  const styles1 = theme => ({
    success: {
      backgroundColor: green[600]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      fontSize: "20px",
      display: "flex",
      alignItems: "center"
    }
  });

  function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        {...other}
      />
    );
  }

  MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
  };

  const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

  useEffect(() => {
    const token = localStorage.getItem("current_user_token");
    // console.log("token", token);
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
  // console.log(state);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackStatus}
        autoHideDuration={2000}
        onClose={() => setSnackStatus(false)}
      >
        <MySnackbarContentWrapper
          variant="success"
          contentprops={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">You are now logged out.</span>}
        />
      </Snackbar>
      <nav
        className="navbar navbar-expand-lg navbar-dark pt-3 pb-3"
        style={{ backgroundColor: "black", color: "white", fontSize: "20px" }}
      >
        <img src={icon} alt="small bridge" />
        <div
          className="navbar-brand ml-3"
          style={{ color: "white", fontSize: "35px" }}
        >
          TBM
        </div>
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
            {!state.currentUser && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-hover ml-5"
                    to="/"
                    style={{ color: "gold" }}
                  >
                    Home
                  </Link>
                </li>
              </>
            )}
            {!state.currentUser && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-5"
                    to="/pricing"
                    style={{ color: "gold" }}
                  >
                    Pricing
                  </Link>
                </li>
              </>
            )}
            {state.currentUser && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-5"
                    to="/dashboard"
                    style={{ color: "gold" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-5"
                    to="/property"
                    style={{ color: "gold" }}
                  >
                    Properties
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-5"
                    to="/listing"
                    style={{ color: "gold" }}
                  >
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
                  setSnackStatus(true);
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
