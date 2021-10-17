// Action Creator
import axios from "axios";

// Action type
export const SET_CURRENCIES = "SET_CURRENCIES";
// API key
const API_KEY = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

export const getRates = (firstCurrency, secondCurrency) => {
  return async function (dispatch, getState) {
    await getState(
      axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency}_${secondCurrency}&compact=ultra`,
      })
        .then((response) => {
          let responseRate = response.data[`${firstCurrency}_${secondCurrency}`];
          response = responseRate.toFixed(3);
          dispatch({type: "SET_CURRENCIES", payload: response});
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
};
