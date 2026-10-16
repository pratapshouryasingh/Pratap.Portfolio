import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const API_BASE = import.meta.env.VITE_API_URL || '';

export const defaultProjects = [
  {
    id: '1',
    title: 'AI Image Generator',
    description: 'A full-stack application leveraging OpenAI DALL-E to generate custom images. Built with MERN stack and styled with Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
    github: '#',
    demo: '#'
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    github: '#',
    demo: '#'
  },
  {
    id: '3',
    title: 'Smart Banking App',
    description: 'A secure financial application for tracking expenses, transferring funds, and generating financial reports using Python data analysis.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    github: '#',
    demo: '#'
  }
];

export const defaultExperiences = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    organization: 'Freelance',
    type: 'Freelance',
    period: '2025 - Present',
    location: 'Remote',
    description: 'Built responsive web applications, admin dashboards, and AI-integrated product features for clients.',
    highlights: ['React', 'Node.js', 'Tailwind', 'AI Integration'],
    link: '#'
  },
  {
    id: 'exp-2',
    role: 'MERN Stack Developer',
    organization: 'Portfolio Projects',
    type: 'Project Work',
    period: '2024 - 2025',
    location: 'Remote',
    description: 'Designed and shipped full-stack applications with database-backed APIs, clean UI systems, and deployment-ready architecture.',
    highlights: ['MongoDB', 'Express', 'React', 'Deployment'],
    link: '#'
  }
];

export const defaultSkills = [
  { id: 'skill-1', name: 'React', icon: 'Code', color: 'text-cyan-400', orbit: 0 },
  { id: 'skill-2', name: 'Tailwind', icon: 'Zap', color: 'text-cyan-300', orbit: 0 },
  { id: 'skill-3', name: 'Next.js', icon: 'Layers', color: 'text-white', orbit: 0 },
  { id: 'skill-4', name: 'Node.js', icon: 'Database', color: 'text-green-500', orbit: 1 },
  { id: 'skill-5', name: 'Express', icon: 'Globe', color: 'text-zinc-300', orbit: 1 },
  { id: 'skill-6', name: 'MongoDB', icon: 'Database', color: 'text-green-600', orbit: 1 },
  { id: 'skill-7', name: 'PostgreSQL', icon: 'Database', color: 'text-blue-400', orbit: 1 },
  { id: 'skill-8', name: 'Python', icon: 'Code', color: 'text-yellow-400', orbit: 2 },
  { id: 'skill-9', name: 'OpenAI', icon: 'Brain', color: 'text-emerald-400', orbit: 2 },
  { id: 'skill-10', name: 'LangChain', icon: 'Globe', color: 'text-blue-500', orbit: 2 },
  { id: 'skill-11', name: 'Docker', icon: 'Layers', color: 'text-blue-600', orbit: 2 },
  { id: 'skill-12', name: 'Vercel', icon: 'Zap', color: 'text-white', orbit: 2 },
];

export const defaultHomeContent = {
  badge: 'MERN Stack & Python Developer',
  heading: 'Building Digital',
  accentHeading: 'Masterpieces.',
  description: 'I craft robust, scalable web applications and AI-integrated solutions with clean code and minimalist design.',
  primaryButtonText: 'View My Work',
  secondaryButtonText: "Let's Talk",
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  email: 'contact@example.com',
  resumeUrl: '/resume.pdf',
};

const useProjectStore = create(
  persist(
    (set, get) => ({
      projects: defaultProjects,
      experiences: defaultExperiences,
      skills: defaultSkills,
      homeContent: defaultHomeContent,
      resumeFile: null,
      resumeError: '',
      isBackendConnected: false,
      isLoading: false,
      isAuthenticated: false,

      // Initialize and sync with backend
      fetchPortfolio: async () => {
        try {
          set({ isLoading: true });
          const res = await fetch(`${API_BASE}/api/portfolio`);
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const result = await res.json();
          if (result.success && result.data) {
            set({
              projects: result.data.projects || defaultProjects,
              experiences: result.data.experiences || defaultExperiences,
              skills: result.data.skills || defaultSkills,
              homeContent: { ...defaultHomeContent, ...result.data.homeContent },
              resumeFile: result.data.resumeFile || null,
              isBackendConnected: true,
              isLoading: false
            });
            return result.data;
          }
        } catch (error) {
          console.warn('Backend not reachable, operating with local state:', error.message);
          set({ isBackendConnected: false, isLoading: false });
        }
      },

      login: async (username, password) => {
        try {
          const res = await fetch(`${API_BASE}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
          });
          const data = await res.json();
          if (res.ok && data.success) {
            set({ isAuthenticated: true });
            return true;
          }
        } catch (error) {
          console.warn('Backend auth request failed, trying local check:', error);
        }

        // Local fallback check
        if (username === 'admin' && password === 'password123') {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => set({ isAuthenticated: false }),

      addProject: async (project) => {
        const tempId = Date.now().toString();
        const newProject = { ...project, id: tempId };

        // Optimistic UI update
        set((state) => ({
          projects: [newProject, ...state.projects]
        }));

        try {
          const res = await fetch(`${API_BASE}/api/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
          });
          if (res.ok) {
            const data = await res.json();
            if (data.data?.id) {
              set((state) => ({
                projects: state.projects.map(p => p.id === tempId ? data.data : p)
              }));
            }
          }
        } catch (error) {
          console.error('Failed to add project to backend:', error);
        }
      },

      deleteProject: async (id) => {
        // Optimistic update
        set((state) => ({
          projects: state.projects.filter(p => p.id !== id)
        }));

        try {
          await fetch(`${API_BASE}/api/projects/${id}`, {
            method: 'DELETE'
          });
        } catch (error) {
          console.error('Failed to delete project from backend:', error);
        }
      },

      addExperience: async (experience) => {
        const tempId = Date.now().toString();
        const newExp = { ...experience, id: tempId };

        // Optimistic update
        set((state) => ({
          experiences: [newExp, ...state.experiences]
        }));

        try {
          const res = await fetch(`${API_BASE}/api/experiences`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(experience)
          });
          if (res.ok) {
            const data = await res.json();
            if (data.data?.id) {
              set((state) => ({
                experiences: state.experiences.map(e => e.id === tempId ? data.data : e)
              }));
            }
          }
        } catch (error) {
          console.error('Failed to add experience to backend:', error);
        }
      },

      deleteExperience: async (id) => {
        set((state) => ({
          experiences: state.experiences.filter(e => e.id !== id)
        }));

        try {
          await fetch(`${API_BASE}/api/experiences/${id}`, {
            method: 'DELETE'
          });
        } catch (error) {
          console.error('Failed to delete experience from backend:', error);
        }
      },

      addSkill: async (skill) => {
        const tempId = Date.now().toString();
        const newSkill = { ...skill, id: tempId };

        set((state) => ({
          skills: [...state.skills, newSkill]
        }));

        try {
          const res = await fetch(`${API_BASE}/api/skills`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(skill)
          });
          if (res.ok) {
            const data = await res.json();
            if (data.data?.id) {
              set((state) => ({
                skills: state.skills.map(s => s.id === tempId ? data.data : s)
              }));
            }
          }
        } catch (error) {
          console.error('Failed to add skill to backend:', error);
        }
      },

      deleteSkill: async (id) => {
        set((state) => ({
          skills: state.skills.filter(s => s.id !== id)
        }));

        try {
          await fetch(`${API_BASE}/api/skills/${id}`, {
            method: 'DELETE'
          });
        } catch (error) {
          console.error('Failed to delete skill from backend:', error);
        }
      },

      updateHomeContent: async (homeContent) => {
        set((state) => ({
          homeContent: { ...state.homeContent, ...homeContent }
        }));

        try {
          const res = await fetch(`${API_BASE}/api/home`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(homeContent)
          });
          if (res.ok) {
            const data = await res.json();
            if (data.data) {
              set({ homeContent: data.data });
            }
          }
        } catch (error) {
          console.error('Failed to update home content on backend:', error);
        }
      },

      uploadResume: async (resumeInput) => {
        try {
          // Check if resumeInput is FormData or has dataUrl/file
          if (resumeInput instanceof FormData) {
            const res = await fetch(`${API_BASE}/api/resume/upload`, {
              method: 'POST',
              body: resumeInput
            });
            const data = await res.json();
            if (res.ok && data.success) {
              set({ resumeFile: data.data, resumeError: '' });
              return data.data;
            }
            throw new Error(data.message || 'Upload failed');
          }

          // If passed as an object { name, size, dataUrl }
          const res = await fetch(`${API_BASE}/api/resume`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(resumeInput)
          });
          const data = await res.json();
          if (res.ok && data.success) {
            set({ resumeFile: data.data, resumeError: '' });
            return data.data;
          }

          // Fallback optimistic storage
          set({ resumeFile: resumeInput, resumeError: '' });
          return resumeInput;
        } catch (error) {
          console.error('Failed to upload resume to backend:', error);
          set({ resumeFile: resumeInput, resumeError: error.message });
          throw error;
        }
      },

      deleteResume: async () => {
        set({ resumeFile: null, resumeError: '' });
        try {
          await fetch(`${API_BASE}/api/resume`, {
            method: 'DELETE'
          });
        } catch (error) {
          console.error('Failed to delete resume from backend:', error);
        }
      },
    }),
    {
      name: 'portfolio-projects-storage',
      storage: createJSONStorage(() => localStorage),
      version: 3,
      partialize: (state) => ({
        projects: state.projects,
        experiences: state.experiences,
        skills: state.skills,
        homeContent: state.homeContent,
        resumeFile: state.resumeFile,
      }),
      onRehydrateStorage: () => (state) => {
        state?.fetchPortfolio();
      },
    }
  )
);

// Immediately initiate backend sync on import
if (typeof window !== 'undefined') {
  useProjectStore.getState().fetchPortfolio();
}

export default useProjectStore;
