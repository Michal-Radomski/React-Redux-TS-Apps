import axios from "axios";

// API key
const API_KEY: ProcessEnv = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

// Action types
export const SET_RATE_5 = "SET_RATE_5";
export const SET_CURRENCY1_5 = "SET_CURRENCY1_5";
export const SET_CURRENCY2_5 = "SET_CURRENCY2_5";

// Action Creator getRates5()
export const getRates5: Fetch = (firstCurrency5: string, secondCurrency5: string) => {
  // - For testing purposes only
  // return {type: SET_RATE_5, payload: 0.5};
  return async function (getState: Fetch) {
    await getState(
      axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency5}_${secondCurrency5}&compact=ultra`,
      })
        .then((response: Fetch) => {
          let responseRate = response.data[`${firstCurrency5}_${secondCurrency5}`];
          responseRate = responseRate.toFixed(3);
          return {type: SET_RATE_5, payload: responseRate};
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
};

// Other Action Creators
export const setCurrency1_5 = (firstCurrency5: string) => {
  return {type: SET_CURRENCY1_5, payload: firstCurrency5};
};

export const setCurrency2_5 = (secondCurrency5: string) => {
  return {type: SET_CURRENCY2_5, payload: secondCurrency5};
};
