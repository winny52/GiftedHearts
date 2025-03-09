import React from "react";

// Import image from assets
import covidRelief from '../assets/2022-image.jpg';

const CovidReliefEfforts = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-100 to-pink-200 p-8">
      {/* Image Section - Left */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={covidRelief} 
          alt="COVID-19 Relief Efforts" 
          className="rounded-xl shadow-xl w-4/5 md:w-3/4 h-auto"
        />
      </div>

      {/* Text Section - Right */}
      <div className="w-full md:w-1/2 text-gray-900 p-6">
        <h1 className="text-4xl font-extrabold mb-6 text-center md:text-left">
          COVID-19 Relief Efforts
        </h1>

        <p className="text-lg leading-relaxed">
          The COVID-19 pandemic brought unprecedented challenges, leaving thousands of families struggling 
          to access food, medical supplies, and hygiene essentials. In response, we launched a large-scale 
          relief effort to support the most vulnerable communities.
        </p>

        <p className="text-lg mt-4 leading-relaxed">
          Our teams worked tirelessly to distribute food packages, face masks, sanitizers, and medical supplies 
          to over <span className="font-semibold">100 households</span> across Nairobi, Kisumu, and Homabay.  
          The initiative provided immediate relief and helped communities stay safe during uncertain times.
        </p>

        

        <p className="text-lg mt-4 leading-relaxed">
          Our mask distribution program was another critical initiative. With many people unable to afford masks, 
          we ensured that thousands received free, reusable face masks, allowing them to protect themselves and 
          their families while carrying out daily activities.
        </p>

        <p className="text-lg mt-4 font-semibold text-center md:text-left">
          Even as the world recovers, our commitment to supporting communities in need remains stronger than ever.
        </p>
      </div>
    </div>
  );
};

export default CovidReliefEfforts;
