import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Sidebar from "./pages/Sidebar";
import Topbar from "./pages/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <Box width={"100%"} height={"100%"}>
            <Topbar />
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
