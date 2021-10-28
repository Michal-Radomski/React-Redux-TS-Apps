import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

import App from "./App";
import setupSocket from "./sockets";
import rootReducer from "./reducers";
import handleNewMessage from "./sagas";
import username from "./utils/name";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
