import React from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative mx-auto mb-8 w-48 h-48 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 p-1 shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="src\img\sri-removebg-preview.jpg" // ✅ ensure image is in public/img/
                alt="Srilekha Jella"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
              Srilekha
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed animate-fade-in-delay">
            A passionate developer crafting digital experiences with code
          </p>

          {/* Description */}
          <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Web Developer | Prompt Engineer | Game Enthusiast
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <a
              href="https://drive.google.com/file/d/1M8Pk0urR9P2L7Ux82G2Rcoui2R-FEh4E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              View Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
