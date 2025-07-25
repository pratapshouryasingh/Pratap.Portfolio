import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20 animate-gradient-shift opacity-80"></div>
      
      {/* Improved animated grid lines */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-grid-blue-400/30 [mask-image:linear-gradient(to_bottom,transparent_1%,white_15%,white_85%,transparent_99%)] animate-grid-pan"></div>
      </div>

      {/* Enhanced floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 120 + 30;
          const duration = 15 + Math.random() * 20;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(25px)',
                animation: `float ${duration}s ease-in-out infinite both`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.6 + Math.random() * 0.4
              }}
            ></div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Title with typing animation */}
          <h1 className="text-6xl md:text-8xl font-bold overflow-hidden whitespace-nowrap animate-typing">
            <span className="gradient-text">
              PRATAP SHOURYA SINGH
            </span>
          </h1>

          {/* Enhanced Subtitle animation */}
          <h2 className="text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300 animate-glow-pulse overflow-hidden">
            <span className="inline-block animate-typewriter whitespace-nowrap overflow-hidden border-r-4 border-r-blue-400 pr-1">
              Full-Stack Web Developer | AI & Generative Tech Enthusiast
            </span>
          </h2>

          {/* Description with slide-up animation */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '1.6s' }}>
            Crafting high-impact digital experiences with cutting-edge technologies. I specialize in modern full-stack web development and AI-driven solutions, delivering innovative products with performance, scalability, and user experience at the core.
          </p>
          
          {/* Social Links with staggered animation */}
          <div className="flex justify-center space-x-8 py-8">
            <a
              href="https://github.com/pratapshouryasingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:neon-blue transition-all duration-300 hover:scale-110 animate-fade-in opacity-0"
              style={{ animationDelay: '2s' }}
            >
              <Github size={28} className="animate-pulse" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratap-shourya-singh-b7732828a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:neon-blue transition-all duration-300 hover:scale-110 animate-fade-in opacity-0"
              style={{ animationDelay: '2.2s' }}
            >
              <Linkedin size={28} className="animate-pulse" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-4 glass rounded-full hover:neon-purple transition-all duration-300 hover:scale-110 animate-fade-in opacity-0"
              style={{ animationDelay: '2.4s' }}
            >
              <Mail size={28} className="animate-pulse" />
            </a>
          </div>

          {/* CTA Buttons with bounce animation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in opacity-0"
              style={{ animationDelay: '2.6s' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-10 py-5 glass border border-gray-600 rounded-full font-bold text-lg hover:neon-purple transition-all duration-300 transform hover:scale-105 animate-fade-in opacity-0"
              style={{ animationDelay: '2.8s' }}
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Scroll Indicator with more prominent animation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="p-3 glass rounded-full border border-blue-400/30 animate-bounce-slow hover:neon-blue transition-all duration-300">
            <ArrowDown size={28} className="text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradient-shift 12s ease infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-grid-pan {
          animation: grid-pan 40s linear infinite;
        }
        @keyframes grid-pan {
          0% { background-position: 0 0; }
          100% { background-position: 0 80px; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-20px, -30px) rotate(-2deg); }
          50% { transform: translate(30px, -50px) rotate(2deg); }
          75% { transform: translate(-20px, -30px) rotate(-2deg); }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .animate-typing {
          animation: typing 1.5s steps(40, end) forwards;
        }
        @keyframes typewriter {
          from { width: 0 }
          to { width: 100% }
        }
        .animate-typewriter {
          animation: typewriter 1.8s steps(60, end) forwards,
                     blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #60a5fa }
        }
        @keyframes glow-pulse {
          0%, 100% { text-shadow: 0 0 8px #60a5fa, 0 0 16px #60a5fa; }
          50% { text-shadow: 0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #2563eb; }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
          transform: translateY(20px);
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 1s ease forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient-shift 8s ease infinite;
        }
        .glass {
          backdrop-filter: blur(10px);
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neon-blue {
          box-shadow: 0 0 15px #3b82f6, 0 0 30px #3b82f6;
        }
        .neon-purple {
          box-shadow: 0 0 15px #8b5cf6, 0 0 30px #8b5cf6;
        }
        .bg-grid-blue-400/30 {
          background-image: linear-gradient(to right, rgba(96, 165, 250, 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(96, 165, 250, 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;