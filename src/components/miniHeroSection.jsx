import React from 'react';
import heroImageLeft from '../assets/pinkheart.jpg'; // Import your left image
import heroImageRight from '../assets/blueheart.png'; // Import your right image

const MiniHeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Grid Background with two images */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2">
        <img 
          src={heroImageLeft} 
          alt="Left Hero"
          className="w-full h-full object-cover opacity-30" 
        />
        <img 
          src={heroImageRight} 
          alt="Right Hero"
          className="w-full h-full object-cover opacity-30" 
        />
      </div>

      {/* Overlay with gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-blue-300 to-pink-500 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center text-white">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-transparent bg-clip-text animate-zoom-in">
  Gifted Hearts Kenya Foundation
</h1>
        <p className="text-lg md:text-2xl text-blue-800 font-light italic mb-6  ">
          Touching the Untouched with Love, Spreading Hope
        </p>
        <p className="max-w-3xl text-black text-sm md:text-2xl">
          Gifted Hearts Kenya Foundation is committed to making a difference in 
          the lives of the underserved. Through acts of compassion and dedicated 
          service, we aim to bring hope and positivity to every heart we touch.
        </p>
      </div>
    </div>
  );
};

export default MiniHeroSection;

