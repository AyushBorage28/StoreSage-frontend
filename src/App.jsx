import styles from "./styles";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/globals/Topbar"


const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <div className="w-full  overflow-hidden">
     <Navbar/>

      {/* <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero/></div>
      </div> */}
    </div>
  );
}

export default App;
