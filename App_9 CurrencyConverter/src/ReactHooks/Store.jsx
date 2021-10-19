import React from "react";

import {initial_State, currencyReducer} from "./reducer";

export const Store = React.createContext(null);

export function StoreProvider({children}) {
  const [state, dispatch] = React.useReducer(currencyReducer, initial_State);
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
}
