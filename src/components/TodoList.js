import React, {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import {FaCheckDouble} from "react-icons/fa";
import {REMOVE_TODO} from "../context/action.types";

const TodoList = () => {
  const {todos, dispatch} = useContext(TodoContext);

  const handelDelete = (itemID) => {
    dispatch({
      type: REMOVE_TODO,
      payload: itemID,
    });
  };
  return (
    <React.Fragment>
      {todos.map((item) => (
        <div className="todo-list" key={item.id}>
          <ul>
            <li>{item.input}</li>
          </ul>
          <span className="float-right" onClick={() => handelDelete(item.id)}>
            <FaCheckDouble />
          </span>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
