import React from "react";
// import { UserContext } from "../context";
// import { Link } from "react-router-dom";
// import API from "../utils/API";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Profile from "../components/Profile/Profile";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <i className="far fa-check-circle fa-3x" />
            <h4 className="title">Full Service</h4>
            <p>All your property management needs in one place</p>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <i className="fa fa-lock fa-3x" />
            <h4 className="title">Security</h4>
            <p>We protect your data from theft and misuse</p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <i className="fa fa-users fa-3x" />
            <h4 className="title">Experienced Team</h4>
            <p>We work hard to deliver quality service to our clients</p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <i className="far fa-question-circle fa-3x" />
            <h4 className="title">Technical Support</h4>
            <p>Our support team guarantees a response within 24 hours</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Profile />
    </>
  );
};

export default Home;
