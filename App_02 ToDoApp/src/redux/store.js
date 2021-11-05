import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

import {addTodo} from "./reducers"; //rootReducer

export const store = createStore(addTodo, composeWithDevTools(applyMiddleware(logger)));

// console.log(store.getState());
