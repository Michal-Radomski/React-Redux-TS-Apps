import React from "react";

import {initialState, currencyReducer} from "./reducer";

export const Store = React.createContext(null);

export function StoreProvider({children}) {
  const [state, dispatch] = React.useReducer(currencyReducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
}
