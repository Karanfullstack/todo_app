import React, {useState, useContext} from "react";
import {ADD_TODO} from "../context/action.types";
import {TodoContext} from "../context/TodoContext";
import {v4} from "uuid";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const {todos, dispatch} = useContext(TodoContext);

  const handelData = function (event) {
    setInput(event.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Field is empty!");
    }
    const todo = {
      input,
      id: v4(),
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
        <h1>TODO APPLICATION</h1>
        <span>To Get A Record Of What Your Remeber!</span>

        <input
          value={input}
          onChange={handelData}
          type="text"
          placeholder="Write What Matters!!"
          autoFocus
        />
        <button onClick={handelSubmit}>Fetch IT</button>
        <h2 className="todo-heading">
          {todos.length > 0
            ? "Your Todos Length: " + todos.length
            : "You Dont Have Any Todos"}
        </h2>
      </div>
    </React.Fragment>
  );
};

export default TodoForm;
