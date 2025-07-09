import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen transition-all duration-300" style={{background: darkMode ? 'linear-gradient(to bottom right, #2D3A2B, #1F2A1E)' : 'linear-gradient(to bottom right, #4B5945, #66785F)'}}>
        <Header 
          activeSection={activeSection} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;