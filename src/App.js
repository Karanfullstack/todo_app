import React, {useReducer} from "react";
import TodoList from "./components/TodoList";
import {TodoContext} from "./context/TodoContext";
import TodoReducer from "./context/reducer";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  console.log(todos);

  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <React.Fragment>
        <TodoForm />
        <TodoList />
      </React.Fragment>
    </TodoContext.Provider>
  );
};

export default App;
