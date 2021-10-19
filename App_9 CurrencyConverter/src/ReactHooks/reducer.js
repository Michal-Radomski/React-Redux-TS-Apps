import {SETexRATE, SET_CURRENCY_1, SET_CURRENCY_2} from "./action";

// Initial Global React State
export const initial_State = {
  first_Currency: "CHF",
  second_Currency: "CHF",
  rateExchange: 1,
};

// Reducer (Reducer/currencyReducer.js)
export const currencyReducer = (state = initial_State, action) => {
  // console.log(`Action Received: ${action}`, action, state);
  switch (action.type) {
    case SETexRATE:
      return {...state, rateExchange: action.payload};
    case SET_CURRENCY_1:
      return {...state, first_Currency: action.payload};
    case SET_CURRENCY_2:
      return {...state, second_Currency: action.payload};
    default:
      return state;
  }
};
