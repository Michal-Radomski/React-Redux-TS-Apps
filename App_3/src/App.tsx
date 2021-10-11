import {connect} from "react-redux";

import "./App.scss";
import {simpleAction} from "./action/simpleAction";

function App(props) {
  const simpleAction = () => {
    props.simpleAction();
  };

  return (
    <div>
      <button onClick={simpleAction}>Test redux action</button>
      <pre>{JSON.stringify(props)}</pre>
      {/* {console.log(props)} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
