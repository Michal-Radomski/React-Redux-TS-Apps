export const persistTodos = () => ({
  type: "PERSIST_TODOS",
});

export const addText = (value: string) => ({
  type: "ADD_TEXT",
  payload: value,
});

export const addTodo = (todo: Todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (key: number) => ({
  type: "DELETE_TODO",
  payload: key,
});

export const editTodo = (key: number) => ({
  type: "EDIT_TODO",
  payload: key,
});

export const editAddTodo = (obj: Todo) => ({
  type: "EDIT_ADD_TODO",
  payload: obj,
});

export const deleteAll = () => ({
  type: "DELETE_ALL",
});
