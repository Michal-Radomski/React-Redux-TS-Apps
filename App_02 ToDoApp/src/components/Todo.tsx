// import React from "react";
import {connect} from "react-redux";

import {deleteTodo, editTodo} from "../redux/actions";

const Todo = (props: {
  todo: Todo;
  idx: number;
  deleteTodo: any;
  editTodo: any;
  selected: number;
  text: string;
}): JSX.Element => {
  const {todo, idx, deleteTodo, editTodo, selected, text} = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        cursor: "pointer",
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div style={{cursor: "pointer"}} onClick={() => deleteTodo(idx)}>
        x
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  deleteTodo: (key: number) => dispatch(deleteTodo(key)),
  editTodo: (key: number) => dispatch(editTodo(key)),
});

const mapStateToProps = (state: State) => ({
  text: state.globalState.text,
  selected: state.globalState.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
