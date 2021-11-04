// Actions Types
export const ADD_TODO_FORM = "ADD_TODO_FORM";
export const SET_TODO_TASK = "SET_TODO_TASK";

// Actions
export const addTodoForm: AddTodo = (text: string) => (dispatch: any) => {
  const newTodo = {text, complete: false};
  console.log("newTodo:", newTodo);
  dispatch({type: ADD_TODO_FORM, payload: newTodo});
};
