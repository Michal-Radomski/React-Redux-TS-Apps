// import React from "react";
import {connect} from "react-redux";

import Todo from "./Todo";

const TodoList = ({todos}: RootState): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "0 auto",
        height: "200px",
        overflowY: "auto",
        overflowX: "hidden",
        color: "darkviolet",
      }}
    >
      {todos.map((todo: Todo, index: number) => (
        <Todo key={index} todo={todo} idx={index} />
      ))}
    </div>
  );
};
const mapStateToProps = (state: State) => ({
  todos: state.globalState.todos,
});

export default connect(mapStateToProps)(TodoList);
