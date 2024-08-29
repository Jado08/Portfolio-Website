import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import Resume from './pages/Resume';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Use the Home component */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
