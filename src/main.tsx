import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <App />
          </StyledThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  </StrictMode>
);
