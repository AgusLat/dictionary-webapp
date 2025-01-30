import "./header.css";
import { useThemeContext } from "../../context/themeContext";
import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const Header = () => {
  const { isChecked, setIsChecked } = useThemeContext();

  const handleThemeChange = () => {
    //CHANGE THEME CONTEXT
    setIsChecked(!isChecked);
  };

  return (
    <div className="header">
      <div className="header__logoContainer">
        <img src="book.svg" alt="Google Logo" />
      </div>
      <div className="header__controlsContainer">
        <div>{/* <button onClick={handleClick}>CAMBIAR LETRA</button> */}</div>
        <div className="header__themeContainer">
          <Switch
            checked={isChecked}
            onChange={() => handleThemeChange()}
            inputProps={{ "aria-label": "controlled" }}
            color="primary"
          />
          {isChecked ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
      </div>
    </div>
  );
};
