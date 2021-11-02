import React from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {setFirstCurrency4_G, setSecondCurrency4_G, setRate4_G} from "../ReduxToolkit/currencySlice";

const API_KEY: ProcessEnv = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

const CurrencyConverter5 = (): JSX.Element => {
  const Currencies = useSelector((state: RootState) => state.currencies);
  const dispatch: Dispatch = useDispatch();
  // console.log("Currencies, dispatch:", Currencies, dispatch);

  const [firstCurrency4, setFirstCurrency4] = React.useState(Currencies.firstCurrency4_G);
  const [secondCurrency4, setSecondCurrency4] = React.useState(Currencies.secondCurrency4_G);
  // console.log("Local State: ", firstCurrency4, secondCurrency4);

  const getRate4 = (firstCurrency4: string, secondCurrency4: string) => {
    //- for testing purposes only
    // dispatch(setRate4_G(0.5));
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency4}_${secondCurrency4}&compact=ultra`,
    })
      .then((response: Fetch) => {
        let responseRate = response.data[`${firstCurrency4}_${secondCurrency4}`];
        responseRate = responseRate.toFixed(3);
        dispatch(setRate4_G(responseRate));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setFirstCurrency4_G(firstCurrency4));
    dispatch(setSecondCurrency4_G(secondCurrency4));
    getRate4(firstCurrency4, secondCurrency4);
  };

  return (
    <React.Fragment>
      <div className="divConvert5">
        <h3>Simple Currency Converter - Redux Only</h3>
      </div>
      <div className="divConvert5">
        <input
          type="text"
          onChange={(event) => setFirstCurrency4(event.target.value.toUpperCase())}
          value={firstCurrency4}
        />
        <input
          type="text"
          onChange={(event) => setSecondCurrency4(event.target.value.toUpperCase())}
          value={secondCurrency4}
        />
        <button type="button" onClick={handleSubmit}>
          Convert
        </button>
      </div>
      <div className="divConvert5">
        1{Currencies.firstCurrency4_G}={Currencies.rate4_G}
        {Currencies.secondCurrency4_G}
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter5;
