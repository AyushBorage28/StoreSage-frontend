import { Navbar,Hero,Footer } from "../components"

function HomeScreen() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default HomeScreen
