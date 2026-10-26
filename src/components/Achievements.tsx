
import React from 'react';
import {
  Trophy,
  Award,
  Star,
  AlignCenterVertical as Certificate,
  Target,
  Cloud,
} from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '1st Prize at Innov8Tech',
      organization: 'BRECW',
      description:
        'Won first place in an innovation competition for developing a creative technology solution recognized for its practical application and technical excellence.',
      icon: <Trophy className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-orange-500',
      type: 'Competition',
    },
    {
      title: 'Google Cloud Professional Cloud Developer',
      organization: 'Google Cloud',
      description:
        'Professional certification covering the development, deployment, and management of scalable applications using Google Cloud technologies.',
      icon: <Cloud className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      type: 'Certification',
    },
    {
      title: 'Full Stack Development Certification',
      organization: 'DevTown',
      description:
        'Completed a full-stack development program covering modern web technologies, database management, and application development.',
      icon: <Certificate className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-purple-500',
      type: 'Certification',
    },
    {
      title: 'ServiceNow Micro-Certification',
      organization: 'ServiceNow',
      description:
        'Earned a ServiceNow micro-certification demonstrating knowledge of the platform and its relevant enterprise workflow capabilities.',
      icon: <Award className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      type: 'Certification',
    },
  ];

  const highlights = [
      { label: 'Competitions Won', value: '2+' },
  { label: 'Certifications Earned', value: '3+' },
  { label: 'Recognition Awards', value: '3+' },
  ];

  return (
    <section
      id="achievements"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Achievements & Certifications
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Recognition, certifications, and milestones that mark my
            journey in technology.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden"
            >
              {/* Background Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${achievement.gradient} transition-opacity duration-300`}
              />

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-block mb-2 px-2 py-1 bg-gradient-to-r ${achievement.gradient} text-white rounded-full text-xs font-medium`}
                  >
                    {achievement.type}
                  </span>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {achievement.title}
                  </h3>
                </div>
              </div>

              {/* Organization */}
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />

                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {achievement.organization}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover Indicator */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="text-center bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {highlight.value}
              </div>

              <div className="text-sm text-slate-600 dark:text-slate-400">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning */}
        <div className="bg-gradient-to-r from-sky-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Continuous Learning & Growth
          </h3>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I continuously strengthen my technical skills through professional certifications, hands-on projects, and ongoing learning. My interests include cloud computing, data engineering, software automation, and Generative AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
