import GlobalStyle from "./components/GlobalStyle";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Router from "./Router";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode((curr) => !curr);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
