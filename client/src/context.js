import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "set_current_user":
      return { ...state, currentUser: action.value };
    default:
      return;
  }
};
const initialState = { currentUser: null };

const Context = React.createContext(initialState);

function UserContext(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}

export { UserContext, Context };
