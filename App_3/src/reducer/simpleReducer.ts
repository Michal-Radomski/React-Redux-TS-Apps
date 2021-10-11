/*
 src/reducers/simpleReducer.js
*/
const simpleReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default simpleReducer;
