import axios from "axios";

// API key
const API_KEY: ProcessEnv = process.env.REACT_APP_FreeCurrencyConverterAPI_KEY;

// Action types
export const SET_RATE = "SET_RATE";
export const SET_CURRENCY1 = "SET_CURRENCY1";
export const SET_CURRENCY2 = "SET_CURRENCY2";

// Action Creator getRates()
export const getRates = (firstCurrency2: string, secondCurrency2: string) => {
  return async function (dispatch: Dispatch, getState: (arg0: Promise<void>) => string) {
    // - For testing purposes only
    // dispatch({type: SET_RATE, payload: 0.5});
    await getState(
      axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${firstCurrency2}_${secondCurrency2}&compact=ultra`,
      })
        .then((response: Fetch) => {
          let responseRate = response.data[`${firstCurrency2}_${secondCurrency2}`];
          responseRate = responseRate.toFixed(3);
          // console.log(`responseRate: ${responseRate}`, responseRate);
          dispatch({type: SET_RATE, payload: responseRate});
          // - Need function mapDispatchToProps
          // return {type: SET_RATE, payload: responseRate};
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
};

// Other Action Creators
export const setCurrency1 = (firstCurrency2: string) => (dispatch: Dispatch) => {
  dispatch({type: SET_CURRENCY1, payload: firstCurrency2});
};
export const setCurrency2 = (secondCurrency2: string) => (dispatch: Dispatch) => {
  dispatch({type: SET_CURRENCY2, payload: secondCurrency2});
};
