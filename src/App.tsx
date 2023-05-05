import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import LoginPage from "./pages/Login";
import Sidebar from "./pages/partials/Sidebar";
import Topbar from "./pages/partials/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <div className="app">
          <Routes>
            {/* <Sidebar />
          <Box width={"100%"} height={"100%"}>
          <Topbar />
        </Box> */}
          </Routes>
          <Routes>
            <Route path="/" element={<LoginPage title="Login" />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
