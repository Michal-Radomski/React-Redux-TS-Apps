import React from "react";
import {connect} from "react-redux";

import "./App.scss";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {deleteAll, persistTodos} from "./redux/actions";

const App = (props) => {
  React.useEffect(() => {
    persistTodos();
  }, [props.persistTodos]);

  return (
    <div className="App">
      <h1 style={{textDecoration: "underline"}}>Todos App</h1>
      <InputField />
      <TodoList />
      <div>
        <button style={{marginTop: "20px", cursor: "pointer"}} onClick={props.deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos()),
});

export default connect(null, mapDispatchToProps)(App);
