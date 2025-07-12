import styles from './navbar.module.css'

function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg py-4 position-fixed vw-100 z-3 ${styles.navbar}`}>
        <div className="container-fluid px-4 px-lg-5">
          <a className={`"navbar-brand text-white fw-bold fs-4 text-decoration-none ${styles.navbarBrand}`} href='#'>Youssef Hany</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`menu collapse navbar-collapse flex-grow-0 ${styles.menu}`} id="navbarNav">
            <ul className={`menu-list navbar-nav list-unstyled overflow-hidden ${styles.menuList}`}>
              <li className={`nav-item position-relative overflow-hidden fw-semibold px-4 py-2 ${styles.navItem} active`}><a href="#" className='fs-4 text-uppercase text-white text-decoration-none'>Home</a></li>
              <li className={`nav-item position-relative overflow-hidden fw-semibold px-4 py-2 ${styles.navItem}`}><a href="#services" className='fs-4 text-uppercase text-white text-decoration-none'>Services</a></li>
              <li className={`nav-item position-relative overflow-hidden fw-semibold px-4 py-2 ${styles.navItem}`}><a href="#projects" className='fs-4 text-uppercase text-white text-decoration-none'>Projects</a></li>
              <li className={`nav-item position-relative overflow-hidden fw-semibold px-4 py-2 ${styles.navItem}`}><a href="#contact" className='fs-4 text-uppercase text-white text-decoration-none'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar