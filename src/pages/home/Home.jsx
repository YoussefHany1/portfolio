import Background from '../../components/background/Background.jsx'
import Header from '../../components/home/Header/Header.jsx'
import OurServices from '../../components/home/OurServices/OurServices.jsx'
import Skills from '../../components/home/Skills/Skills.jsx'
import Projects from '../../components/home/Projects/Projects.jsx'
import Contact from '../../components/home/Contact/Contact.jsx'
import Footer from '../../components/home/Footer/Footer.jsx'

function Home() {
  return (
    <>
      <Background />
      <Header />
      <OurServices />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
export default Home