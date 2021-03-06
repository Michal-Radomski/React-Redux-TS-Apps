import {takeEvery} from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

const handleNewMessage = function* handleNewMessage(params: Params) {
  // console.log("params:", params);
  yield takeEvery(types.ADD_MESSAGE, (action: Action) => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

// console.log("handleNewMessage;", handleNewMessage);

export default handleNewMessage;
