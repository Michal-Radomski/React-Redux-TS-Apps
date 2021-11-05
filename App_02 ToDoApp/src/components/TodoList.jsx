import React from "react";
import {connect} from "react-redux";

import Todo from "./Todo";

const TodoList = (props) => {
  // console.log(props);
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
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} idx={index} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
