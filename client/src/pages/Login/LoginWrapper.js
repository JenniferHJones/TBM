import React, { useContext } from "react";
import Login from "./Login";
import { UserContext } from "../../context";

const LoginWrapper = props => {
  const { /*state,*/ dispatch } = useContext(UserContext);

  const updateUser = user => {
    console.log(user);
    dispatch({ type: "set_current_user", value: user });
  };

  return <Login update={updateUser} history={props.history} />;
};

export default LoginWrapper;
