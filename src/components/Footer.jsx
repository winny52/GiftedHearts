import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black p-6 items-center">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between text-white">
        {/* Footer Links */}
        <div className="space-x-8 flex flex-wrap">
          <Link to="/about-us" className="hover:bg-pink-400 px-4 py-2 rounded-lg transition-all duration-300">About Us</Link>
          <Link to="/our-story" className="hover:bg-pink-400 px-4 py-2 rounded-lg transition-all duration-300">Our Story</Link>
          <Link to="/projects" className="hover:bg-pink-400 px-4 py-2 rounded-lg transition-all duration-300">Projects</Link>
          <Link to="/get-involved" className="hover:bg-pink-400 px-4 py-2 rounded-lg transition-all duration-300">Get Involved</Link>
          <Link to="/contact" className="hover:bg-pink-400 px-4 py-2 rounded-lg transition-all duration-300">Contact</Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Gifted Hearts Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
