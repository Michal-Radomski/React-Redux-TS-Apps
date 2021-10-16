type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

interface Item {
  id: number;
  item: string;
  completed: boolean;
}

type State = Item[];

type Props = {
  todos: State;
  addTodo: any;
};

type Props2 = {
  item: Item;
  removeTodo: any;
  updateTodo: any;
  completeTodo: any;
};
