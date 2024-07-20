import { DefaultTheme, ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import Landing from "./Sections/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Services from "./Sections/Services/Services";
import Career from "./Sections/Career/Career";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxProvider } from "react-scroll-parallax";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(
    localStorage.getItem("theme")?.length ?? -1 > 0
      ? JSON.parse(localStorage.getItem("theme") as string)
      : themes.light
  );

  const updateTheme = (themeName: string) => {
    if (themeName === "light") {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.dark));
      setTheme(themes.dark);
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
    const localTheme: DefaultTheme | null = JSON.parse(
      localStorage.getItem("theme") ?? "{}"
    ) as DefaultTheme | null;

    if (localTheme?.name) {
      if (localTheme.name === "light") {
        if (JSON.stringify(themes.light) !== JSON.stringify(localTheme)) {
          updateTheme("light");
        }
      } else if (localTheme.name === "dark") {
        if (JSON.stringify(themes.dark) !== JSON.stringify(localTheme)) {
          updateTheme("dark");
        }
      }
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    }
  }, []);

  return (
    <>
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar setTheme={setTheme} />
          <Landing />
          <Services />
          <Career />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}

export default App;
