import React from "react";

import {Store} from "./Store";
import {getRates, setCurrency1, setCurrency2} from "./action";
import {SET_RATE, SET_CURRENCY1, SET_CURRENCY2} from "./action";
const CurrencyConverter3 = () => {
  const [firstCurrency2, setFirstCurrency1] = React.useState("EUR");
  const [secondCurrency2, setSecondCurrency] = React.useState("EUR");
  const [rate, setRate] = React.useState("1");

  const {state, dispatch} = React.useContext(Store);

  console.log(state, dispatch);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrency1(firstCurrency2);
    setCurrency2(secondCurrency2);
    getRates(rate);
  };
  console.log();
  return (
    <React.Fragment>
      <div className="divConvert3">
        <h3>Simple Currency Converter - useReducer/useContext</h3>
      </div>
      <div className="divConvert3">
        <input
          type="text"
          // onChange={(event) => setFirstCurrency1(event.target.value.toUpperCase())}
          onChange={() => dispatch({type: SET_CURRENCY1, payload: firstCurrency2})}
          value={firstCurrency2}
        />
        <input
          type="text"
          onChange={(event) => setSecondCurrency(event.target.value.toUpperCase())}
          value={state.secondCurrency2}
        />
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
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
