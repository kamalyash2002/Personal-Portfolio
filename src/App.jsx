
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroBack from './components/HeroBack'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Achievements from './components/POR'
import { motion, useScroll } from "framer-motion";
import Skills from './components/Skills'
import TheExperienceComponent from './components/Experience'
import Contactus from './components/Contactus'

function App() {
   // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll();

  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
      <Navbar />
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <TheExperienceComponent></TheExperienceComponent>
      <Achievements></Achievements>
      <Contactus></Contactus>
    </>
  )
}

export default App
