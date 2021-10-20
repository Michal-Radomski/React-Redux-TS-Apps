import React from "react";

import {initial_State, currencyReducer} from "./reducer";

export const Store: State | RootState = React.createContext(null);

export const StoreProvider: React.FC<Props | RootState> = ({children}): JSX.Element => {
  const [state, dispatch] = React.useReducer(currencyReducer, initial_State);
  // console.log("useReducer:", state, dispatch);
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
};
