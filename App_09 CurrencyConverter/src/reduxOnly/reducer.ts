import {combineReducers} from "redux";

import {SET_RATE_5, SET_CURRENCY1_5, SET_CURRENCY2_5} from "./action";

// Initial Global State -> Pure Redux
const initialState: State_5 = {
  firstCurrency5: "AUD",
  secondCurrency5: "AUD",
  rate5: 1,
};

// Reducer (Reducer/currencyReducer.js)
const currencyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_RATE_5:
      return {...state, rate5: action.payload};
    case SET_CURRENCY1_5:
      return {...state, firstCurrency5: action.payload};
    case SET_CURRENCY2_5:
      return {...state, secondCurrency5: action.payload};
    default:
      return state;
  }
};

// CombineReducer (Reducer/index.js)
const rootReducer = combineReducers({
  currencies5: currencyReducer,
});

export default rootReducer;
