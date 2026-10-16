import { Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section id="about" className="py-24 border-b border-zinc-900/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="w-full md:w-1/2 perspective-1000"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#3b82f6" glarePosition="all" className="transform-style-3d">
              <div className="solid-card rounded-2xl p-6 md:p-8 font-mono text-sm shadow-2xl relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-sm"></div>
                <div className="relative bg-zinc-950/90 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-zinc-500 font-sans text-xs">developer.js</span>
                  </div>
                  <div className="text-zinc-300 leading-relaxed overflow-x-auto">
                    <p><span className="text-blue-400">const</span> <span className="text-yellow-200">developer</span> = {'{'}</p>
                    <p className="ml-4">name: <span className="text-emerald-400">'Pratap'</span>,</p>
                    <p className="ml-4">role: <span className="text-emerald-400">'Full Stack & AI Engineer'</span>,</p>
                    <p className="ml-4">skills: [<span className="text-emerald-400">'MERN'</span>, <span className="text-emerald-400">'Python'</span>, <span className="text-emerald-400">'GenAI'</span>],</p>
                    <p className="ml-4">passion: <span className="text-emerald-400">'Building scalable products'</span></p>
                    <p>{'};'}</p>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              About <span className="accent-text">Me</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              I'm a passionate web developer with expertise in the MERN stack and Python. I specialize in building full-stack web applications, integrating AI/GenAI capabilities, and designing scalable database architectures. With a strong foundation in modern web technologies, I love turning complex problems into intuitive, user-friendly solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05}>
                <div className="solid-card p-5 rounded-xl flex items-start gap-4 h-full">
                  <div className="w-10 h-10 rounded bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Frontend</h4>
                    <p className="text-sm text-zinc-400">Responsive UIs with React & Tailwind.</p>
                  </div>
                </div>
              </Tilt>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05}>
                <div className="solid-card p-5 rounded-xl flex items-start gap-4 h-full">
                  <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Backend</h4>
                    <p className="text-sm text-zinc-400">Robust APIs with Node.js & Python.</p>
                  </div>
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
