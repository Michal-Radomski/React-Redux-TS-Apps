import React from "react";
import {connect} from "react-redux";

import {addTodo, addText, editAddTodo} from "../redux/actions";

const InputField = (props) => {
  const {addText, text, selected, addTodo} = props;

  const handleChange = (event) => addText(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selected || selected === 0)
      editAddTodo({
        value: text,
        selected: selected,
      });
    else addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" value={text} placeholder="Enter your todo..." onChange={handleChange} />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  addText: (value) => dispatch(addText(value)),
  editAddTodo: (obj) => dispatch(editAddTodo(obj)),
});

const mapStateToProps = (state) => ({
  text: state.globalState.text,
  selected: state.globalState.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
