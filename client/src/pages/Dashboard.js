import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context";
import Card from "../components/Cards/cards";
import "./dashboard.css";

function Dashboard(props) {
  const { state } = useContext(UserContext);

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
