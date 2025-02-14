import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Hero } from './Component/Hero'
import { Footer } from './Component/Footer'
import { Projects } from './Component/Projects'
import { Contact } from './Component/Contact'
import { Education } from './Component/Education'
import { Skills } from './Component/Skills'
import { About } from './Component/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
        
    </>
  )
}

export default App
