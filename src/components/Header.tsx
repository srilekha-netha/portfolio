import React from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300" style={{backgroundColor: darkMode ? 'rgba(45, 58, 43, 0.9)' : 'rgba(75, 89, 69, 0.9)', borderColor: darkMode ? 'rgba(102, 120, 95, 0.3)' : 'rgba(178, 201, 173, 0.3)'}}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white">
              Srilekha Jella
            </div>
            <div className="hidden md:block text-sm" style={{color: '#B2C9AD'}}>
              Full-Stack Developer | Prompt Engineer | Game Enthusiast
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 text-white hover:opacity-80"
                style={{color: activeSection === item.id ? '#B2C9AD' : 'white'}}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{backgroundColor: '#B2C9AD'}}></span>
                )}
              </button>
            ))}
          </nav>

          {/* Social Links & Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <a href="https://github.com" className="text-white hover:opacity-80 transition-colors" style={{color: '#B2C9AD'}}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-white hover:opacity-80 transition-colors" style={{color: '#B2C9AD'}}>
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-white hover:opacity-80 transition-colors"
              style={{backgroundColor: '#66785F', color: '#B2C9AD'}}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white"
              style={{backgroundColor: '#66785F', color: '#B2C9AD'}}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t" style={{borderColor: 'rgba(178, 201, 173, 0.3)'}}>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-left text-sm font-medium transition-colors duration-200 text-white hover:opacity-80"
                  style={activeSection === item.id ? {backgroundColor: '#66785F', color: '#B2C9AD'} : {color: 'white'}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;