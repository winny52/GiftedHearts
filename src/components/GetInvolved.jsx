import React from 'react';

const GetInvolved = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-pink-200 to-purple-300 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
        Get Involved
      </h1>

      {/* Grid Layout for Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Support Our Mission Section (1/4 width) */}
        <section className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 lg:col-span-1">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Support Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your contributions make our work possible. Whether through financial donations, in-kind contributions, or volunteering your time, every bit of support goes a long way in helping us make a difference.
          </p>
          
          {/* Horizontal buttons */}
          <div className="flex space-x-4 w-full justify-center">
            <a 
              href="https://www.paypal.com/donate?hosted_button_id=XXXX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block bg-blue-500 text-white py-3 px-6 rounded-md transition-colors"
            >
              Donate Now
            </a>
            <a 
              href="#volunteer" 
              className="mt-4 inline-block bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600 transition-colors"
            >
              Volunteer
            </a>
          </div>
        </section>

        {/* Volunteer with Us Section (3/4 width) */}
        <section className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 lg:col-span-3">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Volunteer with Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Join our passionate team of volunteers who are dedicated to making a difference. As a volunteer, you’ll have the chance to contribute to our various projects, from mentorship to environmental initiatives. Together, we can make an impact that lasts a lifetime.
          </p>
          
          {/* Responsive Grid for Form and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div>
              <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
                <li>Mentoring youth and students</li>
                <li>Participating in community outreach programs</li>
                <li>Helping with fundraising events and campaigns</li>
                <li>Supporting our environmental conservation efforts</li>
              </ul>
            </div>
            
            <div>
              <form className="w-full space-y-4">
                <div>
                  <label className="block text-lg text-gray-700" htmlFor="volunteerName">Full Name</label>
                  <input 
                    type="text" 
                    id="volunteerName" 
                    name="volunteerName" 
                    placeholder="Enter your full name" 
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-700" htmlFor="volunteerEmail">Email Address</label>
                  <input 
                    type="email" 
                    id="volunteerEmail" 
                    name="volunteerEmail" 
                    placeholder="Enter your email" 
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-700" htmlFor="volunteerMessage">Why do you want to volunteer?</label>
                  <textarea 
                    id="volunteerMessage" 
                    name="volunteerMessage" 
                    rows="4" 
                    placeholder="Tell us why you want to join our volunteer team" 
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GetInvolved;
