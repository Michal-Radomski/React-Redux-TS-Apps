import {combineReducers} from "redux";

const initState = {
  todos: [],
  text: "",
  selected: undefined,
};

const setPersist = (todos: Todos) => window.localStorage.setItem("todos2", JSON.stringify(todos));

const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "PERSIST_TODOS":
      const storage: any = window.localStorage.getItem("todos2");
      const todos = JSON.parse(storage);
      return {...state, todos: todos ? todos : []};

    case "ADD_TEXT":
      return {...state, text: action.payload};

    case "ADD_TODO":
      const todos2 = state.todos.concat(action.payload);
      window.localStorage.setItem("todos2", JSON.stringify(todos2));
      return {...state, todos: todos2, text: ""};

    case "DELETE_TODO":
      const todo3 = state.todos.filter((_todo, index) => index !== action.payload);
      setPersist(todo3);
      return {
        ...state,
        todos: todo3,
      };

    case "EDIT_TODO":
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload,
      };

    case "EDIT_ADD_TODO":
      const todo4 = state.todos.map((todo, index) => (index !== action.payload.selected ? todo : action.payload.value));
      setPersist(todo4);
      return {
        ...state,
        todos: todo4,
        selected: undefined,
        text: "",
      };

    case "DELETE_ALL":
      setPersist([]);
      return {...state, todos: [], text: ""};

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  globalState: reducer,
});

export default rootReducer;
