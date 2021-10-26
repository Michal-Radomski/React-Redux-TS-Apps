import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ReservationState = {
  // value: ["Selena Gomez"],
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState: initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      // console.log("Adding reservation");
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      // console.log("state:", state);
      state.value.splice(action.payload, 1);
    },
  },
});

export const {addReservation, removeReservation} = reservationSlice.actions;

export default reservationSlice.reducer;

// console.log("reservationSlice:", reservationSlice);
