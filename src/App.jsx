import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Explore from './pages/Explore';
import Features from './pages/Features';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Rumtek from './pages/Tours/Rumtek';
import Enchey from "./pages/Tours/Enchey";
import Pemayangtse from './pages/Tours/Pemayangatse';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';

// --- Main App Component ---

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore/rumtek-tour" element={<Rumtek />} />
        <Route path="/explore/enchey-tour" element={<Enchey />} />
        <Route path="/explore/pemayangtse-tour" element={<Pemayangtse />} />
      </Routes>
      <ChatBot />
    </Router>
  );
};

export default App;
