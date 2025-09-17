import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import About from './pages/About';
import Explore from './pages/Explore';
import Features from './pages/Features';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Rumtek from './pages/Tours/Rumtek';
import Enchey from "./pages/Tours/Enchey";
import Pemayangtse from './pages/Tours/Pemayangatse';
import ItineraryDetail from './pages/ItineraryDetail';
import Tourist from './pages/Dashboards/Tourist';

import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupTourist from './pages/signuptourist';

// Components
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  const PublicRoute = ({ children }) => {
    return isAuthenticated ? <Navigate to="/tourist-dashboard" replace /> : children;
  };

  return (
    <Router>
      <ScrollToTop />
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Homepage />} />

        {/* Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />

        {/* Tour Pages */}
        <Route path="/explore/rumtek-tour" element={<Rumtek />} />
        <Route path="/explore/enchey-tour" element={<Enchey />} />
        <Route path="/explore/pemayangtse-tour" element={<Pemayangtse />} />
        <Route path="/explore/my-itinerary/:id" element={<ItineraryDetail />} />

        {/* Auth Routes - wrap with PublicRoute */}
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          } 
        />
        <Route 
          path="/signuptourist" 
          element={
            <PublicRoute>
              <SignupTourist />
            </PublicRoute>
          } 
        />

        {/* Protected Route */}
        <Route 
          path="/tourist-dashboard" 
          element={
            <PrivateRoute>
              <Tourist />
            </PrivateRoute>
          } 
        />

        {/* Catch-all */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;
