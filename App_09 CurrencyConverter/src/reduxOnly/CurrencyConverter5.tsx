import React from "react";
import axios from "axios";

import {setCurrency1_5, setCurrency2_5, SET_RATE_5} from "./action";
import reduxStore from "./reduxStore";

// API key
const API_KEY: ProcessEnv = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

const CurrencyConverter5 = (): JSX.Element => {
  const globalState: State_5 = reduxStore.getState().currencies5;

  const [firstCurrency5Local, setFirstCurrency5Local] = React.useState(globalState.firstCurrency5);
  const [secondCurrency5Local, setSecondCurrency5Local] = React.useState(globalState.secondCurrency5);
  const [rate5Local, setRate5Local] = React.useState(globalState.rate5);

  console.log("Local State: ", firstCurrency5Local, secondCurrency5Local, rate5Local);
  console.log("globalState:", globalState);

  reduxStore.subscribe(render);
  function render() {
    const reduxStoreState: State_5 = reduxStore.getState().currencies5;
    console.log("reduxStoreState:", reduxStoreState);
    setFirstCurrency5Local(reduxStoreState.firstCurrency5);
    setSecondCurrency5Local(reduxStoreState.secondCurrency5);
    setRate5Local(reduxStoreState.rate5);
  }

  const handleSubmit: any = (event: React.SyntheticEvent) => {
    event.preventDefault();
    getRates5(firstCurrency5Local, secondCurrency5Local);

    setTimeout(function () {
      reduxStore.dispatch(setCurrency1_5(firstCurrency5Local));
      reduxStore.dispatch(setCurrency2_5(secondCurrency5Local));
    }, 1000);

    setTimeout(function () {
      render();
    }, 300);
  };

  return (
    <React.Fragment>
      <div className="divConvert5">
        <h3>Simple Currency Converter - Redux Only</h3>
      </div>
      <div className="divConvert5">
        <input
          type="text"
          onChange={(event) => setFirstCurrency5Local(event.target.value.toUpperCase())}
          value={firstCurrency5Local}
        />
        <input
          type="text"
          onChange={(event) => setSecondCurrency5Local(event.target.value.toUpperCase())}
          value={secondCurrency5Local}
        />
        <button type="button" onClick={handleSubmit}>
          Convert
        </button>
      </div>
      <div className="divConvert5">
        1{firstCurrency5Local}={rate5Local}
        {secondCurrency5Local}
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter5;

// Function getRates5()
const getRates5: Fetch = async (firstCurrency5: string, secondCurrency5: string) => {
  await axios({
    method: "GET",
    url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency5}_${secondCurrency5}&compact=ultra`,
  })
    .then((response: Fetch) => {
      let responseRate = response.data[`${firstCurrency5}_${secondCurrency5}`];
      responseRate = parseFloat(responseRate.toFixed(3));
      console.log(responseRate);
      reduxStore.dispatch({type: SET_RATE_5, payload: responseRate});
    })
    .catch((error) => {
      console.log(error);
    });
};
