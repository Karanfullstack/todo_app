export const initialState = {
  theme: "light",
};

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "TOOGLE_THEME":
      return {theme: state.theme === "light" ? "dark" : "light"};
    default:
      return state;
  }
};
