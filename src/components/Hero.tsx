
import React from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';
import profileImage from '../img/sri-removebg-preview.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Profile Image */}
          <div className="relative mx-auto mb-8 w-48 h-48 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 p-1 shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={profileImage}
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

          {/* Professional Headline */}
          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-6 leading-relaxed animate-fade-in-delay">
            Software Engineer | QA Automation | Data & Web Development
          </h2>

          {/* Professional Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-delay-2">
            Building reliable software, automating testing, and transforming
            data into meaningful insights.
          </p>

          {/* Key Skills */}
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2">
            Python <span className="text-sky-500">•</span> SQL{' '}
            <span className="text-sky-500">•</span> Test Automation{' '}
            <span className="text-sky-500">•</span> React{' '}
            <span className="text-sky-500">•</span> REST APIs{' '}
            <span className="text-sky-500">•</span> Data Validation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <a
              href="/SrilekhaJella.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              View Resume
            </a>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            type="button"
            aria-label="Scroll to About section"
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
