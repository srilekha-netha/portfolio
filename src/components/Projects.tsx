import React from 'react';
import { ExternalLink, Github, Monitor, Gamepad2, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Forge IT LMS',
      description: 'A comprehensive Learning Management System built with MERN stack featuring separate dashboards for students, teachers, and administrators. Includes course management, assignment tracking, and interactive learning modules.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      icon: <Monitor className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/react-LMS.git'
    },
    {
      title: 'Flap Frenzy',
      description: 'An engaging 2D arcade game developed in Unity6 with C#. Features 3 challenging levels, 5 unique power-ups, smooth animations, and progressive difficulty scaling for an immersive gaming experience.',
      tech: ['Unity3D', 'C#', 'Game Design', '2D Graphics', 'Animation'],
      icon: <Gamepad2 className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Shiva-Ch0wdary/Flap-Frenzy.git',
      demo: 'https://play.google.com/store/apps/details?id=com.wildgames.flapfrenzy' // Add your real link here
    },
    {
      title: 'ASD Detector',
      description: 'Machine Learning application for early detection of Autism Spectrum Disorder using Python and Streamlit. Implements advanced ML algorithms to analyze behavioral patterns and provide accurate assessments.',
      tech: ['Python', 'Streamlit', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/srilekha-netha/Detection-of-ASD.git'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                {/* Project Icon */}
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-400">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
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

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/srilekha-netha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
