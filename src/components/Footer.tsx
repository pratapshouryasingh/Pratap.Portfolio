import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex items-center space-x-3 text-gray-400 mb-6 md:mb-0 text-lg">
            <span>Made with</span>
            <Heart size={20} className="text-red-500 fill-current animate-pulse" />
            <span>and</span>
            <Code size={20} className="text-blue-400 animate-pulse" />
            <span>by a passionate developer</span>
          </div>
          
          <div className="text-gray-400 text-lg font-medium">
            © 2024 DevPortfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;