import React, { useContext, useEffect } from "react";
import { UserContext } from "../context";
// import API from "../utils/API";
// import { Link } from 'react-router-dom';

function Dashboard(props) {
  const { state, dispatch } = useContext(UserContext);

  // useEffect(() => {
  //   console.log("state", state);
  //   if (!state.currentUser) {
  //     props.history.push("/register");
  //   }
  // }, [state.currentUser]);

  return (
    <>
      <div>{JSON.stringify(state)}</div>;
    </>
  );
}

export default Dashboard;
