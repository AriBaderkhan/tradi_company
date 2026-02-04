import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ClinicSystem from './pages/projects/ClinicSystem';
import RetailSystem from './pages/projects/RetailSystem';
import ScrollToTop from './components/utils/ScrollToTop';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-background text-text selection:bg-primary/30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/clinic-system" element={<ClinicSystem />} />
          <Route path="/projects/retail-system" element={<RetailSystem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
