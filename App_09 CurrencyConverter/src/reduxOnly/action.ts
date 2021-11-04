// Action types
export const SET_RATE_5 = "SET_RATE_5";
export const SET_CURRENCY1_5 = "SET_CURRENCY1_5";
export const SET_CURRENCY2_5 = "SET_CURRENCY2_5";

// Action Creators for setting up the currencies
export const setCurrency1_5 = (firstCurrency5: string) => {
  return {type: SET_CURRENCY1_5, payload: firstCurrency5};
};

export const setCurrency2_5 = (secondCurrency5: string) => {
  return {type: SET_CURRENCY2_5, payload: secondCurrency5};
};
