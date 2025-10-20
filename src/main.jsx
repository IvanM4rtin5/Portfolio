import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/app.routes";
import "./i18n";

import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
       < AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
