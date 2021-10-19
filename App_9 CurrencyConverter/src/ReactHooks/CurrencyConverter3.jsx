import React from "react";

import {Store} from "./Store";
import {get_Rates, setCurrency_1, setCurrency_2} from "./action";

const CurrencyConverter3 = () => {
  const [firstCurrency2, setFirstCurrency1] = React.useState("EUR");
  const [secondCurrency2, setSecondCurrency] = React.useState("EUR");
  const [rate, setRate] = React.useState("1");

  const Context = React.useContext(Store);

  console.log(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrency_1(firstCurrency2);
    setCurrency_2(secondCurrency2);
    // get_Rates(rate);
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
          id="curren"
          onChange={(event) => setFirstCurrency1(event.target.value.toUpperCase())}
          value={Context.state.first_Currency}
        />
        <input
          type="text"
          onChange={(event) => setSecondCurrency(event.target.value.toUpperCase())}
          value={Context.state.second_Currency}
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
