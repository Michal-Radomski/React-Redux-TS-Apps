import {motion} from "framer-motion";
import React from "react";
import {AiFillEdit} from "react-icons/ai";
import {IoCheckmarkDoneSharp, IoClose} from "react-icons/io5";

const TodoItem = (props: Props2): JSX.Element => {
  // console.log(props);
  const {item, updateTodo, removeTodo, completeTodo} = props;

  const inputRef = React.useRef<HTMLTextAreaElement | any>(true);

  const changeFocus = () => {
    if (inputRef) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const update = (id: number, value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.which === 13) {
      // -Here 13 is key code for the Enter Key
      updateTodo({id, item: value});
      inputRef.current.disabled = true;
    }
  };

  const framerInitialProperty = {x: "150vw", transition: {type: "spring", duration: 2}};
  // console.log(inputRef.current);

  return (
    <motion.li
      initial={framerInitialProperty}
      animate={{x: 0, transition: {type: "spring", duration: 2}}}
      whileHover={{
        scale: 0.9,
        transition: {type: "spring", duration: 0.1},
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: {duration: 0.5},
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef.current}
        defaultValue={item.item}
        onKeyPress={(event) => update(item.id, inputRef.current.value, event)}
      />
      <div className="btns">
        <motion.button
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.9}}
          onClick={() => changeFocus()}
          style={{color: "darkBlue"}}
        >
          <AiFillEdit />
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{scale: 1.4}}
            whileTap={{scale: 0.9}}
            style={{color: "green"}}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.9}}
          style={{color: "red"}}
          onClick={() => removeTodo(item.id)}
        >
          <IoClose />
        </motion.button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
