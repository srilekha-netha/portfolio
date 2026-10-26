
import React from 'react';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

const About: React.FC = () => {
  const traits = [
    'Problem Solver',
    'Analytical Thinker',
    'Team Player',
    'Quick Learner',
    'Continuous Learner',
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know my professional journey, technical background,
            and passion for building reliable software solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Profile Card */}
            <div className="bg-gradient-to-br from-sky-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">

                {/* Education */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sky-100 dark:bg-sky-900 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      Education
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      B.E. in Computer Science and Engineering
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Bhoj Reddy Engineering College
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      Location
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Hyderabad, India
                    </p>
                  </div>
                </div>

                {/* Graduation */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      Graduated
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      2025
                    </p>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
                    <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      Interests
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      QA Automation, Data Engineering,
                      Web Development, Cloud Computing
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Professional Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  My Journey
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  I'm a Software QA Engineer at Digitide Solutions,
                  working on the MSIG Property & Casualty Insurance
                  project. My experience includes Python-based
                  automation, Playwright testing, SQL validation,
                  and data reconciliation.
                </p>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  I'm passionate about building reliable software,
                  automating repetitive tasks, and improving data
                  quality through efficient validation processes.
                  I also enjoy developing web applications and
                  exploring data engineering technologies.
                </p>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  My technical interests include Python, SQL, React,
                  REST APIs, AWS, and test automation. I enjoy
                  solving problems, learning new technologies,
                  and turning ideas into practical solutions.
                </p>
              </div>

              {/* Personal Traits */}
              <div className="flex flex-wrap gap-3">
                {traits.map((trait) => (
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
