import { useState, useEffect } from 'react'
import './navbar.css'
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className = {`navbar navbar-expand-lg py-4 position-fixed vw-100 z-3 ${scrolled ? "nav-bg" : ""}`} id='navbar'>
      <div className="container-fluid px-5">
        <a className="navbar-brand fw-bold fs-4" href='#'>Youssef Hany</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="menu collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul className='menu-list navbar-nav list-unstyled'>
            <li className='nav-item px-4 py-2 active'><a href="#" className='fs-4 text-uppercase text-decoration-none'>Home</a></li>
            <li className='nav-item px-4 py-2'><a href="#services" className='fs-4 text-uppercase text-decoration-none'>Services</a></li>
            <li className='nav-item px-4 py-2'><a href="#projects" className='fs-4 text-uppercase text-decoration-none'>Projects</a></li>
            <li className='nav-item px-4 py-2'><a href="#contact" className='fs-4 text-uppercase text-decoration-none'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar