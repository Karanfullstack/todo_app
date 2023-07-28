import {useReducer, useEffect} from "react";

export const useLocalStorage = (key, defaultValue, reducer) => {
  const storedValue = localStorage.getItem(key);
  const initials = storedValue ? JSON.parse(storedValue) : defaultValue;

  // Creating Reducer
  const [state, dispatch] = useReducer(reducer, initials);

  // @Updating Vallues AS State Changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]); //@key can be optional
  
  return [state, dispatch];
  
};
