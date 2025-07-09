import React from 'react';
import { Download, Mail, ArrowDown, User } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto mb-8 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <User className="w-24 h-24 text-gray-400 dark:text-gray-600" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="text-green-700">
              Srilekha
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-fade-in-delay">
            A passionate developer crafting digital experiences with code
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Full-Stack Developer | Prompt Engineer | Game Enthusiast
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <button className="inline-flex items-center gap-2 px-8 py-4 text-green-800 font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{backgroundColor: '#B0DB9C'}}>
              <Download className="w-5 h-5" />
              View Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;