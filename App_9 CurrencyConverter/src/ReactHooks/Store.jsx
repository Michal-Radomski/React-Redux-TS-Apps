import React from "react";

import {initial_State, currencyReducer} from "./reducer";

export const Store = React.createContext(null);

export const StoreProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(currencyReducer, initial_State);
  // console.log("useReducer:", state, dispatch);
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
};
