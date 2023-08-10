import styles from "./styles";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/globals/Topbar"
import HomeScreen from "./scenes/HomeScreen";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <div className="w-full  overflow-hidden">
    <HomeScreen/>
    
    </div>
  );
}

export default App;
