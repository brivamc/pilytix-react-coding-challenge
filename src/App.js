import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "./styles.css";
import { BasicTable } from "./Table";
import { getTheme } from "./theme";

/* Bree McCausland
    - bree.mccausland@gmail.com
    - time spent: roughly 10 hours
    - the work that took place in this codesandbox is completely my own :)
*/

export default function App() {
  const theme = createTheme(getTheme());

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h2>PILYTIX Scored Opportunities</h2>
        <BasicTable />
      </div>
    </ThemeProvider>
  );
}
