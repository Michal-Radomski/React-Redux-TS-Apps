import React from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {setFirstCurrency4_G, setSecondCurrency4_G} from "./currencySlice";

const API_KEY: ProcessEnv = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

const CurrencyConverter4 = (): JSX.Element => {
  const Currencies = useSelector((state: RootState) => state.currencies);

  const dispatch = useDispatch();
  console.log(Currencies, dispatch);

  const [firstCurrency4, setFirstCurrency4] = React.useState(Currencies.firstCurrency4_G);
  const [secondCurrency4, setSecondCurrency4] = React.useState(Currencies.secondCurrency4_G);
  const [rate4, setRate4] = React.useState(Currencies.rate4_G);

  const getRate4 = (firstCurrency4: string, secondCurrency4: string) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency4}_${secondCurrency4}&compact=ultra`,
    })
      .then((response: Fetch) => {
        let responseRate = response.data[`${firstCurrency4}_${secondCurrency4}`];
        responseRate = responseRate.toFixed(3);

        setRate4(responseRate);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    // console.log("firstCurrency, secondCurrency:", firstCurrency, secondCurrency);
    event.preventDefault();
    dispatch(setFirstCurrency4_G(firstCurrency4));
    dispatch(setSecondCurrency4_G(secondCurrency4));
  };

  return (
    <React.Fragment>
      <div className="divConvert4">
        <h3>Simple Currency Converter - Redux Toolkit</h3>
      </div>
      <div className="divConvert4">
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
      <div className="divConvert4">
        1{firstCurrency4}={rate4}
        {secondCurrency4}
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter4;
