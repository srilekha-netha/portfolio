
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Engineering & Generative AI Trainee',
      company: 'Databricks Academy',
      period: 'Oct 2026 - In Progress',
      location: 'Online',
      type: 'Training Program',
      description:
        'Currently learning through the Databricks Get Started Days program, exploring data engineering concepts and Generative AI on the Databricks Lakehouse Platform.',
      skills: [
        'Databricks',
        'Data Engineering',
        'Generative AI',
        'Data Pipelines',
        'SQL',
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Software Engineer',
      company: 'Digitide Solutions Pvt. Ltd.',
      period: 'Jul 2025 - Present',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description:
        'Working on the MSIG Property & Casualty Insurance project, contributing to software quality, data validation, and automation. Develop Python-based automation solutions, perform SQL-based data checks, and support reconciliation of source data with reporting outputs.',
      skills: [
        'Python',
        'SQL',
        'Data Validation',
        'Data Reconciliation',
        'Test Automation',
        'Excel',
      ],
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      title: 'Prompt Engineer Intern',
      company: 'Soul AI',
      period: 'Oct 2024 - Feb 2025',
      location: 'Remote',
      type: 'Internship',
      description:
        'Worked on prompt engineering for AI applications, refining prompts to improve response relevance and quality. Gained practical exposure to natural language processing and Python-based AI workflows.',
      skills: [
        'Prompt Engineering',
        'NLP',
        'Python',
        'Generative AI',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Game Developer Intern',
      company: 'Wild Game Creative Studios',
      period: 'Sep 2024 - Mar 2025',
      location: 'Remote',
      type: 'Internship',
      description:
        'Contributed to game development using Unity and C#. Worked on game mechanics and user interface components for mobile gaming projects.',
      skills: [
        'Unity3D',
        'C#',
        'Game Design',
        'Mobile Development',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Junior Developer Intern',
      company: 'Brain-O-Vision',
      period: 'Nov 2024 - Apr 2025',
      location: 'Hyderabad, India',
      type: 'Internship',
      description:
        'Gained practical experience in full-stack web development, contributing to web application development using modern JavaScript frameworks and collaborating on software solutions.',
      skills: [
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Full-Stack Development',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { label: 'Completed Internships', value: '3' },
    { label: 'Professional Role', value: '1' },
    { label: 'Ongoing Training Programs', value: '1' },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Experience & Learning
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey across software engineering,
            automation, AI, and data engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-purple-500 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <article
                key={`${exp.company}-${exp.title}`}
                className="relative group flex items-start"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-10 w-4 h-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-800 transition-transform duration-300 group-hover:scale-125" />

                {/* Experience Card */}
                <div className="md:ml-20 w-full bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} text-white shrink-0`}
                      >
                        <Briefcase className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                          {exp.title}
                        </h3>

                        <p className="text-base text-slate-600 dark:text-slate-300 mt-1">
                          {exp.company}
                        </p>

                        <span
                          className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.gradient} text-white`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-2 md:min-w-fit">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
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

export default Experience;
