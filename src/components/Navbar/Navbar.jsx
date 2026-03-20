"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import PillNav from "../../animations/PillNav";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
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
        <div className="menu grow-0 flex lg:[clip-path:polygon(24px_8px,100%_0px,100%_26px,calc(100%-19px)_45px,0px_1000%,0px_31px)]">
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
          <PillNav
            items={NAV_LINKS}
            onItemClick={closeMenu}
            className={`right-0 lg:flex border border-(--primary) bg-black/50 overflow-hidden ${isMenuOpen ? "block absolute top-17 right-6 p-4 rounded-xl" : "hidden"
              } ${styles.menuList}`}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
