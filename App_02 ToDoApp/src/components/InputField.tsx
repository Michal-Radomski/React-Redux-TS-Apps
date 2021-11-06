import React from "react";
import {connect} from "react-redux";

import {addTodo, addText, editAddTodo} from "../redux/actions";

const InputField = (props: {addText: any; text: string; selected: number; addTodo: any}): JSX.Element => {
  const {addText, text, selected, addTodo} = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => addText(event.target.value);
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const obj: any = {value: text, selected: selected};
    if (selected || selected === 0) editAddTodo(obj);
    else addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" value={text} placeholder="Enter your todo..." onChange={handleChange} />
    </form>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addTodo: (todo: Todo) => dispatch(addTodo(todo)),
  addText: (value: string) => dispatch(addText(value)),
  editAddTodo: (obj: Todo) => dispatch(editAddTodo(obj)),
});

const mapStateToProps = (state: State) => ({
  text: state.globalState.text,
  selected: state.globalState.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
