import React, { useState } from 'react';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gradient-to-br from-pink-50 to-blue-100 text-gray-900 py-16 px-4 sm:px-8 lg:px-16 w-full">
      <div className="w-full mx-auto">
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-12 mx-auto">
              Gifted Hearts Kenya Foundation is a beacon of hope, founded by a passionate group of young people with one shared mission: to bring love and support to the most vulnerable members of our society. Our journey is deeply rooted in the Christian principles of compassion, kindness, and service to others.
            </p>
              {/* Quote Section */}
      <blockquote className="bg-pink-100 border-l-4 border-pink-600 pl-6 py-4 mb-12">
        <p className="italic text-lg text-gray-700">
          "When we choose to love others, we create a ripple of kindness that spreads across communities, igniting hope and changing lives forever." — Founder, Emmanuel Agwanda
        </p>
      </blockquote>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <img src={img1} alt="Compassion" className="w-full h-auto object-cover rounded-lg shadow-md" />
              <img src={img2} alt="Integrity" className="w-full h-auto object-cover rounded-lg shadow-md" />
              <img src={img3} alt="Faith" className="w-full h-auto object-cover rounded-lg shadow-md" />
              <img src={img4} alt="Service" className="w-full h-auto object-cover rounded-lg shadow-md" />
              <img src={img5} alt="Community" className="w-full h-auto object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Core Values Section */}
        <div className="space-y-16 text-center">
          {/* Mission Section */}
          <section
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`p-10 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 ${
              isHovered ? 'animate-wiggle' : 'animate-fadeUp delay-100'
            }`}
          >
            <h2 className="text-4xl text-center font-bold text-blue-700 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-center text-lg leading-relaxed">
              Our mission is to be a guiding light for communities in need, spreading love, compassion, and hope where it is most needed. We believe that every person deserves dignity, respect, and an opportunity for a better tomorrow. By extending a helping hand and a listening ear, we empower individuals and families to rise above their challenges and become agents of change within their own communities. Our approach is rooted in empathy, driven by passion, and guided by the principles of humanity and kindness.
            </p>
          </section>

          {/* Vision Section */}
          <section
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`p-10 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 ${
              isHovered ? 'animate-wiggle' : 'animate-fadeUp delay-200'
            }`}
          >
            <h2 className="text-4xl text-center font-bold text-pink-700 mb-6">Our Vision</h2>
            <p className="text-gray-700 text-center text-lg leading-relaxed">
              We envision a world where love and hope flow freely, crossing borders, cultures, and generations. Our dream is to create communities where every individual feels seen, valued, and supported. By fostering a culture of kindness and shared humanity, we aspire to build a future where compassion drives action, empathy shapes policy, and love becomes the foundation for lasting change. We believe in a world where no one is left behind, and every life touched is a life transformed.
            </p>
          </section>

          {/* Core Values Section */}
          <section
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
    </section>
  );
};

export default AboutUs;
