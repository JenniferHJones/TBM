import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context";
import Card from "../components/Cards/cards";

function Dashboard(props) {
  const { state, dispatch } = useContext(UserContext);

  if (!state.currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Card />
    </div>
  );
}

export default Dashboard;
