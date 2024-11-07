import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0473E9",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Nunito Sans, Arial, sans-serif",
    h4: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
  },
  shape:{
    borderRadius: 5
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Router>
  </React.StrictMode>
);
