import {motion} from "framer-motion";

import "./App.scss";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{y: -200}}
        animate={{
          y: 0,
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{type: "spring", duration: 1.0}}
        whileHover={{scale: 1.1}}
      >
        Todo App
      </motion.h1>
      <motion.div initial={{y: 1000}} animate={{y: 0}} transition={{type: "spring", duration: 1}}>
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
