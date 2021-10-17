// Redux Store

import {createStore, compose} from "redux";

// State
const initialState = {
  firstCurrency: "",
  secondCurrency: "",
  rate: "",
};

// Reducer
const reducer = (state = initialState, action) => {
  if (action.type === "SET_CURRENCIES") {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload),
    });
  }
  return state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

export default store;
