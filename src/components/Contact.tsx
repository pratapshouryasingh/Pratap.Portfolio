import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bw1pz9m',     // Replace with your actual EmailJS service ID
        'template_gie0vx5',    // Replace with your template ID
        formRef.current,
        'Vqm56VYj56KKN6QEW'      // Replace with your public key
      )
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error('Failed to send message. Please try again later.');
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'pratapshouryasingh143@gmail.com',
      link: 'mailto:pratapshouryasingh143@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 6267035036',
      link: 'tel:+91 6267035036'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Bhilai, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/pratapshouryasingh',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pratap-shourya-singh-b7732828a',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            <span className="gradient-text">
              Let's Work Together
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto animate-slide-in-up">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 gradient-text">Get In Touch</h3>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                I'm always open to discussing new opportunities, innovative projects, 
                and interesting challenges. Whether you have a question about my work 
                or want to collaborate, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center space-x-6 p-6 glass rounded-2xl border border-gray-700/30 hover:border-gray-600/50 hover-lift transition-all duration-500 group animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{info.title}</h4>
                    <p className="text-gray-400 text-lg">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Connect with me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass rounded-full transition-all duration-500 hover:scale-125 animate-pulse-glow ${social.color} stagger-${index + 1}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-10 border border-gray-700/30 animate-slide-in-right hover-lift">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-gray-300 mb-3">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 glass border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white text-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-gray-300 mb-3">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 glass border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-bold text-gray-300 mb-3">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 glass border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white text-lg"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold text-gray-300 mb-3">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-6 py-4 glass border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white resize-none text-lg"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <Send size={24} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-center" />
    </section>
  );
};

export default Contact;
