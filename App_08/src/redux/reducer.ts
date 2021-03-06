import {createSlice} from "@reduxjs/toolkit";

const initialState: State = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    //- Reducers:
    // Adding Todos
    addTodos: (state, action) => {
      state.push(action.payload);
      // console.log("state:", state, "action.payload:", action.payload);
      return state;
    },
    //Removing Todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //Updating Todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    // Completed Todos
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
