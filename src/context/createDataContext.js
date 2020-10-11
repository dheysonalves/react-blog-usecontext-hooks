import React, { useReducer } from "react";

export default (reducer, actions, initialValue) => {
  const Context = React.createContext();

  // We provide a global state with theirs dispatch actions
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const boundActions = {};

    // Depends the actions amount, we fill the boundActions objects
    for (let key in actions) {
        boundActions[key] = actions[key](dispatch);
    }


    return <Context.Provider value={{ state, ...boundActions, }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
