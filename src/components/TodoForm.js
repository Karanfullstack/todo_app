import React, {useState, useContext} from "react";
import {ADD_TODO} from "../context/action.types";
import {TodoContext} from "../context/TodoContext";
import {v4} from "uuid";
import toast from "react-hot-toast";
const TodoForm = () => {
  const [input, setInput] = useState("");
  const {todos, dispatch} = useContext(TodoContext);

  const handelData = function (event) {
    setInput(event.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return toast.error("Empty Field!");
    }

    const todo = {
      input,
      id: v4(),
      isChecked:false
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setInput("");
  };
  return (
    <React.Fragment>
      <div className="container">
        <h2>TODO APPLICATION</h2>
        <span>To Get A Record Of What Your Remeber!</span>

        <input
          value={input}
          onChange={handelData}
          type="text"
          placeholder="Write What Matters!!"
          autoFocus
        />
        <button onClick={handelSubmit}>GO!!</button>
        <h3 className="todo-heading">
          {todos.length > 0
            ? "Your Todos Length: " + todos.length
            : "You don't have any todos"}
        </h3>
      </div>
    </React.Fragment>
  );
};

export default TodoForm;
