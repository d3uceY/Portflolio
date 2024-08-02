import Navbar from "./components/navbar/Navbar.jsx"
import HeroSection from "./components/herosection/HeroSection.jsx"
import AboutSection from "./components/aboutsection/AboutSection.jsx"
import Services from "./components/services/Services.jsx"
import Projects from "./components/project/Projects.jsx"


export default function App() {
  return (
    <main className="bg-black">
      <div className="container mx-auto text-white px-[20px]">
        <Navbar />
        <HeroSection/>
        <AboutSection/>
        <Services/>
        <Projects/>
      </div>
    </main>
  )
}