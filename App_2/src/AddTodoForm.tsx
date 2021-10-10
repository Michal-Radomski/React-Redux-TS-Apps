import React from "react";

const AddTodoForm: React.FC<Props2> = (props): JSX.Element => {
  const [text, setText] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.addTodo(text);
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

export default AddTodoForm;
