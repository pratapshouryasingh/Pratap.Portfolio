import React, { useState } from 'react';
import { 
  Download, 
  Github, 
  Linkedin, 
  Award, 
  Mail, 
  Phone, 
  ChevronLeft, 
  ChevronRight,
  FileText,
  ExternalLink
} from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sidebarItems = [
    {
      icon: <Download size={20} />,
      label: 'Download Resume',
      action: () => {
        // Create a dummy download link - replace with your actual resume URL
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Replace with your actual resume path
        link.download = 'John_Doe_Resume.pdf';
        link.click();
      },
      color: 'hover:text-emerald-400 hover:bg-emerald-500/10'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub Profile',
      action: () => window.open('https://github.com/yourusername', '_blank'),
      color: 'hover:text-gray-400 hover:bg-gray-500/10'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn Profile',
      action: () => window.open('https://linkedin.com/in/yourusername', '_blank'),
      color: 'hover:text-blue-400 hover:bg-blue-500/10'
    },
    {
      icon: <Award size={20} />,
      label: 'Certificates',
      action: () => {
        // Scroll to certificates section or open certificates page
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      },
      color: 'hover:text-yellow-400 hover:bg-yellow-500/10'
    },
    {
      icon: <FileText size={20} />,
      label: 'Portfolio PDF',
      action: () => {
        // Download portfolio as PDF
        const link = document.createElement('a');
        link.href = '/portfolio.pdf'; // Replace with your actual portfolio PDF
        link.download = 'John_Doe_Portfolio.pdf';
        link.click();
      },
      color: 'hover:text-purple-400 hover:bg-purple-500/10'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email Me',
      action: () => window.location.href = 'mailto:your.email@example.com',
      color: 'hover:text-red-400 hover:bg-red-500/10'
    },
    {
      icon: <Phone size={20} />,
      label: 'Call Me',
      action: () => window.location.href = 'tel:+15551234567',
      color: 'hover:text-green-400 hover:bg-green-500/10'
    }
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ease-in-out ${
        isExpanded ? 'translate-x-0' : '-translate-x-48'
      }`}>
        <div className="glass rounded-r-2xl border-r border-t border-b border-gray-700/30 backdrop-blur-xl bg-slate-900/80 shadow-2xl">
          {/* Sidebar Content */}
          <div className="p-4 space-y-3 w-56">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold gradient-text">Quick Access</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
            </div>
            
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 text-gray-300 ${item.color} group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {item.label}
                </span>
                <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 p-3 glass rounded-r-xl border-r border-t border-b border-gray-700/30 backdrop-blur-xl bg-slate-900/80 hover:bg-slate-800/80 transition-all duration-500 group hover:scale-110 animate-pulse-glow ${
          isExpanded ? 'translate-x-56' : 'translate-x-0'
        }`}
      >
        <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </div>
        
        {/* Tooltip */}
        <div className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-3 px-3 py-2 glass rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isExpanded ? 'hidden' : 'block'
        }`}>
          Quick Access Menu
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-800/80"></div>
        </div>
      </button>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsExpanded(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;