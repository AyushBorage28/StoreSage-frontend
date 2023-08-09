import styles from "./styles";
import { Navbar, Hero } from "./components";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} $styles.flexCenter`}>
        <div className={`${styles.boxwidth}`}><Navbar/></div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero/></div>
      </div>
    </div>
  );
};

export default App;
