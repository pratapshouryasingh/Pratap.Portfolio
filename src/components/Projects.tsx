import React from 'react';
import { ExternalLink, Github, Sparkles, Bot, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Content Generator',
      description: 'A sophisticated content generation platform powered by GPT-4 and custom AI models. Features real-time collaboration, template management, and multi-format export.',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      icon: <Sparkles size={24} />,
      featured: true
    },
    {
      title: 'Smart Chatbot Platform',
      description: 'Intelligent customer service chatbot with natural language processing, sentiment analysis, and integration with popular CRM systems.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'LangChain', 'FastAPI', 'Redis', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      icon: <Bot size={24} />,
      featured: true
    },
    {
      title: 'E-commerce Analytics Dashboard',
      description: 'Comprehensive analytics platform for e-commerce businesses with real-time data visualization, AI-powered insights, and predictive analytics.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: '#',
      icon: <ShoppingCart size={24} />,
      featured: false
    }
  ];

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

        <div className="space-y-20">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Projects;