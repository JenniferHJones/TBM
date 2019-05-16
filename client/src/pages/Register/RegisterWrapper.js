import React, { useContext } from "react";
import Register from "./Register";
import { UserContext } from "../../context";

const RegisterWrapper = props => {
  const { state, dispatch } = useContext(UserContext);

  const updateUser = user => {
    console.log(user);
    dispatch({ type: "set_current_user", value: user });
  };

  return <Register update={updateUser} history={props.history} />;
};

export default RegisterWrapper;
