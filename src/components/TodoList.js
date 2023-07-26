import React, {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import {FaCheckDouble} from "react-icons/fa";
import {REMOVE_TODO} from "../context/action.types";
import toast from "react-hot-toast";

const TodoList = () => {
  const {todos, dispatch, themes} = useContext(TodoContext);
  console.log(themes);

  const handelDelete = (itemID) => {
    dispatch({
      type: REMOVE_TODO,
      payload: itemID,
    });
    toast.success("Deleted");
  };

  return (
    <React.Fragment>
      {todos.map((item) => (
        <div className="todo-list" key={item.id}>
          <ul>
            <li>{item.input}</li>
          </ul>
          <span className="float-right" onClick={() => handelDelete(item.id)}>
            <FaCheckDouble className="icon" color="black" />
          </span>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
