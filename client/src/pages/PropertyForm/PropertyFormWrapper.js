import React, { useContext } from "react";
import PropertyForm from "./PropertyForm";
import { UserContext } from "../../context";

const PropertyFormWrapper = props => {
  const { state } = useContext(UserContext);

  return <PropertyForm user={state} />;
};

export default PropertyFormWrapper;
