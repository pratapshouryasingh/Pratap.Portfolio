import {
  Download,
  Github,
  Linkedin,
  Award,
  Mail,
  Phone,
  Twitter,
  User
} from 'lucide-react';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <Download size={20} />,
      label: 'Download Resume',
      action: () => {
        const link = document.createElement('a');
        link.href = '/Pratap shourya singh .pdf'; // File placed in public folder
        link.download = 'Pratap_Shourya_Singh_Resume.pdf';
        link.click();
      },
      color: 'hover:text-emerald-400 hover:bg-emerald-500/20'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub Profile',
      action: () => window.open('https://github.com/pratapshouryasingh', '_blank'),
      color: 'hover:text-gray-400 hover:bg-gray-500/20'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn Profile',
      action: () => window.open('https://www.linkedin.com/in/pratap-shourya-singh-b7732828a', '_blank'),
      color: 'hover:text-blue-400 hover:bg-blue-500/20'
    },
    {
      icon: <Award size={20} />,
      label: 'View Certificates',
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      },
      color: 'hover:text-yellow-400 hover:bg-yellow-500/20'
    },
    
    {
      icon: <Mail size={20} />,
      label: 'Email Me',
      action: () => window.location.href = 'mailto:pratapshouryasingh143@gmail.com',
      color: 'hover:text-red-400 hover:bg-red-500/20'
    },
    {
      icon: <Phone size={20} />,
      label: 'Whatsapp/Call',
      action: () => window.location.href = 'tel:+91 6267035036',
      color: 'hover:text-green-400 hover:bg-green-500/20'
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter Profile',
      action: () => window.open('https://x.com/Pratapshourya1', '_blank'),
      color: 'hover:text-gray-400 hover:bg-gray-500/20'
    }
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="glass rounded-2xl border border-gray-700/30 backdrop-blur-xl bg-slate-900/80 shadow-2xl p-3">
        {/* Profile Icon at top */}
        <div className="flex justify-center mb-4 pb-3 border-b border-gray-700/30">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl animate-pulse-glow">
            <User size={20} className="text-white" />
          </div>
        </div>

        {/* Sidebar Items */}
        <div className="space-y-2">
          {sidebarItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                onClick={item.action}
                className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 text-gray-400 ${item.color} group animate-fade-in-up relative`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </button>

              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 px-3 py-2 glass rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 border border-gray-700/30">
                {item.label}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-800/80"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
