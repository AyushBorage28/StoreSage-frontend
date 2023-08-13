import { Navbar,Hero} from "../components"
import Business from "../components/Business"
import Sales from "../components/Sales"
import USP from "../components/USP"
function HomeScreen() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <Business/>
      {/* <Sales/> */}
     {/* <USP/> */}
    

    </div>
  )
}

export default HomeScreen
