import axios from "axios";

// Action type
export const SET_CURRENCIES = "SET_CURRENCIES";
// API key
const API_KEY = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

// Action Creator
export const getRates = (firstCurrency2, secondCurrency2) => {
  return async function (dispatch, getState) {
    await getState(
      axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency2}_${secondCurrency2}&compact=ultra`,
      })
        .then((response) => {
          let responseRate = response.data[`${firstCurrency2}_${secondCurrency2}`];
          response = responseRate.toFixed(3);
          dispatch({type: "SET_CURRENCIES", payload: response});
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
};
