import React from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import "./App.scss";

import CurrencyConverter from "./CurrencyConverter";

// React-Redux-Store -> import
import CurrencyConverter2 from "./CurrencyConverter2";
import rootReducer from "./redux/reducer";

// React Hook -> Store
import CurrencyConverter3 from "./ReactHooks/CurrencyConverter3";
import {StoreProvider} from "./ReactHooks/Store";

// Redux Toolkit -> import
import CurrencyConverter4 from "./ReduxToolkit/CurrencyConverter4";
import {Store} from "./ReduxToolkit/Store";

// Pure Redux (only Redux -> no React-Redux library) -> import
import CurrencyConverter5 from "./reduxOnly/CurrencyConverter5";

// React-Redux Store + Redux DevTools -> Setting Up
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

function App(): JSX.Element {
  return (
    <React.Fragment>
      <CurrencyConverter />
      <Provider store={store}>
        <CurrencyConverter2 />
      </Provider>
      <StoreProvider>
        <CurrencyConverter3 />
      </StoreProvider>
      <Provider store={Store}>
        <CurrencyConverter4 />
      </Provider>
      <CurrencyConverter5 />
    </React.Fragment>
  );
}

export default App;
