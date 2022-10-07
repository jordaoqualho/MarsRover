import useTheme from "hooks/useTheme";
import { Routes } from "pages/routes";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import { AppContainer } from "styles/styledComponents";
import dark from "themes/dark";
import light from "themes/light";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [theme, setTheme] = useTheme("theme", light);

  useEffect(() => {
    setTheme(theme.title === "light" ? light : dark);
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer name="appContainer">
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
