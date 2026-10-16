import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useProjectStore from '../store/useProjectStore';
import { externalUrl, mailTo } from '../utils/links';

const Hero = () => {
  const { homeContent, resumeFile } = useProjectStore();
  const resumeHref = resumeFile?.url || resumeFile?.dataUrl || externalUrl(homeContent.resumeUrl);
  const resumeDownloadName = resumeFile?.name || 'resume.pdf';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 border-b border-zinc-900/50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-8 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-medium text-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          {homeContent.badge}
        </motion.div>
        
        <motion.h1 variants={textVariants} className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-white">
          {homeContent.heading} <br />
          <span className="accent-text inline-block">{homeContent.accentHeading}</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12">
          {homeContent.description}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-8 py-4 rounded-lg accent-bg font-bold text-lg transition-all flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            {homeContent.primaryButtonText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-bold text-lg hover:bg-zinc-800 hover:border-zinc-700 transition-colors">
            {homeContent.secondaryButtonText}
          </a>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-16 flex items-center justify-center gap-6">
          <a href={externalUrl(homeContent.githubUrl)} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 hover:-translate-y-1 transition-all">
            <FaGithub size={28} />
          </a>
          <a href={externalUrl(homeContent.linkedinUrl)} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 hover:-translate-y-1 transition-all">
            <FaLinkedin size={28} />
          </a>
          <a href={mailTo(homeContent.email)} className="text-zinc-500 hover:text-blue-500 hover:-translate-y-1 transition-all">
            <Mail size={28} />
          </a>
          <a href={resumeHref} download={resumeDownloadName} target={resumeHref.startsWith('data:') ? undefined : '_blank'} rel="noreferrer" className="text-zinc-500 hover:text-blue-500 hover:-translate-y-1 transition-all" title="Download Resume">
            <Download size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
