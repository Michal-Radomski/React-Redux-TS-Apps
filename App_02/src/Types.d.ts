type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
type RootState = ReturnType<typeof store.getState>;

interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

interface Props {
  todo?: Todo | any;
  toggleTodo: ToggleTodo;
}

type AddTodo = (text: string) => void;

interface Props2 {
  addTodo?: AddTodo;
}
