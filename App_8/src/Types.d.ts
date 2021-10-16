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

type Props3 = Props2 | Props3;
