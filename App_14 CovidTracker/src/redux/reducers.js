import {combineReducers} from "redux";

import {FETCH_DATA_GLOBAL, SELECT_COUNTRY} from "./actions";

// Initial Global State
const initialState = {
  data: {confirmed: {}, recovered: {}, deaths: {}, lastUpdate: ""},
  recoveredValue: undefined,
  selectedCountry: "",
};

// Reducer for fetchDataGlobal
const fetchDataGlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_GLOBAL:
      return {...state, data: action.payload};
    case SELECT_COUNTRY:
      return {...state, selectedCountry: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: fetchDataGlobalReducer,
});

export default rootReducer;
