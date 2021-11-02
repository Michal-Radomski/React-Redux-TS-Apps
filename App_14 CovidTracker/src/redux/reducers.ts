import {combineReducers} from "redux";

import {FETCH_DATA_GLOBAL, SELECT_COUNTRY, FETCH_DATA_GLOBAL_COUNTRY, SETTING_RECOVERIES_STATE} from "./actions";

// Initial Global State
const initialState: State = {
  data: {confirmed: {value: 0}, recovered: {}, deaths: {value: 0}, lastUpdate: ""},
  recoveredValue: "",
  selectedCountry: "",
};

// Reducer for fetchDataGlobal
const fetchDataGlobalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_GLOBAL:
      return {...state, data: action.payload};
    case FETCH_DATA_GLOBAL_COUNTRY:
      return {...state, data: action.payload};
    case SELECT_COUNTRY:
      return {...state, selectedCountry: action.payload};
    case SETTING_RECOVERIES_STATE:
      return {...state, recoveredValue: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: fetchDataGlobalReducer,
});

export default rootReducer;
