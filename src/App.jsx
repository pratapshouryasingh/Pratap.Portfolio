import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-zinc-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
