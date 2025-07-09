import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Prompt Engineer Intern',
      company: 'Soul AI',
      period: 'Oct 2024 - Feb 2025',
      location: 'Remote',
      description:
        'Developing and optimizing AI prompts for various applications, improving model accuracy by 25%.',
      skills: ['Prompt Engineering', 'NLP', 'Python'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Game Developer Intern',
      company: 'Wild Game Creative Studios',
      period: 'Sep 2024 - Mar 2025',
      location: 'Remote',
      description:
        'Contributing to game development projects using Unity3D and C#. Implemented game mechanics, UI system for mobile gaming platforms.',
      skills: ['Unity3D', 'C#', 'Game Design', 'Mobile Development'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Junior Developer Intern',
      company: 'Brain-O-Vision',
      period: 'Nov 2024 - Apr 2025',
      location: 'Hyderabad',
      description:
        'Developing web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions and gained experience in full-stack development.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Full-Stack Development'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Internships
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey through various internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-purple-500 hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative group flex items-start">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-800 transition-transform duration-300 group-hover:scale-125"></div>

                {/* Card */}
                <div className="md:ml-20 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} text-white w-fit`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                          {exp.title}
                        </h3>
                        <p className="text-base text-slate-600 dark:text-slate-300">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-10 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-600`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Current Internships', value: '3' },
            { label: 'Companies Worked With', value: '2+' },
            { label: 'Projects Delivered', value: '5+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
