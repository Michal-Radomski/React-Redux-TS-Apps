import React from "react";

import {getRates5, setCurrency1_5, setCurrency2_5} from "./action";
import reduxStore from "./reduxStore";

const CurrencyConverter5 = (): JSX.Element => {
  const globalState: State_5 = reduxStore.getState().currencies5;
  console.log(globalState);

  const [firstCurrency5Local, setFirstCurrency5Local] = React.useState(globalState.firstCurrency5);
  const [secondCurrency5Local, setSecondCurrency5Local] = React.useState(globalState.secondCurrency5);
  console.log("Local State: ", firstCurrency5Local, secondCurrency5Local);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    reduxStore.dispatch(setCurrency1_5(firstCurrency5Local));
    reduxStore.dispatch(setCurrency2_5(secondCurrency5Local));
    // reduxStore.dispatch(getRates5(firstCurrency5Local, secondCurrency5Local));
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
        1{globalState.firstCurrency5}={globalState.rate5}
        {globalState.secondCurrency5}
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter5;
