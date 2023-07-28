import {ADD_TODO, REMOVE_TODO, TOOGLE_TODO} from "./action.types";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOOGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? {...todo, isChecked: !todo.isChecked}
          : todo
      );
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload && !item.isChecked);
    default:
      return state;
  }
};

// export const initialState = {
//   theme: "light",
// };

// export const ThemeReducer = (state, action) => {
//   switch (action.type) {
//     case "TOOGLE_THEME":
//       return {theme: state.theme === "light" ? "dark" : "light"};
//     default:
//       return state;
//   }
// };

export default TodoReducer;
