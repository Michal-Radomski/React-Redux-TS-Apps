import React from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import "./App.scss";

import CurrencyConverter from "./CurrencyConverter";

import CurrencyConverter2 from "./CurrencyConverter2";
import rootReducer from "./redux/reducer";

import CurrencyConverter3 from "./ReactHooks/CurrencyConverter3";
import {StoreProvider} from "./ReactHooks/Store";

// Redux-Store
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

function App() {
  return (
    <div>
      <CurrencyConverter />
      <Provider store={store}>
        <CurrencyConverter2 />
      </Provider>
      <StoreProvider>
        <CurrencyConverter3 />
      </StoreProvider>
    </div>
  );
}

export default App;
