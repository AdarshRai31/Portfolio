import { useState, useEffect } from "react";
import AOS from "aos";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDarkMode(true);
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home></Home>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Contact></Contact>

        <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm">
          &copy; 2025 Adarsh Rai. All rights reserved.
          <div className="flex justify-center gap-4 mt-2">
            <FaGithub className="text-xl hover:text-gray-700 dark:hover:text-white" />
            <FaLinkedin className="text-xl hover:text-blue-700 dark:hover:text-white" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
