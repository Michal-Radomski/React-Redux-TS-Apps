import React from "react";
import "./App.scss";
import NewNoteInput from "./NewNoteInput";
import {useSelector, useDispatch} from "react-redux";
import {addNote} from "./actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <React.Fragment>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        <li>Note nr 1</li>
      </ul>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </React.Fragment>
  );
}

export default App;
