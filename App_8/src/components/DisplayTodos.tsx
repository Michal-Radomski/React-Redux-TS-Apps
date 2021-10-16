import React from "react";
import {connect} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";

import {addTodos, completeTodos, removeTodos, updateTodos} from "../redux/reducer";
import TodoItem from "./TodoItem";

const DisplayTodos = (props: Props3): JSX.Element => {
  // console.log(props);
  const [sort, setSort] = React.useState("active");
  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort("active")}>
          Active
        </motion.button>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort("completed")}>
          Completed
        </motion.button>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort("all")}>
          All Cards
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item: Item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* //- For completed items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item: Item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* //- For all items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item: Item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addTodo: (obj: Props) => dispatch(addTodos(obj)),
    removeTodo: (id: Props) => dispatch(removeTodos(id)),
    updateTodo: (obj: Props) => dispatch(updateTodos(obj)),
    completeTodo: (id: Props) => dispatch(completeTodos(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
