// Redux Store

import {createStore, compose} from "redux";
import {combineReducers} from "redux";

// State
const initialState = {
  firstCurrency: "",
  secondCurrency: "",
  rate: "",
};

// Reducer
const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCIES":
      return action.payload;
    default:
      return state;
  }
};

// CombineReducer
const reducer = combineReducers({
  currencies: currencyReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

export default store;
