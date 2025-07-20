import React from 'react';
import { Code, Brain, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI/GenAI Technologies',
      skills: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Vector DBs'],
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: <Globe size={32} />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'Netlify', 'CI/CD'],
      color: 'from-orange-500 to-red-400'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Expo', 'Progressive Web Apps'],
      color: 'from-indigo-500 to-blue-400'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance & Tools',
      skills: ['Vite', 'Webpack', 'ESLint', 'Jest', 'Cypress', 'GraphQL'],
      color: 'from-yellow-500 to-orange-400'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            <span className="gradient-text">
              Technical Skills
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto animate-slide-in-up">
            Expertise across modern web technologies and AI/GenAI platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 group hover-lift animate-fade-in-up stagger-${(index % 6) + 1}`}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:gradient-text transition-all duration-500">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-slate-800/60 text-gray-300 px-4 py-2 rounded-full text-sm mr-3 mb-3 hover:bg-slate-700/60 hover:text-white hover:scale-105 transition-all duration-300 border border-gray-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;