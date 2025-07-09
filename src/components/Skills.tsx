import React from 'react';
import { Code, Database, Server, Gamepad2, Cloud, GitBranch, Zap, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C#'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Technologies',
      icon: <Server className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'NodeJS', 'ReactJS', 'ExpressJS'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Git', 'AWS (S3, EC2)', 'Salesforce', 'ServiceNow'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Game Development',
      icon: <Gamepad2 className="w-6 h-6" />,
      skills: ['Unity3D', 'C#', 'Game Design', '2D/3D Graphics'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Other Skills',
      icon: <Zap className="w-6 h-6" />,
      skills: ['Prompt Engineering', 'UI/UX Design'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${category.color} rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Skill Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { label: 'Projects Completed', value: '5+' },
            { label: 'Technologies Mastered', value: '10+' },
            { label: 'Certifications', value: '3+' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;