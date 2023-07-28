import React, {useContext, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import {REMOVE_TODO, TOOGLE_TODO} from "../context/action.types";
import toast from "react-hot-toast";
import {RiDeleteBin6Fill} from "react-icons/ri";

const TodoList = () => {
  const {todos, dispatch} = useContext(TodoContext);
  console.log(todos);
  const handelDelete = (item) => {
    dispatch({
      type: REMOVE_TODO,
      payload: item.id,
    });
    toast.success("Deleted");
  };

  const toogleHandel = function (id) {
    dispatch({
      type: TOOGLE_TODO,
      payload: id,
    });
  };

  return (
    <React.Fragment>
      {todos.map((item) => (
        <div className="todo-list" key={item.id}>
          <input
            type="checkBox"
            value={item.isChecked}
            onChange={() => toogleHandel(item.id)}
          />
          <ul>
            <li>{item.input}</li>
          </ul>
          <span className="float-right" onClick={() => handelDelete(item)}>
            {item.isChecked && (
              <RiDeleteBin6Fill className="icon" color="orange" />
            )}
          </span>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
