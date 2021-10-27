import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Initial Global State
const initialState: State_4 = {
  firstCurrency4_G: "CAD",
  secondCurrency4_G: "CAD",
  rate4_G: 1,
};

export const currencySlice = createSlice({
  name: "currencies",
  initialState: initialState,
  reducers: {
    setFirstCurrency4_G: (state: RootState, action: PayloadAction<string>) => {
      state.firstCurrency4_G = action.payload;
    },
    setSecondCurrency4_G: (state: RootState, action: PayloadAction<string>) => {
      state.secondCurrency4_G = action.payload;
    },
    setRate4_G: (state: RootState, action: PayloadAction<number>) => {
      state.rate4_G = action.payload;
      // console.log("action.payload:", action.payload);
    },
  },
});

export const {setFirstCurrency4_G, setSecondCurrency4_G, setRate4_G} = currencySlice.actions;
export default currencySlice.reducer;

// console.log("currencySlice:", currencySlice);
