import React from 'react';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24" style={{backgroundColor: '#66785F'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#B2C9AD'}}>
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <div className="rounded-2xl p-8 shadow-xl" style={{background: 'linear-gradient(to bottom right, #91AC8F, #B2C9AD)'}}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#4B5945'}}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Education</h3>
                    <p style={{color: '#4B5945'}}>B.E. in Computer Science</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#4B5945'}}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p style={{color: '#4B5945'}}>Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#4B5945'}}>
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Graduating</h3>
                    <p style={{color: '#4B5945'}}>2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#4B5945'}}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Interests</h3>
                    <p style={{color: '#4B5945'}}>Web Tech, Game Design, AI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  My Journey
                </h3>
                <p className="leading-relaxed mb-4" style={{color: '#B2C9AD'}}>
                  Currently pursuing B.E. in Computer Science and Engineering from Bhoj Reddy Engineering College, Hyderabad, graduating in 2025. I'm passionate about creating innovative digital solutions and exploring the intersection of technology and creativity.
                </p>
                <p className="leading-relaxed mb-4" style={{color: '#B2C9AD'}}>
                  My expertise spans across full-stack web development, game design, and prompt engineering. I enjoy building user-centric applications and exploring emerging technologies like AI and machine learning.
                </p>
                <p className="leading-relaxed" style={{color: '#B2C9AD'}}>
                  When I'm not coding, you'll find me experimenting with new frameworks, contributing to open-source projects, or designing engaging game experiences. I believe in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Creative Thinker', 'Team Player', 'Quick Learner'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 rounded-full text-sm font-medium text-white"
                    style={{backgroundColor: '#4B5945'}}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;