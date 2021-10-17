// Redux Store

import {createStore, applyMiddleware, compose} from "redux";
import {combineReducers} from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

// State
const initialState = {
  firstCurrency2: "",
  secondCurrency2: "",
  rate2: "",
};

// Reducer
const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCIES":
      return {...state, rate2: action.payload};
    default:
      return state;
  }
};

// CombineReducer
const rootReducer = combineReducers({
  currencies: currencyReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
