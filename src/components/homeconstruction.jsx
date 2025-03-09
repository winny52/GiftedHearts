import React from "react";

// Import image from assets
import homeConstruction from '../assets/2021-image.jpg';

const HomeConstruction = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-r from-white to-pink-200 p-6">
      {/* Image Section - Left */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={homeConstruction} 
          alt="Home Construction for Widows" 
          className="rounded-lg shadow-lg w-3/4 md:w-4/5 h-auto"
        />
      </div>

      {/* Text Section - Right */}
      <div className="w-full md:w-1/2 text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
          Home Construction for Widows
        </h1>

        <p className="text-lg">
          A home is more than just four walls; it's a place of security, dignity, and hope. 
          Unfortunately, many widows in our communities struggle to find a safe shelter, 
          often living in deteriorating conditions that put their families at risk.
        </p>

        <p className="text-lg mt-4">
          Our Home Construction Initiative is dedicated to building secure homes for widows 
          who lack proper housing. These homes provide them with a safe environment to raise their children 
          and rebuild their lives with dignity.
        </p>

        <p className="text-lg mt-4">
          One of our most touching stories is that of Mama Belinda, a widow who had been living in a crumbling 
          mud house with her three children. When we first met her, she expressed deep worries about their safety, 
          especially during the rainy season.
        </p>

        <p className="text-lg mt-4">
          Thanks to the generosity of our supporters and volunteers, we built her a shelter, 
          complete with proper roofing and essential amenities. Today, Mama Belinda and her children live without 
          fear of the next storm, and her smile serves as a powerful reminder of why we do what we do.
        </p>

        <p className="text-lg mt-4">
          This is just one of many success stories. Through our ongoing efforts, we aim to reach more widows in need,
          ensuring that every woman, no matter her circumstances, has a safe place to call home.
        </p>

        <p className="text-lg mt-6 font-semibold text-center md:text-left">
          Join us in transforming lives—one home at a time.
        </p>
      </div>
    </div>
  );
};

export default HomeConstruction;
