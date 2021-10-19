import React from "react";

import {Store} from "./Store";
import {get_Rates, SET_CURRENCY_1, SET_CURRENCY_2} from "./action";

const CurrencyConverter3 = () => {
  const {state, dispatch} = React.useContext(Store);
  // console.log("useContext:", state, dispatch);

  const [firstCurrency, setFirstCurrency] = React.useState(state.first_Currency);
  const [secondCurrency, setSecondCurrency] = React.useState(state.second_Currency);

  const handleSubmit = (event) => {
    // console.log("firstCurrency, secondCurrency:", firstCurrency, secondCurrency);
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
        <button type="button" onClick={handleSubmit}>
          Convert
        </button>
      </div>
      <div className="divConvert3">
        1{state.first_Currency}={state.rateExchange}
        {state.second_Currency}
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter3;
