import React from 'react';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-sky-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sky-100 dark:bg-sky-900 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Education</h3>
                    <p className="text-slate-600 dark:text-slate-400">BTech in Computer Science</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Graduated</h3>
                    <p className="text-slate-600 dark:text-slate-400">2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
                    <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Interests</h3>
                    <p className="text-slate-600 dark:text-slate-400">Web Tech,Software Development, Game Design, AI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  My Journey
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                 I graduated with a BTech in Computer Science and Engineering from Bhoj Reddy Engineering College, Hyderabad, in 2025. I'm passionate about creating innovative digital solutions and exploring the intersection of technology and creativity.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  My expertise spans across full-stack web development, game design, and prompt engineering. I enjoy building user-centric applications and exploring emerging technologies like AI and machine learning.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Creative Thinker','Leadership', 'Team Player', 'Quick Learner'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-sky-100 to-purple-100 dark:from-sky-900 dark:to-purple-900 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
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