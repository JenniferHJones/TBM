import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import PropertyForm from "./PropertyForm";
import { UserContext } from "../../context";

const PropertyFormWrapper = props => {
  const { state, dispatch } = useContext(UserContext);

  if (!state.currentUser) {
    return <Redirect to="/" />;
  }

  return <PropertyForm user={state} />;
};

export default PropertyFormWrapper;
