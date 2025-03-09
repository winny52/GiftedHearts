import React from "react";

// Import single image
import orphanageImage from "../assets/orphanage.jpg";

const OrphanageVisits = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-r from-white to-pink-200 p-6">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={orphanageImage}
          alt="Orphanage Visit"
          className="w-full md:w-4/5 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
          Orphanage Visits
        </h1>

        <p className="text-lg leading-relaxed">
          Every child deserves love, care, and support. Our <strong>Orphanage Visits Program</strong> 
          is dedicated to providing emotional encouragement, essential resources, and a nurturing 
          environment for children in orphanages.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Beyond donations, we engage children in <strong>storytelling, games, art, and music sessions</strong>, 
          creating joyful moments that instill a sense of belonging.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Our volunteers also help with <strong>cleaning, painting, and small repairs</strong> to create a 
          healthier and more comfortable living environment.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          In addition to fun activities, we provide <strong>mental health support and career guidance</strong> 
          to help children develop resilience and hope for the future.
        </p>

        <p className="text-lg leading-relaxed mt-4 font-semibold text-center md:text-left">
          Together, we can make a difference—one child at a time.
        </p>
      </div>
    </div>
  );
};

export default OrphanageVisits;
