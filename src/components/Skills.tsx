
import React from 'react';
import {
  Code,
  Database,
  Server,
  Cloud,
  GitBranch,
  Zap,
  CheckCircle,
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Web Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        'HTML5',
        'CSS3',
        'React.js',
        'Node.js',
        'Express.js',
        'REST APIs',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'QA Automation',
      icon: <CheckCircle className="w-6 h-6" />,
      skills: [
        'Playwright',
        'Python Automation',
        'UI Automation',
        'API Testing',
        'Regression Testing',
        'Postman',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Data Engineering',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'SQL Server',
        'MySQL',
        'Data Validation',
        'Data Reconciliation',
        'ETL Concepts',
        'JSON & Data Processing',
        'Pandas & NumPy',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Cloud & Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        'AWS EC2',
        'AWS S3',
        'AWS CloudWatch',
        'Azure DevOps',
        'ServiceNow',
      ],
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Tools & AI',
      icon: <Zap className="w-6 h-6" />,
      skills: [
        'Git',
        'GitHub',
        'CI/CD',
        'Generative AI',
        'LLMs & AI Agents',
        'Prompt Engineering',
        'Agile/Scrum',
      ],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies & Tools', value: '20+' },
    { label: 'Certifications', value: '3+' },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Skills & Expertise
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical skills across software testing, data engineering,
            web development, and cloud technologies.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="relative group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Hover Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.04] bg-gradient-to-r ${category.color} transition-opacity duration-300 pointer-events-none`}
              />

              {/* Card Heading */}
              <div className="relative flex items-center gap-3 mb-5">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skill List */}
              <div className="relative space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300"
                  >
                    <div
                      className={`w-2 h-2 flex-shrink-0 rounded-full bg-gradient-to-r ${category.color}`}
                    />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
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
