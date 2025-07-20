import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award size={24} />,
      title: 'Certified Solutions Architect',
      description: 'AWS Solutions Architect Professional'
    },
    {
      icon: <Award size={24} />,
      title: 'AI/ML Specialization',
      description: 'Stanford University Machine Learning'
    },
    {
      icon: <Award size={24} />,
      title: 'Full Stack Expert',
      description: 'Meta React Developer Professional'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Inc.',
      description: 'Leading AI integration projects and mentoring junior developers'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Developed scalable web applications and implemented DevOps practices'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Built responsive web interfaces and optimized user experiences'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-emerald-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            <span className="gradient-text">
              About Me
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto animate-slide-in-up">
            Passionate developer with expertise in modern web technologies and AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-10 animate-slide-in-left">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed mb-8">
                I'm a passionate full-stack developer with over 4 years of experience creating 
                innovative digital solutions. My expertise spans modern web development frameworks 
                and cutting-edge AI/GenAI technologies.
              </p>
              <p className="text-xl leading-relaxed mb-8">
                I specialize in building scalable applications using React, Next.js, and Node.js, 
                while integrating AI capabilities to create intelligent, user-centric experiences. 
                My approach combines technical excellence with creative problem-solving.
              </p>
              <p className="text-xl leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community through blogs and workshops.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 text-gray-400 text-lg">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <MapPin size={24} />
              </div>
              <span className="font-medium">San Francisco, CA</span>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`glass rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 hover-lift transition-all duration-500 animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl animate-pulse-glow">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{achievement.title}</h4>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-10 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-white mb-8 gradient-text">Experience Timeline</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`relative animate-fade-in-up stagger-${index + 1}`}>
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-5 top-16 w-1 h-20 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                  )}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div className="glass rounded-2xl p-8 border border-gray-700/30 flex-1 hover-lift">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-lg font-bold text-blue-400">{item.year}</span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="text-gray-400 font-medium">{item.company}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 hover:gradient-text transition-all duration-500">{item.title}</h4>
                      <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;