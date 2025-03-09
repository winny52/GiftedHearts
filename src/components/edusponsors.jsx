import React from "react";

const EducationSponsorship = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-200 p-12">
      <div className="w-full bg-white bg-opacity-90 shadow-lg rounded-xl p-12 text-gray-900">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-blue-800">
          Education Sponsorship
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 text-center">
          Education is the key to breaking the cycle of poverty. Our sponsorship 
          program ensures that children from underprivileged backgrounds receive 
          quality education, empowering them to build a better future.
        </p>

        <div className="border-t-4 border-pink-400 w-16 mx-auto my-6"></div>

        <p className="text-lg leading-relaxed text-gray-700">
          Through financial aid for school fees, books, and uniforms, we remove 
          barriers to education. Beyond financial support, we provide mentorship 
          and guidance to help students excel academically and personally.
        </p>

       
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Every child deserves an opportunity to learn, dream, and succeed. 
          With your support, we can continue changing lives through education.
        </p>

        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-pink-600">
            Together, we can make education accessible to all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSponsorship;
