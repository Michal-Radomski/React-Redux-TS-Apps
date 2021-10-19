import axios from "axios";

// API key
const API_KEY = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

// Action type
export const SETexRATE = "SETexRATE";
export const SET_CURRENCY_1 = "SET_CURRENCY_1";
export const SET_CURRENCY_2 = "SET_CURRENCY_2";

// Action Creator getRates()
export const get_Rates = (first_Currency, second_Currency) => {
  return async function (dispatch, getState) {
    // - For testing purposes only
    // dispatch({type: SET_RATE, payload: 0.5});
    await getState(
      axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${first_Currency}_${second_Currency}&compact=ultra`,
      })
        .then((response) => {
          let responseRate = response.data[`${first_Currency}_${second_Currency}`];
          responseRate = responseRate.toFixed(3);
          // console.log(`responseRate: ${responseRate}`, responseRate);
          dispatch({type: SETexRATE, payload: responseRate});
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
};

// Other Action Creators
export const setCurrency_1 = (first_Currency) => (dispatch) => {
  dispatch({type: SET_CURRENCY_1, payload: first_Currency});
};
export const setCurrency_2 = (second_Currency) => (dispatch) => {
  dispatch({type: SET_CURRENCY_2, payload: second_Currency});
};
