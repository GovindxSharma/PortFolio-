import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import ProjectsExperience from '../components/ProjectsExperience'
import Education from '../components/Education'
import Skills from '../components/Skills'

import Contact from '../components/Contact'

const Homepage = () => {
  return (
   <>
   <Navbar/>
   <About/>
   <ProjectsExperience/>
   <Education/>
   <Skills/>
   <Contact/>
   </>
  )
}

export default Homepage
