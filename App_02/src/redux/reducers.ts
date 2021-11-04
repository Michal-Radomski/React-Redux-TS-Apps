import {combineReducers} from "redux";

import {ADD_TODO_FORM, SET_TODO_TASK} from "./actions";

// Initial Global State
const initialState: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

// Reducer for fetchDataGlobal
const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO_FORM:
      return [...state, action.payload];
    // case SET_TODO_TASK:
    //   return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: reducers,
});

export default rootReducer;
