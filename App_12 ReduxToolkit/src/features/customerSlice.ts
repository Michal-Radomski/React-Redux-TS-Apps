import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    addCustomer: (state: RootState, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state: RootState, action: PayloadAction<AddFoodToCustomerPayload>) => {
      state.value.forEach((customer: Customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const {addCustomer, addFoodToCustomer} = customerSlice.actions;

export default customerSlice.reducer;

// console.log("customerSlice:", customerSlice);
