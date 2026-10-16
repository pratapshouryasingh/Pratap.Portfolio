import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useProjectStore from '../store/useProjectStore';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Trash2, Plus, LogOut, Save, Upload, CheckCircle2, Server, RefreshCw } from 'lucide-react';
import Login from '../components/Login';

const iconOptions = ['Code', 'Zap', 'Layers', 'Database', 'Globe', 'Brain'];
const colorOptions = [
  'text-cyan-400',
  'text-cyan-300',
  'text-white',
  'text-green-500',
  'text-green-600',
  'text-zinc-300',
  'text-blue-400',
  'text-blue-500',
  'text-blue-600',
  'text-yellow-400',
  'text-emerald-400',
];

const inputClass = 'w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none';
const labelClass = 'block text-sm font-bold text-zinc-400 mb-1';

const Admin = () => {
  const {
    projects,
    experiences,
    skills,
    homeContent,
    resumeFile,
    resumeError,
    addProject,
    deleteProject,
    addExperience,
    deleteExperience,
    addSkill,
    deleteSkill,
    updateHomeContent,
    uploadResume,
    deleteResume,
    isAuthenticated,
    logout,
    isBackendConnected,
    fetchPortfolio
  } = useProjectStore();

  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    github: '',
    demo: ''
  });

  const [experienceForm, setExperienceForm] = useState({
    role: '',
    organization: '',
    type: 'Experience',
    period: '',
    location: '',
    description: '',
    highlights: '',
    link: ''
  });

  const [skillForm, setSkillForm] = useState({
    name: '',
    icon: 'Code',
    color: 'text-cyan-400',
    orbit: '0'
  });

  const [homeForm, setHomeForm] = useState(homeContent);
  const [resumeStatus, setResumeStatus] = useState('');
  const [notice, setNotice] = useState('');

  // Keep homeForm in sync with backend data
  useEffect(() => {
    if (homeContent) {
      setHomeForm(homeContent);
    }
  }, [homeContent]);

  const showNotice = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(''), 4000);
  };

  const handleProjectChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e) => {
    setExperienceForm({ ...experienceForm, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    setSkillForm({ ...skillForm, [e.target.name]: e.target.value });
  };

  const handleHomeChange = (e) => {
    setHomeForm({ ...homeForm, [e.target.name]: e.target.value });
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!projectForm.title) return;
    
    await addProject({
      ...projectForm,
      tags: projectForm.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    });
    
    setProjectForm({
      title: '',
      description: '',
      image: '',
      tags: '',
      github: '',
      demo: ''
    });
    showNotice('Project added & saved permanently to backend database!');
  };

  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    if (!skillForm.name.trim()) return;

    await addSkill({
      ...skillForm,
      name: skillForm.name.trim(),
      orbit: Number(skillForm.orbit)
    });

    setSkillForm({
      name: '',
      icon: 'Code',
      color: 'text-cyan-400',
      orbit: '0'
    });
    showNotice('Skill added & saved permanently to backend database!');
  };

  const handleExperienceSubmit = async (e) => {
    e.preventDefault();
    if (!experienceForm.role.trim() || !experienceForm.organization.trim()) return;

    await addExperience({
      ...experienceForm,
      role: experienceForm.role.trim(),
      organization: experienceForm.organization.trim(),
      highlights: experienceForm.highlights.split(',').map(item => item.trim()).filter(Boolean)
    });

    setExperienceForm({
      role: '',
      organization: '',
      type: 'Experience',
      period: '',
      location: '',
      description: '',
      highlights: '',
      link: ''
    });
    showNotice('Experience added & saved permanently to backend database!');
  };

  const handleHomeSubmit = async (e) => {
    e.preventDefault();
    await updateHomeContent(homeForm);
    showNotice('Homepage text & links permanently updated in backend database!');
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setResumeStatus('Please upload a PDF file.');
      e.target.value = '';
      return;
    }

    setResumeStatus('Uploading resume to backend...');
    const formData = new FormData();
    formData.append('resume', file);

    try {
      await uploadResume(formData);
      setResumeStatus('Resume uploaded & saved permanently on server.');
      showNotice('Resume PDF uploaded permanently to backend server!');
    } catch {
      // Fallback to base64
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          await uploadResume({
            name: file.name,
            size: file.size,
            dataUrl: reader.result,
            uploadedAt: new Date().toISOString()
          });
          setResumeStatus('Resume saved.');
          showNotice('Resume PDF saved to backend!');
        } catch {
          setResumeStatus('Resume could not be saved.');
        }
      };
      reader.readAsDataURL(file);
    } finally {
      e.target.value = '';
    }
  };

  const handleResumeDelete = async () => {
    await deleteResume();
    setResumeStatus('Resume removed.');
    showNotice('Resume deleted from backend.');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 border-b border-zinc-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          {!isAuthenticated ? (
            <Login />
          ) : (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-2">
                    Admin <span className="accent-text">Panel</span>
                  </h1>
                  <p className="text-zinc-400">Manage projects, skills, experiences, and homepage content. Permanent updates.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                    isBackendConnected 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                      : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                  }`}>
                    <Server size={14} />
                    <span>{isBackendConnected ? 'Backend Connected' : 'Local Fallback'}</span>
                  </div>
                  <button 
                    onClick={() => { fetchPortfolio(); showNotice('Synchronized with backend database!'); }} 
                    className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors"
                    title="Refresh data from server"
                  >
                    <RefreshCw size={18} />
                  </button>
                  <button onClick={logout} className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg font-bold transition-colors">
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              </motion.div>

              <AnimatePresence>
                {notice && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    className="mb-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center gap-3 font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  >
                    <CheckCircle2 size={18} className="shrink-0 text-blue-400" />
                    <span>{notice}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <motion.div 
                  className="lg:col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="solid-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Plus size={20} className="text-blue-500" /> Add New Project
                    </h3>
                    <form onSubmit={handleProjectSubmit} className="space-y-4">
                      <div>
                        <label className={labelClass}>Title</label>
                        <input type="text" name="title" value={projectForm.title} onChange={handleProjectChange} required className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Description</label>
                        <textarea name="description" value={projectForm.description} onChange={handleProjectChange} required rows="3" className={`${inputClass} resize-none`}></textarea>
                      </div>
                      <div>
                        <label className={labelClass}>Image URL</label>
                        <input type="url" name="image" value={projectForm.image} onChange={handleProjectChange} required className={inputClass} placeholder="https://..." />
                      </div>
                      <div>
                        <label className={labelClass}>Tags (comma separated)</label>
                        <input type="text" name="tags" value={projectForm.tags} onChange={handleProjectChange} className={inputClass} placeholder="React, Node.js, ..." />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>GitHub Link</label>
                          <input type="text" name="github" value={projectForm.github} onChange={handleProjectChange} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Demo Link</label>
                          <input type="text" name="demo" value={projectForm.demo} onChange={handleProjectChange} className={inputClass} />
                        </div>
                      </div>
                      <button type="submit" className="w-full py-3 mt-4 rounded-lg accent-bg font-bold text-white transition-colors">
                        Save Project
                      </button>
                    </form>
                  </div>
                </motion.div>

                <motion.div 
                  className="lg:col-span-2 space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Current Projects ({projects.length})</h3>
                  {projects.length === 0 ? (
                    <div className="text-center py-12 text-zinc-500 border border-dashed border-zinc-800 rounded-2xl">
                      No projects yet.
                    </div>
                  ) : (
                    projects.map((project) => (
                      <div key={project.id} className="solid-card p-4 rounded-xl flex items-center justify-between gap-4 hover:border-zinc-700">
                        <div className="flex items-center gap-4 flex-grow min-w-0">
                          <div className="w-16 h-12 bg-zinc-900 rounded overflow-hidden shrink-0">
                            {project.image && <img src={project.image} alt="" className="w-full h-full object-cover" />}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-white font-bold truncate">{project.title}</h4>
                            <div className="flex gap-2 text-xs text-zinc-500 mt-1 truncate">
                              {project.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => deleteProject(project.id)}
                          className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                          title="Delete Project"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))
                  )}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <motion.div
                  className="lg:col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="solid-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Plus size={20} className="text-blue-500" /> Add Experience
                    </h3>
                    <form onSubmit={handleExperienceSubmit} className="space-y-4">
                      <div>
                        <label className={labelClass}>Role / Work Title</label>
                        <input type="text" name="role" value={experienceForm.role} onChange={handleExperienceChange} required className={inputClass} placeholder="Full Stack Developer" />
                      </div>
                      <div>
                        <label className={labelClass}>Company / Client</label>
                        <input type="text" name="organization" value={experienceForm.organization} onChange={handleExperienceChange} required className={inputClass} placeholder="Company name or Freelance" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Type</label>
                          <select name="type" value={experienceForm.type} onChange={handleExperienceChange} className={inputClass}>
                            <option value="Experience">Experience</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Internship">Internship</option>
                            <option value="Contract">Contract</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Period</label>
                          <input type="text" name="period" value={experienceForm.period} onChange={handleExperienceChange} className={inputClass} placeholder="2025 - Present" />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Location</label>
                        <input type="text" name="location" value={experienceForm.location} onChange={handleExperienceChange} className={inputClass} placeholder="Remote / City" />
                      </div>
                      <div>
                        <label className={labelClass}>Description</label>
                        <textarea name="description" value={experienceForm.description} onChange={handleExperienceChange} required rows="3" className={`${inputClass} resize-none`}></textarea>
                      </div>
                      <div>
                        <label className={labelClass}>Highlights (comma separated)</label>
                        <input type="text" name="highlights" value={experienceForm.highlights} onChange={handleExperienceChange} className={inputClass} placeholder="React, APIs, Dashboard..." />
                      </div>
                      <div>
                        <label className={labelClass}>Detail Link</label>
                        <input type="text" name="link" value={experienceForm.link} onChange={handleExperienceChange} className={inputClass} placeholder="https://..." />
                      </div>
                      <button type="submit" className="w-full py-3 mt-4 rounded-lg accent-bg font-bold text-white transition-colors">
                        Save Experience
                      </button>
                    </form>
                  </div>
                </motion.div>

                <motion.div
                  className="lg:col-span-2 space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Current Experience ({experiences.length})</h3>
                  {experiences.length === 0 ? (
                    <div className="text-center py-12 text-zinc-500 border border-dashed border-zinc-800 rounded-2xl">
                      No experience yet.
                    </div>
                  ) : (
                    experiences.map((experience) => (
                      <div key={experience.id} className="solid-card p-4 rounded-xl flex items-center justify-between gap-4 hover:border-zinc-700">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-white font-bold truncate">{experience.role}</h4>
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 shrink-0">{experience.type}</span>
                          </div>
                          <p className="text-sm text-zinc-400 truncate">{experience.organization} - {experience.period || 'No period added'}</p>
                          <div className="flex gap-2 text-xs text-zinc-500 mt-1 truncate">
                            {experience.highlights.slice(0, 3).map(item => <span key={item}>{item}</span>)}
                          </div>
                        </div>
                        <button
                          onClick={() => deleteExperience(experience.id)}
                          className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                          title="Delete Experience"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))
                  )}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div 
                  className="solid-card p-6 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Save size={20} className="text-blue-500" /> Homepage Text
                  </h3>
                  <form onSubmit={handleHomeSubmit} className="space-y-4">
                    <div>
                      <label className={labelClass}>Badge Text</label>
                      <input type="text" name="badge" value={homeForm.badge} onChange={handleHomeChange} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Heading</label>
                        <input type="text" name="heading" value={homeForm.heading} onChange={handleHomeChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Blue Heading</label>
                        <input type="text" name="accentHeading" value={homeForm.accentHeading} onChange={handleHomeChange} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Homepage Description</label>
                      <textarea name="description" value={homeForm.description} onChange={handleHomeChange} rows="4" className={`${inputClass} resize-none`}></textarea>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Primary Button</label>
                        <input type="text" name="primaryButtonText" value={homeForm.primaryButtonText} onChange={handleHomeChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Secondary Button</label>
                        <input type="text" name="secondaryButtonText" value={homeForm.secondaryButtonText} onChange={handleHomeChange} className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>GitHub URL</label>
                        <input type="text" name="githubUrl" value={homeForm.githubUrl} onChange={handleHomeChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>LinkedIn URL</label>
                        <input type="text" name="linkedinUrl" value={homeForm.linkedinUrl} onChange={handleHomeChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Email</label>
                        <input type="email" name="email" value={homeForm.email} onChange={handleHomeChange} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Resume URL Fallback</label>
                      <input type="text" name="resumeUrl" value={homeForm.resumeUrl || ''} onChange={handleHomeChange} className={inputClass} placeholder="/resume.pdf or https://..." />
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-white font-bold flex items-center gap-2">
                            <FileText size={18} className="text-blue-500" /> Resume PDF
                          </h4>
                          <p className="text-sm text-zinc-500 mt-1">
                            {resumeFile ? resumeFile.name : 'No PDF uploaded yet.'}
                          </p>
                        </div>
                        {resumeFile && (
                          <button
                            type="button"
                            onClick={handleResumeDelete}
                            className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                            title="Delete Resume"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                      <label className="flex items-center justify-center gap-2 w-full cursor-pointer px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500 transition-colors font-bold">
                        <Upload size={18} /> Upload PDF
                        <input type="file" accept="application/pdf,.pdf" onChange={handleResumeUpload} className="hidden" />
                      </label>
                      {(resumeStatus || resumeError) && (
                        <p className="text-sm text-zinc-500 mt-3">{resumeError || resumeStatus}</p>
                      )}
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 rounded-lg accent-bg font-bold text-white transition-colors">
                      Save Homepage Text
                    </button>
                  </form>
                </motion.div>

                <motion.div 
                  className="solid-card p-6 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Plus size={20} className="text-blue-500" /> Add Skill
                  </h3>
                  <form onSubmit={handleSkillSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Skill Name</label>
                      <input type="text" name="name" value={skillForm.name} onChange={handleSkillChange} className={inputClass} placeholder="React, Python, AWS..." />
                    </div>
                    <div>
                      <label className={labelClass}>Icon</label>
                      <select name="icon" value={skillForm.icon} onChange={handleSkillChange} className={inputClass}>
                        {iconOptions.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Color</label>
                      <select name="color" value={skillForm.color} onChange={handleSkillChange} className={inputClass}>
                        {colorOptions.map(color => <option key={color} value={color}>{color}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Orbit Ring</label>
                      <select name="orbit" value={skillForm.orbit} onChange={handleSkillChange} className={inputClass}>
                        <option value="0">Inner ring</option>
                        <option value="1">Middle ring</option>
                        <option value="2">Outer ring</option>
                      </select>
                    </div>
                    <button type="submit" className="sm:col-span-2 w-full py-3 rounded-lg accent-bg font-bold text-white transition-colors">
                      Save Skill
                    </button>
                  </form>

                  <h4 className="text-lg font-bold text-white mb-4">Current Skills ({skills.length})</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                    {skills.map((skill) => (
                      <div key={skill.id} className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-white font-bold truncate">{skill.name}</p>
                          <p className="text-xs text-zinc-500">Ring {Number(skill.orbit) + 1} - {skill.icon}</p>
                        </div>
                        <button
                          onClick={() => deleteSkill(skill.id)}
                          className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                          title="Delete Skill"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
