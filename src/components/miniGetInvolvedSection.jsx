import React from 'react';
import { useNavigate } from 'react-router-dom'; // Adjust based on your routing library

const GetInvolvedHero = () => {
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate('/get-involved'); // Change this to your detailed Get Involved page route
  };

  return (
    <div className="bg-gradient-to-r from-pink-100 via-blue-100 to-pink-100 py-16 px-6 lg:px-16">
      {/* Main Header */}
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8 drop-shadow-lg">
        Get Involved
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        Support our mission and help us make a lasting impact across Kenya. Choose how you'd like to contribute.
      </p>

      {/* Key Involvement Types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Volunteer */}
        <div className="p-8 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4 text-center">
            Volunteer with Us
          </h3>
          <p className="text-gray-700 text-center">
            Be part of our projects, from mentorship to environmental initiatives. Together, we can make a difference.
          </p>
        </div>

        {/* Donate */}
        <div className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4 text-center">
            Make a Donation
          </h3>
          <p className="text-gray-700 text-center">
            Help us expand our outreach and make a bigger impact across communities.
          </p>
        </div>

        {/* Support */}
        <div className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4 text-center">
            Support Our Mission
          </h3>
          <p className="text-gray-700 text-center">
            Your support will help us reach more people and bring lasting change across Kenya.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button
          onClick={handleMoreDetails}
          className="bg-pink-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          Learn More and Get Involved
        </button>
      </div>
    </div>
  );
};

export default GetInvolvedHero;
