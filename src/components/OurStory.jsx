import React from 'react';

// Sample images
import ghlogo from '../assets/logo2.jpg';
import image2018 from '../assets/image-2019.jpg';
import image2019 from '../assets/image-2019.jpg';
import image2020 from '../assets/2020-image.jpg';
import image2021 from '../assets/2021-image.jpg';
import image2022 from '../assets/2022-image.jpg';
import image2023 from '../assets/2022-image.jpg';
import image2024 from '../assets/2022-image.jpg'; // Add image for 2024 if available

const OurStory = () => (
  <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-white">
  <section className="bg-gradient-to-r from-lightBlue-100 via-pink-100 to-white py-16 px-4 md:px-8">
    <div className="max-w-full mx-auto">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-pink-600 mb-8">
        Our Story
      </h2>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-12 space-y-6 md:space-y-0">
        {/* Image */}
        <div className="md:w-1/3 transition-transform transform hover:scale-105">
          <img
            src={ghlogo}
            alt="Gifted Hearts Kenya Foundation"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 space-y-6 text-lg md:text-xl text-gray-800 transition-transform transform hover:scale-105">
          <p className="leading-relaxed">
            What started as an idea among a group of four high school graduates has blossomed into an organization that’s touching lives across Kenya. Gifted Hearts Kenya Foundation was born from a shared desire to make a difference, born out of youthful passion, a deep faith, and an unwavering belief in the power of love and kindness.
          </p>

          <p className="leading-relaxed">
            Our journey began in December 2018, when Emmanuel Agwanda, Brigid Aroko, Steve Bradley, and Rickens Walter came together to form a charitable group. Initially, the goal was simple: to give back to the community and stay active during the time before university. But as the group’s compassion and vision grew, so did the scope of their mission. What was once a small initiative evolved into a dynamic force for good.
          </p>
        </div>
      </div>

      {/* Timeline Section with Alternating Images */}
      <div className="timeline mb-12 space-y-12">
        <h3 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-6">Our Journey Through Time:</h3>
        <ul className="space-y-12 text-gray-800">
          <li className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
           {/* Image for 2018 */}
<div className="md:w-1/3 transition-transform transform hover:scale-105 flex justify-center items-center">
  <div className="relative w-108 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
    <img
      src={image2018}
      alt="2018 Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>

            {/* Text Content for 2018 */}
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl transition-transform transform hover:scale-105">
              <div className="flex items-start">
                <strong className="text-pink-600 mr-2 text-xl md:text-2xl">2018:</strong>
                Gifted Hearts Kenya Foundation was officially founded on December 5, 2018. The goal was to spread kindness and serve the most vulnerable in our communities.
              </div>
              <p className="leading-relaxed">
                In 2018, we launched our first community outreach programs, providing food, clothes, and personal items to orphanages in various regions of Kenya. We began to build strong relationships with local communities and leaders, setting the foundation for future projects.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row-reverse items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Image for 2019 */}
            <div className="relative w-108 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
              <img
                src={image2019}
                alt="2019 Image"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Text Content for 2019 */}
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl transition-transform transform hover:scale-105">
              <div className="flex items-start">
                <strong className="text-pink-600 mr-2 text-xl md:text-2xl">2019:</strong>
                The first major project: Orphanage Visits. Hundreds of children across Kenya were visited, and the team distributed food, clothes, and personal items.
              </div>
              <p className="leading-relaxed">
                In 2019, we organized large-scale visits to orphanages and children's homes, with the goal of bringing smiles and support to the children who needed it the most. This marked the beginning of our commitment to the most vulnerable members of society.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Image for 2020 */}
            <div className="relative w-108 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
              <img
                src={image2020}
                alt="2020 Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content for 2020 */}
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl transition-transform transform hover:scale-105">
              <div className="flex items-start">
                <strong className="text-pink-600 mr-2 text-xl md:text-2xl">2020:</strong>
                During the COVID-19 pandemic, Gifted Hearts Kenya responded by distributing masks, sanitizers, and hygiene kits to protect vulnerable communities.
              </div>
              <p className="leading-relaxed">
                The COVID-19 pandemic presented new challenges, but we rose to the occasion. Our team quickly adapted by distributing hygiene products and sanitizers to orphanages, hospitals, and communities in need. This response became a pivotal moment in the organization’s history, showing our ability to mobilize and assist even in crisis.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row-reverse items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Image for 2021 */}
            <div className="relative w-108 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
              <img
                src={image2021}
                alt="2021 Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content for 2021 */}
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl transition-transform transform hover:scale-105">
              <div className="flex items-start">
                <strong className="text-pink-600 mr-2 text-xl md:text-2xl">2021:</strong>
                The Home Construction for Widows project began, providing safe housing for impoverished families.
              </div>
              <p className="leading-relaxed">
                In 2021, we launched a new initiative to build homes for widows and their children who were living in unsafe conditions. The project quickly gained traction and became one of our most impactful efforts, helping to provide safety, stability, and dignity to families.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Image for 2022 */}
            <div className="relative w-108 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
              <img
                src={image2022}
                alt="2022 Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content for 2022 */}
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl transition-transform transform hover:scale-105">
              <div className="flex items-start">
                <strong className="text-pink-600 mr-2 text-xl md:text-2xl">2022:</strong>
                Expansion into career mentorship programs, helping young people pursue education and employment opportunities.
              </div>
              <p className="leading-relaxed">
                As we grew, we expanded our focus to include education and career mentorship for young people. Our goal was to equip youth with the tools and skills they need to succeed in life, whether through formal education or alternative career paths.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row-reverse items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Image for 2023 */}
            <div className="relative w-108 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
              <img
                src={image2023}
                alt="2023 Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content for 2023 */}
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl transition-transform transform hover:scale-105">
              <div className="flex items-start">
                <strong className="text-pink-600 mr-2 text-xl md:text-2xl">2023:</strong>
                Today, Gifted Hearts Kenya has expanded its services across the country, creating an impact that touches thousands of lives every year.
              </div>
              <p className="leading-relaxed">
                By 2023, Gifted Hearts Kenya Foundation had expanded its reach and impact, helping more people than ever before. From orphans and widows to youth in need of guidance, our programs are now serving communities across the nation.
              </p>
            </div>
          </li>

          {/* Added 2024 Section */}
          <li className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Image for 2024 */}
            <div className="relative w-108 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
              <img
                src={image2024}
                alt="2024 Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content for 2024 */}
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl transition-transform transform hover:scale-105">
              <div className="flex items-start">
                <strong className="text-pink-600 mr-2 text-xl md:text-2xl">2024:</strong>
                In 2024, Gifted Hearts Kenya is set to expand into new regions and launch innovative programs focusing on technology education and environmental sustainability.
              </div>
              <p className="leading-relaxed">
                Looking ahead, we are excited to roll out new initiatives aimed at empowering young people with technological skills, as well as addressing pressing environmental challenges. The future holds incredible opportunities for growth and impact, and we’re ready to lead the way.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  </div>
);

export default OurStory;
