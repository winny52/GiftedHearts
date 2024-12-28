import React from 'react';

const MiniAboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-blue-100 to-pink-100 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 drop-shadow-lg">
          About Us
        </h2>

        {/* Paragraph Section */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 md:mb-12">
          <span className="block text-pink-600 font-semibold mb-2">
            Serving with Love and Compassion
          </span> 
          We are committed to sharing the love of Christ through service, compassion, and dedication. 
          Our projects have touched countless lives, from orphaned children to widowed families, street 
          children, and underserved communities. Our goal is to bring hope and uplift the spirits of those 
          often overlooked by society.
        </p>

        {/* Call-to-Action Button */}
        <button className="bg-pink-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:bg-pink-700 transition-transform duration-300 ease-out">
          Get to Know More About Us
        </button>
      </div>
    </div>
  );
};

export default MiniAboutSection;
