import {configureStore} from "@reduxjs/toolkit";

import currencyReducer from "./currencySlice";

export const Store = configureStore({
  reducer: {
    currencies: currencyReducer,
  },
});

// console.log("Store:", Store);
