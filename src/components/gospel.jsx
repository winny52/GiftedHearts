import React from "react";

const SpreadingTheGospel = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-200 p-12">
      <div className="w-full bg-white bg-opacity-90 shadow-lg rounded-xl p-12 text-gray-900">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-blue-800">
          Spreading the Gospel
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 text-center">
          Our mission is to share the message of faith, love, and hope, reaching people from all 
          walks of life. Through prayer meetings, Bible studies, and community outreach, we 
          strengthen faith and bring people closer to God.
        </p>

        <div className="border-t-4 border-indigo-400 w-16 mx-auto my-6"></div>

        <p className="text-lg leading-relaxed text-gray-700">
          We believe that faith has the power to heal, restore, and bring peace. One of our most 
          inspiring moments was helping a family reconcile after years of separation. Through 
          shared prayer and counseling, they found forgiveness, and their transformation touched 
          the entire community.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Our outreach efforts go beyond words—we actively engage with communities through 
          charity, mentorship, and acts of kindness. From supporting the less fortunate to 
          mentoring young believers, we ensure that God's love is felt in tangible ways.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Whether through small acts of kindness or large evangelistic gatherings, our goal 
          remains the same: to share the gospel, bring light into lives, and inspire faith 
          in those seeking guidance.
        </p>

        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-indigo-600">
            Join us in spreading love and faith to the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpreadingTheGospel;
