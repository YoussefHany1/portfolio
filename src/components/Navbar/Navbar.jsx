import styles from "./navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar flex flex-col lg:flex-row py-6 fixed w-screen z-3 top-0 bg-[linear-gradient(180deg,rgba(16,16,16,0.65),transparent)] h-28">
        <div className="w-full flex justify-between items-start px-6 lg:px-12">
          <a
            className={`navbar-brand text-white font-bold text-3xl ${styles.navbarBrand}`}
            href="#"
          >
            Youssef Hany
          </a>
          <div className="menu flex-grow-0 flex lg:[clip-path:polygon(16px_0px,100%_0px,100%_30px,calc(100%-18px)_48px,0px_1000%,0px_16px)]">
            <button
              className="p-2 text-gray-700 rounded-lg border lg:hidden bg-(--primary)"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              className={`right-0 lg:flex backdrop-blur-md border border-(--primary) bg-black/50 ${menuOpen ? "block absolute top-17 right-6" : "hidden"
                } ${styles.menuList}`}
            >
              <li
                className="nav-item flex"
              >
                <a href="#" className="text-3xl uppercase text-white fw-semibold py-4 px-12 lg:px-6 lg:py-2 rounded-lg transition-all duration-200 ease-in-out lg:hover:shadow-[0_0_20px_var(--primary)] hover:bg-(--primary) hover:text-black hover:font-bold">
                  Home
                </a>
              </li>
              <li
                className="nav-item flex"
              >
                <a href="#services" className="text-3xl uppercase text-white fw-semibold py-4 px-12 lg:px-6 lg:py-2 rounded-lg transition-all duration-200 ease-in-out lg:hover:shadow-[0_0_20px_var(--primary)] hover:bg-(--primary) hover:text-black hover:font-bold">
                  Services
                </a>
              </li>
              <li
                className="nav-item flex"
              >
                <a href="#projects" className="text-3xl uppercase text-white fw-semibold py-4 px-12 lg:px-6 lg:py-2 rounded-lg transition-all duration-200 ease-in-out lg:hover:shadow-[0_0_20px_var(--primary)] hover:bg-(--primary) hover:text-black hover:font-bold">
                  Projects
                </a>
              </li>
              <li
                className="nav-item flex"
              >
                <a href="#contact" className="text-3xl uppercase text-white fw-semibold py-4 px-12 lg:px-6 lg:py-2 rounded-lg transition-all duration-200 ease-in-out lg:hover:shadow-[0_0_20px_var(--primary)] hover:bg-(--primary) hover:text-black hover:font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
