import styles from "./styles";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/globals/Topbar";
import HomeScreen from "./scenes/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* reset the css to default */}
        <div className="app">
          <main className="content">
            <Topbar />
            {/* <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
