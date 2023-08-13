import { Navbar,Hero} from "../components"
import Business from "../components/Business"
import Sales from "../components/Sales"
import USP from "../components/USP"
import Login from "./Login"
import Footer from "../components/Footer"
function HomeScreen() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <Business/>
      <Footer/>
      {/* <Sales/> */}
     {/* <USP/> */}
    

    </div>
  )
}

export default HomeScreen
