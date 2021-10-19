import {SET_RATE, SET_CURRENCY1, SET_CURRENCY2} from "./action";

// Initial Global React State
export const initialState = {
  firstCurrency2: "USD",
  secondCurrency2: "USD",
  rate2: "1",
};

// Reducer (Reducer/currencyReducer.js)
export const currencyReducer = (state = initialState, action) => {
  // console.log(`Action Received: ${action}`, action, state);
  switch (action.type) {
    case SET_RATE:
      return {...state, rate2: action.payload};
    case SET_CURRENCY1:
      return {...state, firstCurrency2: action.payload};
    case SET_CURRENCY2:
      return {...state, secondCurrency2: action.payload};
    default:
      return state;
  }
};
