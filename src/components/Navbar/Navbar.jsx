import { useState } from "react";
import styles from "./navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-30 w-screen bg-gradient-to-b from-black/65 to-transparent">
      <div className="flex w-full items-center justify-between px-6 py-6 lg:px-12">
        {/* Logo */}
        <a
          href="/"
          className={`text-3xl font-bold text-white ${styles.navbarBrand}`}
          aria-label="Youssef Hany - Home"
        >
          Youssef Hany
        </a>

        {/* Mobile Menu Button */}
        <div className="menu flex-grow-0 flex lg:[clip-path:polygon(16px_0px,100%_0px,100%_30px,calc(100%-18px)_48px,0px_1000%,0px_16px)]">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 rounded-lg border lg:hidden bg-(--primary)"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`right-0 lg:flex border border-(--primary) bg-black/50 ${
              isMenuOpen ? "block absolute top-17 right-6" : "hidden"
            } ${styles.menuList}`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="nav-item flex">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="
                  text-3xl uppercase text-white fw-semibold w-full py-4 px-12 lg:px-6 lg:py-2 rounded-lg transition-all duration-200 ease-in-out lg:hover:shadow-[0_0_20px_var(--primary)] hover:bg-(--primary) hover:text-black hover:font-bold
                "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
