
import React from 'react';
import {
  ExternalLink,
  Github,
  Database,
  Monitor,
  Mail,
  Brain,
  MessageSquare,
  Rocket,
  Gamepad2,
  Activity,
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Automated Data Reconciliation Tool',
      description:
        'A Python-based tool that compares source and target datasets using sample data. Identifies missing records, column-level mismatches, and data variances, with reconciliation summaries and exception reports.',
      tech: [
        'Python',
        'Pandas',
        'NumPy',
        'SQL',
        'Streamlit',
        'OpenPyXL',
      ],
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      image:
        'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/Automation-Tool',
      featured: true,
    },
    {
      title: 'Forge IT LMS',
      description:
        'A full-stack Learning Management System with separate dashboards for students, teachers, and administrators. Supports course management, assignment tracking, and interactive learning workflows.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      icon: <Monitor className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-blue-500',
      image:
        'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/react-LMS',
    },
    {
      title: 'AI Status Mailer',
      description:
        'A Python automation project that uses project tracker updates to prepare status emails and supports scheduled delivery, reducing repetitive reporting work.',
      tech: ['Python', 'REST APIs', 'Automation', 'GitHub API'],
      icon: <Mail className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-500',
      image:
        'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/AI-Status-Mailer',
    },
    {
      title: 'AI Interview Bot',
      description:
        'A GenAI-powered interview assistant designed to support interview workflows through AI-driven interactions and language-processing capabilities.',
      tech: ['Python', 'Generative AI', 'NLP', 'Streamlit'],
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-500',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/interview-bot',
    },
    {
      title: 'Debate Partner Bot',
      description:
        'An interactive AI debate application that helps users explore opposing viewpoints, develop arguments, and engage in structured discussions with an LLM.',
      tech: ['Python', 'Streamlit', 'Groq API', 'LLMs'],
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: 'from-orange-500 to-pink-500',
      image:
        'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/Debate-Partner-Bot',
    },
    {
      title: 'Space Travel Bot',
      description:
        'A conversational chatbot project that lets users explore space-travel topics through an interactive question-and-answer experience.',
      tech: ['Python', 'Chatbot', 'Generative AI', 'Streamlit'],
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'from-sky-500 to-indigo-600',
      image:
        'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/3D-bot',
    },
    {
      title: 'ASD Detector',
      description:
        'A machine-learning application developed to explore autism screening using behavioral data. Presents model-based results through a Streamlit interface.',
      tech: ['Python', 'Streamlit', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      icon: <Activity className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/Detection-of-ASD',
    },
    {
      title: 'Flap Frenzy',
      description:
        'A 2D arcade game developed using Unity and C#. Features gameplay challenges, animations, and game mechanics.',
      tech: ['Unity', 'C#', '2D Game Development', 'Animation'],
      icon: <Gamepad2 className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      image:
        'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Shiva-Ch0wdary/Flap-Frenzy',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Featured Projects
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Projects showcasing my experience in software automation,
            data validation, web development, and Generative AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                <div
                  className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                >
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/srilekha-netha?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
