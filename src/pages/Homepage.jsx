import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
   <>
   <Navbar/>
   <About/>
   <Experience/>
   <Education/>
   <Skills/>
   <Projects/>
   <Contact/>
   </>
  )
}

export default Homepage
