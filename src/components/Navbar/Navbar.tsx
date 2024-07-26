import { FC, useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
import { Anchor, InnerDiv, LinksWrapper, NavbarDivMain, ThemeButton, ThemeText, TitleStyled } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../container";

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
      <Container>
        <InnerDiv>
          <TitleStyled>Chris.A</TitleStyled>
          <LinksWrapper>
            <Anchor>#About</Anchor>
            <Anchor>#Career</Anchor>
            <Anchor>#Projects</Anchor>
          </LinksWrapper>
          <ThemeButton onClick={toggleTheme}>
            {theme?.name === "light" && (
              <>
                <ThemeText>Dark Mode</ThemeText>
                <FontAwesomeIcon icon={faMoon} />
              </>
            )}
            {theme?.name === "dark" && (
              <>
                <ThemeText>Light Mode</ThemeText>
                <FontAwesomeIcon icon={faSun} />
              </>
            )}
          </ThemeButton>
        </InnerDiv>
      </Container>
    </NavbarDivMain>
  );
};

export default Navbar;
