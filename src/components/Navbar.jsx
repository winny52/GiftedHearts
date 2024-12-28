import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-white text-2xl font-semibold">Gifted Hearts Foundation</Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-white">
          {/* <Link to="/" className=" text-white hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Home</Link> */}
          <Link to="/about-us" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">About Us</Link>
          <Link to="/our-story" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Our Story</Link>
          <Link to="/projects" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Projects</Link>
          <Link to="/get-involved" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Get Involved</Link>
          <Link to="/contact" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black p-4">
          <div className="space-y-4 text-white text-center">
            <Link to="/about-us" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">About Us</Link>
            <Link to="/our-story" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Our Story</Link>
            <Link to="/projects" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Our Projects</Link>
            <Link to="/get-involved" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Get Involved</Link>
            <Link to="/contact" className="hover:text-white px-4 py-2 rounded-lg transition-all duration-300">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
