import {combineReducers} from "redux";
import financialItemReducer from "./financialItemReducer";

export default combineReducers({
  financialItem: financialItemReducer,
});
