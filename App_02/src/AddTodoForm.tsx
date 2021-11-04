import React from "react";
import {connect} from "react-redux";
import {addTodoForm} from "./redux/actions";

const AddTodoForm: React.FC<Props2> = (props: any): JSX.Element => {
  console.log("props:", props);
  const [text, setText] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  // const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   props.addTodo(text);
  //   setText("");
  // };

  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.addTodoForm(text);
    setText("");
  };

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit" onClick={onClick}>
          Add Todo Item
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.data,
});

export default connect(mapStateToProps, {addTodoForm})(AddTodoForm);
