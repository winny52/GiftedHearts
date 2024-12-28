import React from 'react';

const MiniContactSection = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-blue-500 mb-4">Contact Us</h2>
      <p className="text-gray-700">
        Reach out to us at{' '}
        <a href="mailto:giftedheartsksm@gmail.com" className="text-blue-600 underline">
          giftedheartsksm@gmail.com
        </a>{' '}
        or call us at <strong>+254 759 644 018</strong>.
      </p>
    </div>
  );
};

export default MiniContactSection;
