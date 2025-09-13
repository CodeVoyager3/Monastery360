import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/features', text: 'Features' },
    { href: '/explore', text: 'Explore' },
    { href: '/research', text: 'Research' },
    { href: '/contact', text: 'Contact' },
  ];


  const glassEffectClasses = "bg-white-500/20 backdrop-blur-lg border-b border-white/30";

  return (
    <header className={`sticky w-screen top-0 z-50 ${glassEffectClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center relative">
            <a href="/" className="flex  items-center">
              {/* Round Logo (front) */}
              <img
                className="h-24 w-auto relative z-20"
                src="/monastery360logo.png"
                alt="Monastery360 Logo"
              />
              <img
                className="h-32 w-auto text-shadow-2xs drop-shadow-[0_0_15px_rgba(250,204,21,0.9)] relative z-10 -ml-36"
                src="/logofont.png"
                alt="Monastery360 Font Logo"
              />
            </a>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.href}
              className="text-base font-extrabold transition-colors duration-300 hover:opacity-80"
              style={{ color: link.active ? "yellow" : "#ffffff" }}
            >
              {link.text}
            </Link>
          ))}
          <div className="hidden md:block">
            <a
              href="#"
              className="inline-block text-white font-bold py-3 px-6 rounded-lg shadow-sm hover:bg-opacity-90 transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#f2aa24", color: "#4e1314" }}
            >
              Start Virtual Tour
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              style={{ color: "#4e1314" }}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${glassEffectClasses}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="block px-3 py-2 text-white rounded-md text-base font-medium"
                style={{
                  backgroundColor: link.active ? "#f2aa24" : "transparent",
                  color: link.active ? "#4e1314" : "#4e1314"
                }}
              >
                {link.text}
              </a>
            ))}
            <div className="pt-4 pb-2 px-2">
              <a
                href="#"
                className="block text-center text-white w-full font-bold py-3 px-6 rounded-lg shadow-sm hover:bg-opacity-90"
                style={{ backgroundColor: "#f2aa24", color: "#4e1314" }}
              >
                Start Virtual Tour
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
