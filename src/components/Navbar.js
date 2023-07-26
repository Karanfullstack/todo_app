import React, {useContext, useEffect, useState} from "react";
import logo from "../utils/Todoist_logo.png";
import {TodoContext} from "../context/TodoContext";
import {BsFillLightningChargeFill} from "react-icons/bs"
const Navbar = () => {
  const {themes, themeDispatch} = useContext(TodoContext);

  const handelTheme = () => {
    themeDispatch({
      type: "TOOGLE_THEME",
    });
  };
  const body = document.body;
  useEffect(() => {
    if (themes.theme === "light") {
      body.classList.remove("dark");
      body.classList.add("light");
    } else if (themes.theme === "dark") {
      body.classList.remove("light");
      body.classList.add("dark");
    }
  }, [themes.theme]);

  return (
    <React.Fragment>
      <nav>
        <div className="right">
          <button onClick={handelTheme}><BsFillLightningChargeFill/></button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
