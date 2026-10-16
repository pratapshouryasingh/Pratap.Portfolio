import { Brain, Code, Database, Globe, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import useProjectStore from '../store/useProjectStore';

const iconMap = {
  Brain,
  Code,
  Database,
  Globe,
  Layers,
  Zap,
};

const Skills = () => {
  const { skills } = useProjectStore();

  // Define orbits and their respective skills
  const orbits = [
    {
      radius: 140, // pixels
      duration: 20, // seconds for full rotation
      direction: 1, // 1 for clockwise, -1 for counter-clockwise
      skills: skills.filter(skill => skill.orbit === 0)
    },
    {
      radius: 240,
      duration: 35,
      direction: -1,
      skills: skills.filter(skill => skill.orbit === 1)
    },
    {
      radius: 340,
      duration: 50,
      direction: 1,
      skills: skills.filter(skill => skill.orbit === 2)
    }
  ];

  return (
    <section id="skills" className="py-24 border-b border-zinc-900/50 overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Tech <span className="accent-text">Orbit</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            My ecosystem of interconnected technologies and tools.
          </p>
        </motion.div>

        {/* Orbital Container */}
        <div className="relative flex items-center justify-center h-[800px] max-w-full overflow-hidden mx-auto">
          
          {/* Central Core */}
          <motion.div 
            className="absolute z-10 flex flex-col items-center justify-center w-32 h-32 rounded-full bg-blue-500/10 border-2 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] backdrop-blur-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
          >
            <Brain size={40} className="text-blue-500 mb-2" />
            <span className="font-black text-white text-sm">Full Stack</span>
          </motion.div>

          {/* Render Orbits */}
          {orbits.map((orbit, orbitIndex) => (
            <motion.div
              key={orbitIndex}
              className="absolute rounded-full border border-zinc-800/50"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
              }}
              animate={{ rotate: orbit.direction * 360 }}
              transition={{
                duration: orbit.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Render Skills on this Orbit */}
              {orbit.skills.map((skill, skillIndex) => {
                // Calculate position on the circle (in degrees)
                const angle = (360 / orbit.skills.length) * skillIndex;
                const SkillIcon = iconMap[skill.icon] || Code;
                
                return (
                  <div
                    key={skill.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${orbit.radius}px)`,
                    }}
                  >
                    {/* Counter-rotate the skill node to keep text upright */}
                    <motion.div
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 shadow-xl hover:border-zinc-500 hover:scale-110 transition-all cursor-default"
                      style={{
                        transformOrigin: 'center center' // Counter rotation must happen from center of the node
                      }}
                      animate={{ rotate: orbit.direction * -360 - angle }}
                      transition={{
                        duration: orbit.duration,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <span className={skill.color}><SkillIcon size={20} /></span>
                      <span className="text-sm font-bold text-zinc-200 whitespace-nowrap">{skill.name}</span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
