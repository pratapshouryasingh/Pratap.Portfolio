import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get all sections
      const sections = ['home', 'skills', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const isActive = (href: string) => {
    const section = href.replace('#', '');
    return activeSection === section;
  };
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass shadow-2xl' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold gradient-text animate-pulse-glow">
            DevPortfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-all duration-500 relative group text-lg font-medium ${
                  isActive(item.href) 
                    ? 'text-blue-400 gradient-text' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                {isActive(item.href) && (
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse-glow"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass rounded-lg hover:neon-blue transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 glass rounded-2xl p-6 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-3 transition-all duration-300 text-lg font-medium border-b border-gray-700/30 last:border-b-0 relative ${
                  isActive(item.href) 
                    ? 'text-blue-400 gradient-text' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full animate-pulse-glow"></span>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;