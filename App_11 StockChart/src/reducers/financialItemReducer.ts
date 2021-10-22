import {GET_FINANCIAL_ITEM} from "../actions/types";

const initialState = {
  financialItem: null,
};

export default function financialItemReducer(state = initialState, action) {
  if (action.type === GET_FINANCIAL_ITEM) {
    return {
      ...state,
      financialItem: action.payload,
    };
  } else {
    return state;
  }
}
