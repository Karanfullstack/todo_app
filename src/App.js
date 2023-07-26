import React, {useReducer} from "react";
import TodoList from "./components/TodoList";
import {TodoContext} from "./context/TodoContext";
import TodoReducer from "./context/reducer";
import TodoForm from "./components/TodoForm";
import {ThemeReducer, initialState} from "./context/reducer";
import Navbar from "./components/Navbar";
import {Toaster} from "react-hot-toast";
const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [themes, themeDispatch] = useReducer(ThemeReducer, initialState);

  return (
    <TodoContext.Provider value={{todos, dispatch, themes, themeDispatch}}>
      <React.Fragment>
        <Toaster position="top-center" />
        <Navbar />
        <TodoForm />
        <TodoList />
      </React.Fragment>
    </TodoContext.Provider>
  );
};

export default App;
