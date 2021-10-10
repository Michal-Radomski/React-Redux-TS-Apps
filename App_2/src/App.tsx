import React from "react";
import "./app.scss";
import TodoList from "./TodoList";

const initialState: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = React.useState(initialState);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <ul>
        <TodoList todo={todos} toggleTodo={toggleTodo} />
      </ul>
    </React.Fragment>
  );
}

export default App;
