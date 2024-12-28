
import React from 'react';
import MiniAboutSection from './miniAboutSection';
import MiniProjectsSection from './miniProjectsSection';
import MiniGetInvolvedSection from './miniGetInvolvedSection';
import MissionVisionValues from './MissionVisionValues';
import MiniHeroSection from './miniHeroSection';
const HomePage = () => {
  return (
    <div>
      <MiniHeroSection/>
      <MiniAboutSection />
      <MissionVisionValues/>
      <MiniProjectsSection />
      <MiniGetInvolvedSection />
    </div>
  );
};

export default HomePage;

