import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'srilekhanetha186@gmail.com',
      link: 'mailto:srilekhanetha186@gmail.com',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Hyderabad, India',
      link: '#',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Available for',
      value: 'Full-time opportunities',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      link: 'https://github.com/srilekha-netha',
      color: 'hover:text-gray-700',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/srilekha-netha/',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
             I'm currently seeking exciting career opportunities as a Software Developer. If you're hiring or open to collaboration, feel free to connect!
          </p>
        </div>

        {/* Horizontally Aligned Contact Info */}
        <div className="flex flex-wrap justify-center gap-12 text-center mb-12">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex flex-col items-center">
              <div className="p-3 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-xl mb-2">
                {info.icon}
              </div>
              <h4 className="text-md font-semibold text-slate-900 dark:text-slate-100">{info.label}</h4>
              <a
                href={info.link}
                className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-4">Connect with me</h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                className={`p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-600 dark:text-slate-400 ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Srilekha Jella. Crafted with passion and dedication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
