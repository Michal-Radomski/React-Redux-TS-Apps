import axios from "axios";

// API key
const API_KEY: ProcessEnv = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

// Action types
export const SETexRATE = "SETexRATE";
export const SET_CURRENCY_1 = "SET_CURRENCY_1";
export const SET_CURRENCY_2 = "SET_CURRENCY_2";

// Action Creator get_Rates()
export const get_Rates = (first_Currency: string, second_Currency: string, dispatch: Dispatch) => {
  // console.log("getting_Rates");
  // - For testing purposes only
  // dispatch({type: SETexRATE, payload: 0.5});
  axios({
    method: "GET",
    url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${first_Currency}_${second_Currency}&compact=ultra`,
  })
    .then((response: Fetch) => {
      let responseRate = response.data[`${first_Currency}_${second_Currency}`];
      responseRate = responseRate.toFixed(3);
      dispatch({type: SETexRATE, payload: responseRate});
    })
    .catch((error) => {
      console.log(error);
    });
};
