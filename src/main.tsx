import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/themeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: { primary: { main: "#9a71f2" } },
  typography: {
    body1: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </StrictMode>
);
