import React, {createContext, useContext, useReducer} from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

const CurrencyConverter3 = () => {
  const [firstCurrency, setFirstCurrency] = React.useState("EUR");
  const [secondCurrency, setSecondCurrency] = React.useState("EUR");
  const [rate, setRate] = React.useState("1");

  const getRate = (firstCurrency, secondCurrency) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency}_${secondCurrency}&compact=ultra`,
    })
      .then((response) => {
        let responseRate = response.data[`${firstCurrency}_${secondCurrency}`];
        responseRate = responseRate.toFixed(3);
        // console.log(responseRate, typeof responseRate);
        setRate(responseRate);
        // console.log(response.data[`${firstCurrency}_${secondCurrency}`]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      {/* <div className="divConvert">1$USD = {USD_PLN}PLN</div> */}
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
        <button
          type="button"
          onClick={() => {
            getRate(firstCurrency, secondCurrency);
          }}
        >
          Convert
        </button>
      </div>
      <div className="divConvert3">
        1{firstCurrency}={rate}
        {secondCurrency}
      </div>
    </React.Fragment>
  );
};

export default CurrencyConverter3;
