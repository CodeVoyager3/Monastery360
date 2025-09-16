import React from "react";
import { Link } from 'react-router-dom';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.804 4.649-.69.188-1.452.23-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.028-1.455-.086 2.679 1.73 5.864 2.746 9.248 2.746 9.3 0 14.379-7.72 14.28-14.437.005-.218-.002-.436-.013-.652a10.28 10.28 0 002.533-2.62z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);

const Footer = () => {
  const exploreLinks = [
    { text: "Virtual Tours", href: "/explore" },
    { text: "Features", href: "/features" },
    { text: "About Us", href: "/about" },
    { text: "Partnership", href: "/contact" }
  ];
  const researchLinks = [
    { text: "Digital Archive", href: "/research" },
    { text: "Upload Documents", href: "/research" },
    { text: "Research Guidelines", href: "/research" },
    { text: "Collaboration", href: "/contact" }
  ];
  return (
    <footer className="bg-gradient-to-b from-[#3a2d1d] to-[#2a2116] text-gray-300 pt-16 pb-8 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo + About */}
          <div className="space-y-3 flex-1 justify-center items-center">

            <p className="text-sm leading-relaxed sticky z-10 mb-5 text-gray-400"><i>
              "Preserving Sikkim’s sacred heritage through innovative digital technology, connecting hearts and minds across the globe." ~
            </i>
            </p>
            <a href="/" className="ml-13 inline-block">
              <img src="/monastery360logo.png" alt="Monastery360 Logo" className="h-24 w-auto relative z-20" />
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-500/30 pb-2">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.text}>
                  <Link to={item.href} className="hover:text-amber-400 transition-colors">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-500/30 pb-2">Research</h3>
            <ul className="space-y-3">
              {researchLinks.map((item) => (
                <li key={item.text}>
                  <a href={item.href} className="hover:text-amber-400 transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-500/30 pb-2">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-amber-500/90 p-2 rounded-full text-white shadow-md hover:shadow-amber-500/40 hover:scale-110 transform transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for heritage preservation updates and virtual tour announcements.
            </p>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-1 bg-gradient-to-r from-amber-500 via-white to-green-500 rounded-full mb-8"></div>

        {/* Bottom Section */}
        <div className="text-sm text-center md:flex md:justify-between md:items-center">
          <p className="mb-4 md:mb-0 text-gray-400">
            © {new Date().getFullYear()} Monastery360. All rights reserved. Preserving heritage with love and technology.
          </p>
          <div className="space-x-4">
            {["Privacy Policy", "Terms of Service", "Data Security"].map((item) => (
              <a key={item} href="#" className="hover:text-amber-400 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
