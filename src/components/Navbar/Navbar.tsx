import { FC, useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
import { InnerDiv, NavbarDivMain, ThemeButton } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar: FC<{ setTheme: (defaultTheme: DefaultTheme) => void }> = ({
  setTheme,
}) => {
  const theme = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme?.name === "light") {
      localStorage.setItem("theme", JSON.stringify(themes.dark));
      setTheme(themes.dark);
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    }
  };
  return (
    <NavbarDivMain>
      <InnerDiv>
        <ThemeButton onClick={toggleTheme}>
          {theme?.name === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </ThemeButton>
      </InnerDiv>
    </NavbarDivMain>
  );
};

export default Navbar;
