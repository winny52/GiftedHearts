import React from "react";

// Import image from assets
import mentalHealth1 from "../assets/mentalhealth1.jpg";

const MentalHealthCampaigns = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-r from-white to-pink-200 p-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={mentalHealth1} alt="Counseling Session" className="rounded-lg shadow-lg w-3/4 md:w-4/5 h-auto"/>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
          Mental Health Campaigns & Counseling
        </h1>

        <p className="text-lg">
          Mental health is just as important as physical health. Our mission is to break the stigma, 
          provide professional counseling, and create safe spaces for people to express their emotions 
          and heal.
        </p>

        <p className="text-lg mt-4">
          We organize <strong>mental health awareness campaigns</strong> in schools, workplaces, and communities, 
          offering free therapy sessions, workshops, and group discussions. Through these initiatives, 
          individuals struggling with anxiety, depression, and trauma find the support they need.
        </p>

        <p className="text-lg mt-4">
          In a recent school campaign, several students battling depression received <strong>life-changing counseling</strong>. 
          Mary, one of them, shared how she rediscovered her confidence and a sense of purpose 
          after attending our therapy sessions.
        </p>

        <p className="text-lg mt-4">
          Our certified counselors also help people <strong>cope with stress, grief, and personal challenges</strong>, 
          ensuring mental wellness is prioritized in every aspect of life. We encourage <strong>open conversations</strong> 
          about mental health to make seeking help normal and accessible.
        </p>

        <p className="text-lg mt-6 font-semibold text-center md:text-left">
          Join us in making mental health a priority—one conversation at a time.
        </p>
      </div>
    </div>
  );
};

export default MentalHealthCampaigns;
