import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-emerald-900/30 animate-pulse"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute particle bg-gradient-to-r from-blue-400/40 to-purple-400/40"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-float">
            <span className="gradient-text animate-rotate-gradient">
              Web Developer
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-gray-300 animate-slide-in-left">
            Modern Stack & AI/GenAI Specialist
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-in-right">
            Crafting exceptional digital experiences with cutting-edge technologies. 
            Specialized in modern web development frameworks and AI-powered solutions.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:neon-blue transition-all duration-500 hover:scale-125 animate-pulse-glow stagger-1"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:neon-blue transition-all duration-500 hover:scale-125 animate-pulse-glow stagger-2"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-4 glass rounded-full hover:neon-purple transition-all duration-500 hover:scale-125 animate-pulse-glow stagger-3"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="#projects"
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/25 animate-slide-in-left stagger-4"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-10 py-5 glass border border-gray-600 rounded-full font-bold text-lg hover:neon-purple transition-all duration-500 transform hover:scale-110 animate-slide-in-right stagger-5"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-3 glass rounded-full animate-pulse-glow">
            <ArrowDown size={28} className="text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;