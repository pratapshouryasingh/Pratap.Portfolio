import { useState } from 'react';
import { Briefcase, ExternalLink, ArrowRight, FolderKanban } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import useProjectStore from '../store/useProjectStore';
import { externalUrl } from '../utils/links';

const Projects = () => {
  const { projects, experiences } = useProjectStore();
  const [activeTab, setActiveTab] = useState('experience');
  const displayProjects = projects.slice(0, 3);
  const displayExperiences = experiences.slice(0, 3);
  const activeCount = activeTab === 'projects' ? projects.length : experiences.length;

  return (
    <section id="projects" className="py-24 border-b border-zinc-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Projects & <span className="accent-text">Work</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Explore selected builds, professional experience, and freelance client work.
            </p>
          </motion.div>
          
          {activeCount > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-bold hover:bg-zinc-800 hover:text-blue-400 transition-colors group">
                View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
                  <div className="solid-card rounded-2xl overflow-hidden flex flex-col h-full hover:border-zinc-700 transition-colors">
                    <div className="h-48 overflow-hidden bg-zinc-900 relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-700" />
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
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {displayExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="solid-card rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <div className="flex flex-wrap gap-2 mb-6">
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
        )}
      </div>
    </section>
  );
};

export default Projects;
