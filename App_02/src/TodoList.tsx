import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<Props> = ({todo, toggleTodo}): JSX.Element => {
  return (
    <ol>
      {todo.map((todo: Todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ol>
  );
};

export default TodoList;
