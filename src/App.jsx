import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portofilio from "./components/Portfolio"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App =()=>{
  return (
    <main className="overflow-x-hidden antiliased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Portofilio />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default App