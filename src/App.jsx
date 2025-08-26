import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import Projects from './pages/projects/Projects.jsx'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  if (loading) {
    return (
      <div className="loader flex justify-center items-center h-screen">
        <div data-glitch="Loading..." className="glitch relative text-6xl font-bold leading-tight text-white tracking-wider z-10">Loading...</div>
      </div>
    );
  }
  return (
    <>

      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}
export default App