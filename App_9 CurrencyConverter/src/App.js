import React from "react";
// import {Provider} from "react-redux";

import "./App.scss";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyConverter2 from "./CurrencyConverter2";
// import store from "./store";

function App() {
  return (
    <div>
      <CurrencyConverter />
      <br />
      {/* <Provider store={store}> */}
      <CurrencyConverter2 />
      {/* </Provider> */}
    </div>
  );
}

export default App;
