import React from 'react';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white w-full p-8">
      <h1 className="text-4xl font-semibold text-center text-pink-600 mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <section className="space-y-6 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl  text-center font-bold text-blue-600">Gifted Hearts Kenya Foundation</h2>
          <p className="mt-4 text-2xl  text-center text-gray-700">
            We would love to hear from you! Whether you're looking to get involved, donate, or have any inquiries, feel free to reach out.
          </p>
          <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-700 flex items-center">
              <span className="mr-2">📧</span> <strong>Email:</strong> giftedheartsksm@gmail.com
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              <span className="mr-2">📞</span> <strong>Phone:</strong> +254759644018
            </p>
          </div>

          {/* Follow Us Section */}
          <section>
            <h2 className="text-2xl font-bold t text-center text-blue-600">Follow Us</h2>
            <ul className="mt-4 space-y-3 text-lg text-gray-700">
              <li className="flex items-center">
                <FaInstagram className="text-2xl text-pink-600 mr-3" />
                Instagram: <a href="https://www.instagram.com/giftedheartskenya" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"> @giftedheartskenya</a>
              </li>
              <li className="flex items-center">
                <FaTiktok className="text-2xl text-pink-600 mr-3" />
                TikTok: <a href="https://www.tiktok.com/@gifted.hearts.ken" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"> @gifted.hearts.ken</a>
              </li>
              <li className="flex items-center">
                <FaFacebook className="text-2xl text-blue-600 mr-3" />
                Facebook: <a href="https://www.facebook.com/GiftedHearts" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"> Gifted Hearts</a>
              </li>
            </ul>
          </section>
        </section>

        {/* Right Column - Contact Form */}
        <section className="space-y-6 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl text-center font-bold text-blue-600">Get In Touch</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-lg text-gray-700" htmlFor="name"></label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name" 
                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700" htmlFor="email"></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700" htmlFor="message"></label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Write your message here" 
                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full p-4 mt-4 bg-blue-500 text-white rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
