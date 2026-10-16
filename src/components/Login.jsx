import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import useProjectStore from '../store/useProjectStore';

const Login = () => {
  const login = useProjectStore(state => state.login);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const success = await login(credentials.username, credentials.password);
      if (!success) {
        setError('Invalid username or password.');
      }
    } catch {
      setError('An error occurred during authentication.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <motion.div 
        className="solid-card p-8 rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
        
        <div className="flex justify-center mb-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
            <Lock size={32} />
          </div>
        </div>
        
        <h2 className="text-3xl font-black text-center text-white mb-2 relative z-10">Admin Access</h2>
        <p className="text-center text-zinc-400 mb-8 relative z-10">Please sign in to manage projects.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block text-sm font-bold text-zinc-400 mb-2">Username</label>
            <input 
              type="text" 
              name="username" 
              value={credentials.username} 
              onChange={handleChange} 
              required 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" 
              placeholder="Enter username" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-400 mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" 
              placeholder="Enter password" 
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
          
          <button type="submit" className="w-full py-4 rounded-lg accent-bg font-bold text-white transition-all shadow-lg hover:shadow-blue-500/25">
            Authenticate
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
