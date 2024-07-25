import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import SkillsPage from './Pages/SkillsPage'
import ProjectPage from './Pages/ProjectPage'
import ContactPage from './Pages/ContactPage'

function App() {
  

  return (
    <div className='overflow-x-hidden '>
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectPage/>
      <ContactPage/>
    </div>
  )
}

export default App
