// Types and Interfaces

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

interface Action {
  type: string;
  payload: string | number | any;
}

type Todo = string;
type Todos = Todo[];

interface State {
  globalState: {
    todos: Todos;
    text: string;
    selected: any;
  };
}
