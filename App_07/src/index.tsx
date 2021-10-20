import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
declare let window: CustomWindow;
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* {console.log(store.getState().contacts)} */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
