import React from 'react';
import { Trophy, Award, Star, AlignCenterVertical as Certificate, Medal, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '1st Prize at Innov8Tech',
      organization: 'BRECW',
      description: 'Won first place in the innovation competition for developing a creative tech solution that impressed the judges with its practical application and technical excellence.',
      icon: <Trophy className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-orange-500',
      type: 'Competition'
    },
    {
      title: 'Full Stack Development Certification',
      organization: 'DevTown',
      description: 'Completed comprehensive full-stack development program covering modern web technologies, database management, and deployment strategies.',
      icon: <Certificate className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      type: 'Certification'
    },
    {
      title: 'ServiceNow Micro-Certification',
      organization: 'ServiceNow',
      description: 'Earned micro-certification in ServiceNow platform, demonstrating proficiency in workflow automation and enterprise service management.',
      icon: <Award className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      type: 'Certification'
    }
  ];

  const highlights = [
    { label: 'Competitions Won', value: '2+' },
    { label: 'Certifications Earned', value: '5+' },
    { label: 'Recognition Awards', value: '3+' },
    { label: 'Technical Achievements', value: '10+' }
  ];

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Recognition and milestones that mark my journey in technology
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden"
            >
              {/* Background Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${achievement.gradient} transition-opacity duration-300`}></div>
              
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 bg-gradient-to-r ${achievement.gradient} bg-opacity-10 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium`}>
                      {achievement.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {achievement.title}
                  </h3>
                </div>
              </div>

              {/* Organization */}
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {achievement.organization}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover Indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
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

        {/* Additional Achievements */}
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
            Beyond formal certifications, I'm constantly expanding my skill set through online courses, 
            hackathons, and personal projects. I believe in staying updated with the latest technologies 
            and industry best practices to deliver innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;