import React, { Component, useContext } from "react";
// import { Link } from "react-router-dom";

// import API from "../utils/API";
import Jumbotron from "../components/Jumbotron/Jumbotron";

// import { Context } from "../context";

const Home = () => {
  // const {
  //   state: { currentUser }
  // } = useContext(Context);

  return (
    <>
      {/* <div>{JSON.stringify(currentUser)}</div> */}
      <Jumbotron />
    </>
  );
};

export default Home;
