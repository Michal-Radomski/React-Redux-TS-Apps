import React from "react";

const TodoListItem: React.FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <li>
        <label style={{textDecoration: props.todo.complete ? "line-through" : "none"}}>
          <input
            type="checkbox"
            checked={props.todo.complete}
            onChange={() => {
              props.toggleTodo(props.todo);
            }}
          />
          {props.todo.text}
        </label>
      </li>
    </div>
  );
};

export default TodoListItem;
