import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Bot, ChevronLeft, ChevronRight } from 'lucide-react';
import bugwhisper from '../assets/Bugwhisper.png';
import image from '../assets/image.png';
import img from '../assets/img2.png';

const Projects = () => {
  const allProjects = [
    {
      title: ' Bugwhisper – AI-Powered Bug Fixing & Code Assistant',
      description: 'Bugwhisper is an intelligent developer assistant that leverages the power of GPT-4, custom AI pipelines, and contextual debugging to help developers identify, explain, and resolve bugs faster. It supports real-time code analysis, explanation, auto-fix suggestions, and integrates with your editor or browser for seamless productivity.',
      image: bugwhisper,
      technologies: ['React.js', 'Gemini API', 'Javascript', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://bug-whisper.vercel.app',
      githubUrl: 'https://github.com/pratapshouryasingh/BugWhisper',
      icon: <Sparkles size={24} />,
      featured: true
    },
    {
      title: 'BizBuddy- AI-Powered Business Assistant And Analyzer',
      description: 'BizBuddy is an AI-powered tool that generates actionable business insights and reports for startups, entrepreneurs, and small businesses. It leverages LLMs to analyze input about your business and delivers comprehensive reports on market trends, competition, growth opportunities, and more — with dynamic graphs and visualizations for easy understanding',
      image: img,
      technologies: ['React', 'Tailwindcss', 'MongoDB Atlas', 'Triva API','MEM0','Node.js'],
      liveUrl: 'https://biz-buddy-f.vercel.app',
      githubUrl: 'https://github.com/pratapshouryasingh/BizBuddy-F',
      icon: <Bot size={24} />,
      featured: true
    },
    {
      title: 'CareChain AI – Healthcare Assistant Bot',
      description: 'CareChain AI is an intelligent, privacy-first virtual health assistant designed to provide first-aid support, basic health guidance, and community-based clinic suggestions using AI. It empowers users to quickly get help, learn about symptoms, and access nearby healthcare facilities — all without needing to sign up for a hospital app or wait in line.',
      image: image,
      technologies: ['React.js', 'JavaScript', 'Node.js', 'Gemini API', 'Tailwind CSS'],
      liveUrl: 'https://3-percent-hacks-carechain.vercel.app',
      githubUrl: 'https://github.com/pratapshouryasingh/3Percent-Hacks-Carechain/tree/main',
      icon: <Bot size={24} />,
      featured: false
    },
    // Additional projects to make multiple sets
    {
      title: 'AI-Powered Recommendation Engine',
      description: 'Personalized content recommendation system using machine learning algorithms.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'PyTorch', 'Flask', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      icon: <Sparkles size={24} />,
      featured: true
    }
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const projectsPerSet = 3;
  const totalSets = Math.ceil(allProjects.length / projectsPerSet);

  const nextSet = () => {
    setCurrentSet((prev) => (prev === totalSets - 1 ? 0 : prev + 1));
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
  };

  const currentProjects = allProjects.slice(
    currentSet * projectsPerSet,
    currentSet * projectsPerSet + projectsPerSet
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            <span className="gradient-text">
              Featured Projects
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto animate-slide-in-up">
            Innovative solutions combining modern web technologies with AI capabilities
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={prevSet}
            className="p-4 glass rounded-full hover:neon-blue transition-all duration-300 hover:scale-110"
            aria-label="Previous projects"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSet}
            className="p-4 glass rounded-full hover:neon-blue transition-all duration-300 hover:scale-110"
            aria-label="Next projects"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="space-y-20">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover-lift">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-8">
                    <div className="flex space-x-6">
                      <a
                        href={project.liveUrl}
                        className="p-4 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300 neon-blue"
                      >
                        <ExternalLink size={24} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-4 glass rounded-full hover:neon-purple hover:scale-110 transition-all duration-300"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl animate-pulse-glow">
                    {project.icon}
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-4xl font-bold text-white hover:gradient-text transition-all duration-500 cursor-default">{project.title}</h3>
                
                <p className="text-gray-400 text-xl leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-5 py-3 glass border border-gray-700/50 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-blue-500/25"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center space-x-3 px-8 py-4 glass border border-gray-600 rounded-full font-bold text-lg hover:neon-purple transition-all duration-500 transform hover:scale-110"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: totalSets }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSet(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSet ? 'bg-blue-500 w-6' : 'bg-gray-600'
              }`}
              aria-label={`Go to project set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;