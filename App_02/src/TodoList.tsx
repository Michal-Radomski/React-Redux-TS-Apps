import React from "react";
import {connect, useSelector} from "react-redux";

import TodoListItem from "./TodoListItem";

// const TodoList: React.FC<Props> = ({todo, toggleTodo}): JSX.Element => {
const TodoList: React.FC<Props> = (props: any): JSX.Element => {
  console.log("props:", props);

  const globalState: RootState = useSelector((state) => state);
  console.log("globalState:", globalState);

  return (
    <ol>
      {/* {props.state.map((todo: Todo) => (
        <TodoListItem key={props.todo.text} todo={props.todo} toggleTodo={props.toggleTodo} />
      ))} */}
    </ol>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.data,
});

export default connect(mapStateToProps, null)(TodoList);

// import React from "react";
// import TodoListItem from "./TodoListItem";

// const TodoList: React.FC<Props> = ({todo, toggleTodo}): JSX.Element => {
//   return (
//     <ol>
//       {todo.map((todo: Todo) => (
//         <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
//       ))}
//     </ol>
//   );
// };

// export default TodoList;
