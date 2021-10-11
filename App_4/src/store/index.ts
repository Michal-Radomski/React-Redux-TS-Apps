// Redux Store

import {createStore, compose} from "redux";

// State
const initialState: State = {
  posts: [{id: -1, title: "Test Post"}],
  loginModal: {
    open: false,
  },
};

// Reducer
const reducer = (state = initialState, action: Action): State => {
  if (action.type === "ADD_POST") {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload),
    });
  }

  if (action.type === "LOAD_POSTS") {
    return {
      ...state,
      posts: state.posts.concat(action.payload),
    };
  }

  return state;
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducer,
//   //- Below is the Line to connect the Store with Redux DevTools
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(reducer, composeEnhancers());

export default store;

// + createStore API
//- getState for accessing the current state of the application
//- dispatch for changing state via an action
//- subscribe for responding to state changes

//+ A reducer is just a function that takes two arguments and returns your app's current state. The two arguments it takes are:
//- Your current state (JavaScript object)
//- An action (also a JavaScript object)

//+ Redux actions are JavaScript objects that contain two properties: type and payload.
//- These actions are "dispatched," or used as arguments by the Redux store's dispatch API method.

// + Redux action:
//- {
//-   type: 'ADD_POST',
//-   payload: { id: 1, title: 'Redux Tutorial 2019' }
//- }

// + Dispatch (Updating) the State:
//- store.dispatch({ type: 'ADD_POST', payload: { id: 0, title: 'How to Use Redux' } })

//+ Print the State:
//- store.getState();

// -react-redux provides a component called Provider and a function called connect.
// -The Provider component wraps around React's root App component.
// -We pass our store through as a prop to "provide" it to all components within our app

//+ We can now access our state directly within components using react-redux's connect function
//+ The connect function takes another function as an argument: mapStateToProps.
//- mapStateToProps determines what state from our store we want to pull into our component.
//- In this case, we're specifying to only pull our state's posts property
//+ By creating a mapDispatchToProps function and passing it as the second argument to connect, we're making our store's
//- dispatch method available for use within our component's this.props object

//+ Redux-Thunk is a library meant for handling action creators, functions meant solely to return "actions," JavaScript objects with a updated state data:
//- /Can be used Fetch Method/
//- Setup your store's reducer to handle a new action
//- Fetch the data and dispatch a corresponding action
