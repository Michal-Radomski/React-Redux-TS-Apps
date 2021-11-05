import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

import {addTodo} from "./reducers";

export const store = createStore(addTodo, applyMiddleware(logger));

console.log(store.getState());
