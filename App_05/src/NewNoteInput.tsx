import React from "react";

const NewNoteInput: React.FC<NewNoteInputProps> = (props) => {
  const [note, setNote] = React.useState("");

  const updateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    props.addNote(note);
    setNote("");
  };

  return (
    <div>
      <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
      <button onClick={onAddNoteClick}>Add a Note</button>
    </div>
  );
};

export default NewNoteInput;
