import React from "react";
import "./app.scss";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useSelector} from "react-redux";

// const initialState: Todo[] = [
//   {
//     text: "Walk the dog",
//     complete: false,
//   },
//   {
//     text: "Write app",
//     complete: true,
//   },
// ];

function App() {
  const globalState = useSelector((state: any) => state.data);
  const [todos, setTodos] = React.useState(globalState);

  // console.log("globalState:", globalState);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo: Todo) => {
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

  // const addTodo: AddTodo = (text: string) => {
  //   const newTodo = {text, complete: false};
  //   setTodos([...todos, newTodo]);
  // };

  return (
    <React.Fragment>
      <ul>
        <TodoList todo={globalState} toggleTodo={toggleTodo} />
      </ul>
      <br />
      {/* <AddTodoForm addTodo={addTodo} /> */}
      <AddTodoForm />
    </React.Fragment>
  );
}

export default App;
