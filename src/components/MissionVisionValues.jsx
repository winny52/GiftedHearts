import React, { useState } from 'react';

const MissionVisionValues = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle Mouse Movement
  const handleMouseMove = () => setIsHovered(true);

  return (
    <div 
      className="bg-gradient-to-r from-pink-100 via-blue-100 to-pink-100 py-16 px-8 md:px-20 lg:px-28"
      onMouseMove={handleMouseMove}
    >
      {/* Main Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-16 drop-shadow-lg">
        Who We Are
      </h1>

      {/* Single Column Layout */}
      <div className="grid grid-cols-1 gap-12">
        
        {/* Mission Section */}
        <section 
          className={`p-10 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 ${
            isHovered ? 'animate-wiggle' : 'animate-fadeUp delay-100'
          }`}
        >
          <h2 className="text-4xl text-center font-bold text-blue-700 mb-6"> Our Mission</h2>
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            Our mission is to be a guiding light for communities in need, 
            spreading love, compassion, and hope where it is most needed.  
            We believe that every person deserves dignity, respect, and an opportunity for a better tomorrow.  
            By extending a helping hand and a listening ear, we empower individuals and families 
            to rise above their challenges and become agents of change within their own communities.  
            Our approach is rooted in empathy, driven by passion, and guided by the principles of humanity and kindness.
          </p>
        </section>

        {/* Vision Section */}
        <section 
          className={`p-10 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 ${
            isHovered ? 'animate-wiggle' : 'animate-fadeUp delay-200'
          }`}
        >
          <h2 className="text-4xl text-center font-bold text-pink-700 mb-6"> Our Vision</h2>
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            We envision a world where love and hope flow freely, crossing borders, cultures, and generations.  
            Our dream is to create communities where every individual feels seen, valued, and supported.  
            By fostering a culture of kindness and shared humanity, we aspire to build a future where compassion drives action,  
            empathy shapes policy, and love becomes the foundation for lasting change.  
            We believe in a world where no one is left behind, and every life touched is a life transformed.
          </p>
        </section>

        {/* Core Values Section */}
        <section 
          className={`p-10 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 ${
            isHovered ? 'animate-wiggle' : 'animate-fadeUp delay-300'
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-6"> Our Core Values</h2>
          <ul className="list-disc pl-8 space-y-6 text-gray-700 text-lg leading-relaxed">
            <li>
              <strong>Compassion</strong> – We lead with empathy, always seeking to understand the struggles of others before taking action.
            </li>
            <li>
              <strong>Integrity</strong> – Honesty and transparency form the backbone of every action we take, earning the trust of those we serve.
            </li>
            <li>
              <strong>Faith</strong> – Our work is deeply rooted in the belief that faith moves mountains, and with faith, we can achieve the impossible.
            </li>
            <li>
              <strong>Service</strong> – We put service above self, going beyond the call of duty to uplift communities and change lives for the better.
            </li>
            <li>
              <strong>Community</strong> – We believe in the power of connection and unity, knowing that together, we are stronger than we are alone.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default MissionVisionValues;
