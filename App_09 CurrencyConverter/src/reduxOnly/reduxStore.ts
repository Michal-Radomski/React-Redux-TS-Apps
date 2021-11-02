import {createStore, applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";

import rootReducer from "./reducer";

const middleware = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default reduxStore;
