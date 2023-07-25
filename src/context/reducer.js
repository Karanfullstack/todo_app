import {ADD_TODO, REMOVE_TODO, THEMES} from "./action.types";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default TodoReducer;
