import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Get In <span className="accent-text">Touch</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Have a project in mind or want to collaborate? Let's talk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <motion.div 
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="solid-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a href="mailto:pratapshouryasingh143@gmail.com" className="text-zinc-400 hover:text-blue-500 transition-colors">pratapshouryasingh143@gmail.com</a>
                </div>
              </div>
              
              <div className="solid-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-zinc-400">Remote / Worldwide</p>
                </div>
              </div>

              <div className="solid-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-zinc-400">+91 6267035036</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <form className="solid-card p-8 rounded-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-zinc-400 mb-2">Your Name</label>
                    <input type="text" id="name" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-400 mb-2">Your Email</label>
                    <input type="email" id="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-zinc-400 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-zinc-400 mb-2">Message</label>
                  <textarea id="message" rows="5" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-lg accent-bg font-bold text-lg transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
