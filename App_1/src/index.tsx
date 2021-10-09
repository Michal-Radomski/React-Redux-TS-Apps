import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, Store} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "./store/reducer";

const store: Store<ArticleState, ArticleAction> & {dispatch: DispatchType} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
