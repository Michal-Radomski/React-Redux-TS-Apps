import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./App";
import store from "./store/index";

declare let window: CustomWindow;
window.store = store;

//- Alternative methods:
// (window as any).store = store
// declare const window: any;
// window.store =store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
