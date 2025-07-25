import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award size={24} />,
      title: 'Hackathon Finalist',
      description: 'Top finalist in multiple national-level hackathons like NextStep Hacks, 3percentclub, and GitLab Challenge'
    },
    {
      icon: <Award size={24} />,
      title: 'AI Builder',
      description: 'Built Bugwhisper, CivicBot, CareChain AI & other impactful AI/ML projects'
    },
    {
      icon: <Award size={24} />,
      title: 'Full Stack Developer',
      description: 'Specialized in building E-commerce platforms & community apps using Next.js, React, Prisma'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Freelance Full Stack Developer',
      company: 'Self-Driven',
      description: 'Worked on impactful hackathon projects, portfolio websites, and AI-based solutions using modern web stacks'
    },
    {
      year: '2024',
      title: 'Open Source Contributor & Project Builder',
      company: 'Independent',
      description: 'Built projects with authentication, payment integration, dashboards, and AI APIs for global challenges'
    },
    {
      year: '2023',
      title: 'Tech Learner & Community Explorer',
      company: 'Personal Learning Journey',
      description: 'Focused on mastering JavaScript, Next.js, Tailwind, and Cloud fundamentals'
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto animate-slide-in-up">
            Builder. Problem-Solver. Hackathon enthusiast. Merging Web & AI to build what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-10 animate-slide-in-left">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed mb-8">
                Hey, I’m <strong>Pratap Shourya Singh</strong> — a full-stack developer passionate about building real-world apps that solve real problems. From E-commerce to Civic Tech, I love turning bold ideas into impactful digital experiences.
              </p>
              <p className="text-xl leading-relaxed mb-8">
                I’ve participated in 10+ hackathons and built projects combining AI, community help, healthcare, and accessibility. My go-to stack includes <strong>React, Next.js, Prisma, PostgreSQL, Tailwind CSS, and Node.js</strong>. I often integrate APIs like <strong>OpenAI</strong>, <strong>Stripe</strong>, and <strong>Google Maps</strong> into my builds.
              </p>
              <p className="text-xl leading-relaxed">
                I’m continuously learning, exploring AI/ML, cloud, and DevOps. I also love documenting my journey and sharing learnings with others. Let’s build, break, and build again.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 text-gray-400 text-lg">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <MapPin size={24} />
              </div>
              <span className="font-medium">India (Open to Remote Work)</span>
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
