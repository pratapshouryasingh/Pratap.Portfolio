import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, ExternalLink, ArrowLeft, FolderKanban } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useProjectStore from '../store/useProjectStore';
import { externalUrl } from '../utils/links';

const AllProjects = () => {
  const { projects, experiences } = useProjectStore();
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 border-b border-zinc-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              All <span className="accent-text">Work</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              A complete collection of projects, experience, and freelance work.
            </p>
          </motion.div>

          <div className="inline-flex p-1 mb-10 rounded-xl bg-zinc-900 border border-zinc-800">
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-bold transition-colors ${activeTab === 'experience' ? 'accent-bg' : 'text-zinc-400 hover:text-white'}`}
            >
              <Briefcase size={18} /> Experience
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-bold transition-colors ${activeTab === 'projects' ? 'accent-bg' : 'text-zinc-400 hover:text-white'}`}
            >
              <FolderKanban size={18} /> Projects
            </button>
          </div>

          {activeTab === 'projects' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    className="solid-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="h-48 overflow-hidden bg-zinc-900">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-zinc-400 mb-6 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-bold px-2 py-1 bg-zinc-800 text-zinc-300 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 pt-4 border-t border-zinc-800">
                        <a href={externalUrl(project.github)} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors">
                          <FaGithub size={18} /> Code
                        </a>
                        <a href={externalUrl(project.demo)} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors">
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {projects.length === 0 && (
                <div className="text-center py-20 text-zinc-500">
                  No projects found. Add some from the Admin Panel.
                </div>
              )}
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((experience, index) => (
                  <motion.div 
                    key={experience.id} 
                    className="solid-card rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                        <Briefcase size={24} />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                        {experience.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experience.role}</h3>
                    <p className="text-blue-400 font-bold mb-2">{experience.organization}</p>
                    <p className="text-sm text-zinc-500 mb-5">{experience.period} - {experience.location}</p>
                    <p className="text-zinc-400 mb-6 flex-grow">{experience.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {experience.highlights.map((item, i) => (
                        <span key={i} className="text-xs font-bold px-2 py-1 bg-zinc-800 text-zinc-300 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    {experience.link && (
                      <a href={externalUrl(experience.link)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors pt-4 border-t border-zinc-800">
                        View Details <ExternalLink size={16} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              {experiences.length === 0 && (
                <div className="text-center py-20 text-zinc-500">
                  No experience found. Add some from the Admin Panel.
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllProjects;
