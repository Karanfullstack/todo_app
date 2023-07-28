import React, {useContext, useEffect} from "react";
import {TodoContext} from "../context/TodoContext";
// import {BsFillLightningChargeFill} from "react-icons/bs";
import {FiPower} from "react-icons/fi";
import {FaPowerOff} from "react-icons/fa"
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
  }, [themes]);

  return (
    <React.Fragment>
      <nav>
        <div className="right">
          <button onClick={handelTheme}>
            {themes.theme === "light" ? <FiPower /> : <FaPowerOff />}
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
