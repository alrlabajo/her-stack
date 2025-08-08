import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Screens/Hero'
import { Background } from './Backgrounds/Background'
import { About } from './Screens/About'
import { Skills } from './Screens/Skills'
import { Contact } from './Screens/Contact'
import { Projects } from './Screens/Projects'

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-white/90 dark:bg-black/90 py-12 sm:py-16 lg:py-20">
        <Background />

        <div className="relative z-10">
          <Navbar/>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
