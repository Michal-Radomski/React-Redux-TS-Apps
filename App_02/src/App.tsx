import React from "react";
import "./app.scss";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

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

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
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

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos, newTodo]);
  };

  return (
    <React.Fragment>
      <ul>
        <TodoList todo={todos} toggleTodo={toggleTodo} />
      </ul>
      <br />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
