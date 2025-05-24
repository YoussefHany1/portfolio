// import React, { Suspense } from 'react';
import Header from '../components/Header/Header.jsx'
import OurServices from '../components/OurServices/OurServices.jsx'
import Skills from '../components/Skills/Skills.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Contact from '../components/Contact/Contact.jsx'
import './home.css'

// const OurServices = React.lazy(() => import('../components/OurServices/OurServices.jsx'));
function Home() {
    return (
      <>
      <Header />
      <OurServices />
      <Skills />
      <Projects />
      <Contact />
      </>
    )
  }
export default Home