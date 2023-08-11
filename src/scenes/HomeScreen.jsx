import { Navbar,Hero,Footer } from "../components"

function HomeScreen() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default HomeScreen
