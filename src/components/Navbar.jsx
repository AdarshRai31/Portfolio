import { Link } from "react-scroll";
import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" text-black bg-white/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md dark:bg-black/60 dark:text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        {/* Nav links (center/right on desktop) */}
        <div className="hidden sm:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="home"
                smooth
                duration={500}
                offset={-60}
                className="cursor-pointer hover:text-gray-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth
                duration={500}
                offset={-60}
                className="cursor-pointer hover:text-gray-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-60}
                className="cursor-pointer hover:text-gray-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-60}
                className="cursor-pointer hover:text-gray-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Right side: dark mode & hamburger */}
        <div className="flex items-center space-x-2">
          {/* Hamburger for mobile */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Dark Mode Toggle Button (always visible) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700 hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {darkMode ? (
              <BsSun className="text-yellow-300 text-lg" />
            ) : (
              <BsMoon className="text-blue-200 text-lg" />
            )}
            <span className="hidden sm:inline">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </nav>
      {/* Mobile dropdown menu */}
      <div
        className={`sm:hidden bg-blue-600/0 w-full px-4 pb-4 transition-all dark:bg-black/0 duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <Link
              to="home"
              smooth
              duration={500}
              offset={-60}
              className="cursor-pointer hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={500}
              offset={-60}
              className="cursor-pointer hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-60}
              className="cursor-pointer hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-60}
              className="cursor-pointer hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
