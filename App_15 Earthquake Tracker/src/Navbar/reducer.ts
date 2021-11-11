import types from "./types";

const initialState: IEarthquakesReducer = {
  startTime: "NOW - 3days",
  endTime: "",
  numOfDays: "3 days",
};

const navbarReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.startTimeChanged:
      return {
        ...state,
        startTime: action.payload.startTime,
        endTime: "",
      };
    case types.endTimeChanged:
      return {
        ...state,
        endTime: action.payload.endTime,
      };
    case types.numOfDaysChanged:
      return {
        ...state,
        numOfDays: action.payload.numOfDays,
      };
    default:
      return state;
  }
};

export default navbarReducer;
