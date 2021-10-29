import {combineReducers} from "redux";
import messages from "./messages";
import users from "./users";

const rootReducer = combineReducers({
  messages: messages,
  users: users,
});

export default rootReducer;
