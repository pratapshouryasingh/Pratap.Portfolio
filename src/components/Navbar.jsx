import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Admin', href: '/admin' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter">
          <span className="text-white">Port</span><span className="accent-text">folio.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href} className="text-sm font-bold text-zinc-400 hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="text-sm font-bold text-zinc-400 hover:text-white transition-colors duration-300">
                {link.name}
              </Link>
            )
          ))}
          <a href="/#contact" className="px-6 py-2 rounded-lg accent-bg font-bold transition-all duration-300">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-400 hover:text-white transition-colors duration-300 py-2">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-400 hover:text-white transition-colors duration-300 py-2">
                {link.name}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
