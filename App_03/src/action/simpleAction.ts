/*
 src/actions/simpleAction.js
*/

export const simpleAction = () => (dispatch: State | any) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action",
  });
};
