import React from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

const CurrencyConverter = () => {
  React.useEffect(() => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=USD_PLN&compact=ultra`,
    })
      .then((response) => {
        console.log(response.data);
        console.log("API_KEY:", API_KEY);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>CurrencyConverter</div>;
};

export default CurrencyConverter;
