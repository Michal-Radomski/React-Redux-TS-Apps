import React from "react";

import {Store} from "./Store";
import {get_Rates, setCurrency_1, setCurrency_2} from "./action";
import {SETexRATE, SET_CURRENCY_1, SET_CURRENCY_2} from "./action";

const CurrencyConverter3 = () => {
  const {state, dispatch} = React.useContext(Store);
  const [firstCurrency, setFirstCurrency] = React.useState("EUR");
  const [secondCurrency, setSecondCurrency] = React.useState("EUR");
  const [rate] = React.useState(1);

  console.log(state, dispatch);

  const handleSubmit = (event) => {
    console.log(firstCurrency, secondCurrency, rate);
    event.preventDefault();
    dispatch({type: SET_CURRENCY_1, payload: firstCurrency});
    dispatch({type: SET_CURRENCY_2, payload: secondCurrency});
    get_Rates(firstCurrency, secondCurrency, dispatch);
  };

  return (
    <React.Fragment>
      <div className="divConvert3">
        <h3>Simple Currency Converter - useReducer/useContext</h3>
      </div>
      <div className="divConvert3">
        <input type="text" onChange={(event) => setFirstCurrency(event.target.value.toUpperCase())} value={firstCurrency} />
        <input
          type="text"
          onChange={(event) => setSecondCurrency(event.target.value.toUpperCase())}
          value={secondCurrency}
        />
        <button type="submit" onClick={handleSubmit}>
          Convert
        </button>
      </div>
      <div className="divConvert3">
        {/* 1{firstCurrency}={rate}
        {secondCurrency} */}
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter3;
