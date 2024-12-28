import React from 'react';
import { useNavigate } from 'react-router-dom';

const MiniProjectsSection = () => {
  const navigate = useNavigate();

  const handleMoreProjects = () => {
    navigate('/projects'); // Adjust the route as needed
  };

  const projectDetails = [
    {
      title: "Orphanage Visits",
      description: "We visit orphanages to provide emotional support, resources, and essentials, creating a nurturing environment for children in need."
    },
    {
      title: "Home Construction for Widows",
      description: "Our initiative focuses on building safe homes for widows, ensuring they have a secure place to live with their families."
    },
    {
      title: "Education Sponsorship",
      description: "Providing scholarships and learning materials to children from low-income families, helping them access quality education."
    },
    {
      title: "Mental Health Campaigns and Counseling",
      description: "Raising awareness about mental health and offering free counseling services to individuals struggling with emotional challenges."
    },
    {
      title: "COVID-19 Relief Efforts",
      description: "During the pandemic, we distributed essential supplies to vulnerable communities and helped families navigate the crisis."
    },
    {
      title: "Spreading the Gospel",
      description: "Through community outreach, we share the message of hope and faith, offering spiritual guidance to those in need."
    },
    {
      title: "Food and Clothing Distribution",
      description: "We organize regular distribution events, offering food and clothing to those who are experiencing hardship."
    },
    {
      title: "Career Mentorship",
      description: "Our mentorship program connects professionals with youth to guide them in career development and personal growth."
    },
    {
      title: "Environmental Conservation",
      description: "Engaging local communities in sustainable practices like tree planting and waste management to protect the environment."
    },
    {
      title: "Sports Activities",
      description: "Organizing sports events that promote teamwork, health, and community spirit while providing opportunities for youth to engage in positive activities."
    },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 via-blue-100 to-pink-100 py-16 px-6 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Our Projects
      </h2>
      <p className="text-lg text-gray-700 text-center mb-10">
        A glimpse of the impactful initiatives Gifted Hearts Kenya has undertaken to uplift communities and bring positive change.
      </p>

      {/* Displaying project titles and descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-blue-700 text-center mb-4">{project.title}</h3>
            <p className="text-gray-600 text-center mb-6">{project.description}</p>
            <button
              onClick={handleMoreProjects}
              className="block mx-auto mt-4 bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleMoreProjects}
          className="bg-pink-600 text-white py-3 px-10 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out"
        >
          Get to Know More
        </button>
      </div>
    </div>
  );
};

export default MiniProjectsSection;
