// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import '../styles/Signupt.css'; // ✅ CSS file
import backgroundImage from '../scenery.png'; // ✅ background image



function SignupTourist() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, affiliation, role, field } = signupInfo;
    if (!name || !email || !password || !affiliation || !role || !field) {
      return handleError('All fields are required');
    }
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setIsSigningUp(false);
        setTimeout(() => navigate('/login'), 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "Something went wrong";
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError("Signup failed. Please try again.");
      console.error(err);
    }
  };
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
    affiliation: '',
    role: '',
    field: ''
  });
  const [isSigningUp, setIsSigningUp] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="signup-root">
      <div className="signup-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {isSigningUp && <div className="signup-blur-overlay" />}
        <div className="signup-container">
          <h1>Signup as a researcher</h1>
          <form onSubmit={handleSignup}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                autoFocus
                placeholder="Enter your name..."
                value={signupInfo.name}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={signupInfo.email}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter your password..."
                value={signupInfo.password}
              />
            </div>
            <div>
              <label htmlFor="affiliation">Affiliation</label>
              <input
                onChange={handleChange}
                type="text"
                name="affiliation"
                placeholder="Enter your affiliation..."
                value={signupInfo.affiliation}
              />
            </div>
            <div>
              <label htmlFor="role">Role</label>
              <input
                onChange={handleChange}
                type="text"
                name="role"
                placeholder="Enter your role..."
                value={signupInfo.role}
              />
            </div>
            <div>
              <label htmlFor="field">Field</label>
              <input
                onChange={handleChange}
                type="text"
                name="field"
                placeholder="Enter your field..."
                value={signupInfo.field}
              />
            </div>
            <button type="submit">Signup</button>
            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default SignupTourist;
