import { Navbar,Hero} from "../components"
import Sales from "../components/Sales"
import USP from "../components/USP"
import Login from "./Login"
function HomeScreen() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <Sales/>
     <USP/>
    

    </div>
  )
}

export default HomeScreen
