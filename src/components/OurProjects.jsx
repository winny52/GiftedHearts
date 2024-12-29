import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurProjects = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/all-projects');
  };

  return (
    <div className="bg-white">
    <div className="bg-from-pink-100 via-blue-100 to-pink-100 py-16 px-6 lg:px-20">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        Our Projects
      </h2>
      <p className="text-lg text-white-700 text-center mb-12">
        At Gifted Hearts Kenya, we aim to uplift communities through diverse initiatives. 
        Each project represents our unwavering commitment to positive change. 
        Explore our key areas of impact below.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Orphanage Visits */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-3 hover:bg-blue-50">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Orphanage Visits</h3>
          <p className="text-gray-700 mb-4">
            We provide love, warmth, and joy to children in orphanages. Our visits bring companionship, mentorship, and a sense of belonging. We distribute essentials such as clothes, food, books, and toys. 
            By nurturing their well-being, we aim to offer these children hope, emotional support, and confidence to face life's challenges.
          </p>
          <button 
            onClick={handleCardClick} 
            className="text-sm bg-pink-100 font-semibold text-pink-700 hover:underline"
          >
            Learn More →
          </button>
        </div>

        {/* Home Construction for Widows */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-3 hover:bg-blue-50">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Home Construction for Widows</h3>
          <p className="text-gray-700 mb-4">
            We build and restore homes for widows facing housing insecurity. Our approach focuses on creating safe, comfortable, and sustainable living spaces. 
            Each home represents a fresh start, offering stability, dignity, and a renewed sense of hope for widows and their families.
          </p>
          <button 
            onClick={handleCardClick} 
            className="text-sm bg-pink-100 font-semibold text-pink-700 hover:underline"
          >
            Learn More →
          </button>
        </div>

        {/* Education Sponsorship */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-3 hover:bg-blue-50">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Education Sponsorship</h3>
          <p className="text-gray-700 mb-4">
            Our education sponsorship program provides scholarships to students from underprivileged backgrounds. 
            We aim to break the cycle of poverty by giving young learners the opportunity to access quality education, which can transform their future. 
            Beneficiaries receive school fees, learning materials, and mentorship throughout their academic journey.
          </p>
          <button 
            onClick={handleCardClick} 
            className="text-sm bg-pink-100 font-semibold text-pink-700 hover:underline"
          >
            Learn More →
          </button>
        </div>

        {/* Mental Health Campaigns */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-3 hover:bg-blue-50">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mental Health Campaigns</h3>
          <p className="text-gray-700 mb-4">
            Our mental health campaigns focus on creating awareness and reducing stigma. We host workshops, counseling sessions, and support groups to promote mental well-being. 
            Through community dialogues and partnerships, we strive to make mental health support accessible and inclusive for all.
          </p>
          <button 
            onClick={handleCardClick} 
            className="text-sm bg-pink-100 font-semibold text-pink-700 hover:underline"
          >
            Learn More →
          </button>
        </div>

        {/* COVID-19 Relief Efforts */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-3 hover:bg-blue-50">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">COVID-19 Relief Efforts</h3>
          <p className="text-gray-700 mb-4">
            During the COVID-19 pandemic, we distributed essential items like masks, hygiene kits, and food packages to vulnerable communities. 
            Our efforts focused on promoting health, safety, and resilience for those most affected by the pandemic's economic and social impact.
          </p>
          <button 
            onClick={handleCardClick} 
            className="text-sm  bg-pink-100 font-semibold text-pink-700 hover:underline"
          >
            Learn More →
          </button>
        </div>

        {/* Spreading the Gospel */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-3 hover:bg-blue-50">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Spreading the Gospel</h3>
          <p className="text-gray-700 mb-4">
            Guided by faith, we aim to share the Gospel of Jesus Christ with communities in need of spiritual support. 
            Through outreach, prayer sessions, and community service, we seek to bring light, hope, and transformation to lives through the power of faith.
          </p>
          <button 
            onClick={handleCardClick} 
            className="text-sm bg-pink-100 font-semibold text-pink-700 hover:underline"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default OurProjects;
