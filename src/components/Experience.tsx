import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Prompt Engineer Intern',
      company: 'Soul AI',
      period: 'Oct 2024 - Feb 2025',
      location: 'Remote',
      description: 'Developing and optimizing AI prompts for various applications, improving model accuracy by 25%. Working with NLP models and implementing prompt engineering best practices.',
      skills: ['Prompt Engineering', 'NLP', 'AI/ML', 'Python', 'API Integration'],
      gradient: '#B0DB9C'
    },
    {
      title: 'Game Developer Intern',
      company: 'Wild Game Creative Studios',
      period: 'Sep 2024 - Mar 2025',
      location: 'Hyderabad',
      description: 'Contributing to game development projects using Unity3D and C#. Implemented game mechanics, UI systems, and optimization techniques for mobile gaming platforms.',
      skills: ['Unity3D', 'C#', 'Game Design', 'Mobile Development', 'Performance Optimization'],
      gradient: '#CAE8BD'
    },
    {
      title: 'Junior Developer Intern',
      company: 'Brain-O-Vision',
      period: 'Nov 2024 - Apr 2025',
      location: 'Hyderabad',
      description: 'Developing web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions and gained experience in full-stack development.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Full-Stack Development'],
      gradient: '#DDF6D2'
    }
  ];

  return (
    <section id="experience" className="py-24 dark:from-gray-900 dark:to-gray-800" style={{background: 'linear-gradient(to bottom right, #ECFAE5, #DDF6D2)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through various internships and professional opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block" style={{backgroundColor: '#B0DB9C'}}></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 hidden md:block group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: '#B0DB9C'}}></div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl text-green-800 w-fit" style={{backgroundColor: exp.gradient}}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
                          style={{backgroundColor: exp.gradient, opacity: 0.3}}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Company Link */}
                    <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View Company</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Current Internships', value: '3' },
            { label: 'Companies Worked With', value: '3+' },
            { label: 'Projects Delivered', value: '8+' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;