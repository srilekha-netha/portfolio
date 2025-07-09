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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(145, 172, 143, 0.3)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{backgroundColor: 'rgba(178, 201, 173, 0.2)'}}></div>
      </div>

      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto mb-8 w-48 h-48 rounded-full p-1 animate-pulse" style={{background: 'linear-gradient(to bottom right, #91AC8F, #B2C9AD)'}}>
            <div className="w-full h-full rounded-full flex items-center justify-center" style={{backgroundColor: '#66785F'}}>
              <User className="w-24 h-24" style={{color: '#B2C9AD'}} />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span style={{color: '#B2C9AD'}}>
              Srilekha
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-delay" style={{color: '#B2C9AD'}}>
            A passionate developer crafting digital experiences with code
          </p>

          {/* Description */}
          <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in-delay-2" style={{color: '#91AC8F'}}>
            Full-Stack Developer | Prompt Engineer | Game Enthusiast
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <button className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{backgroundColor: '#B2C9AD', color: '#4B5945'}}>
              <Download className="w-5 h-5" />
              View Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl border-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
              style={{backgroundColor: '#66785F', borderColor: '#91AC8F'}}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:opacity-80 transition-colors"
            style={{color: '#91AC8F'}}
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;