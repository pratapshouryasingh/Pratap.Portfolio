import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-black tracking-tighter">
              <span className="text-white">Port</span><span className="accent-text">folio.</span>
            </a>
            <p className="text-zinc-500 mt-2 font-medium">Crafting digital experiences with code and creativity.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com" className="text-zinc-500 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" className="text-zinc-500 hover:text-blue-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-zinc-500 hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Pratap. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
