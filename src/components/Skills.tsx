import React from 'react';
import { Code, Database, Server, Gamepad2, Cloud, GitBranch, Zap, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C#'],
      color: '#4B5945'
    },
    {
      title: 'Web Technologies',
      icon: <Server className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'NodeJS', 'ReactJS', 'ExpressJS'],
      color: '#66785F'
    },
    {
      title: 'Tools & Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Git', 'AWS (S3, EC2)', 'Salesforce', 'ServiceNow'],
      color: '#91AC8F'
    },
    {
      title: 'Game Development',
      icon: <Gamepad2 className="w-6 h-6" />,
      skills: ['Unity3D', 'C#', 'Game Design', '2D/3D Graphics'],
      color: '#B2C9AD'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
      color: '#4B5945'
    },
    {
      title: 'Other Skills',
      icon: <Zap className="w-6 h-6" />,
      skills: ['Prompt Engineering', 'Machine Learning', 'API Development', 'UI/UX Design'],
      color: '#66785F'
    }
  ];

  return (
    <section id="skills" className="py-24" style={{background: 'linear-gradient(to bottom right, #91AC8F, #B2C9AD)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#4B5945'}}>
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{backgroundColor: '#66785F'}}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: category.color}}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 transition-colors duration-300" 
                    style={{color: '#B2C9AD'}}
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: category.color}}></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300" style={{backgroundColor: category.color}}></div>
            </div>
          ))}
        </div>

        {/* Skill Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years of Experience', value: '3+' },
            { label: 'Projects Completed', value: '15+' },
            { label: 'Technologies Mastered', value: '20+' },
            { label: 'Certifications', value: '5+' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm" style={{color: '#4B5945'}}>
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