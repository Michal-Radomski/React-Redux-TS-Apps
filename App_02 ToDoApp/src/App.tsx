import React from "react";
import {connect} from "react-redux";

import "./App.scss";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {deleteAll, persistTodos} from "./redux/actions";

const App = (props: {deleteAll: any; persistTodos: any}): JSX.Element => {
  const {deleteAll, persistTodos} = props;
  React.useEffect(() => {
    persistTodos();
  }, [persistTodos]);

  return (
    <div className="App">
      <h1 style={{textDecoration: "underline"}}>Todos App</h1>
      <InputField />
      <TodoList />
      <div>
        <button style={{marginTop: "20px", cursor: "pointer"}} onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos()),
});

export default connect(null, mapDispatchToProps)(App);
