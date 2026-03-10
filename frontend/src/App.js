import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceCarousel from './components/ExperienceCarousel';
import SkillsMarquee from './components/SkillsMarquee';
import ProjectsCarousel from './components/ProjectsCarousel';
import AchievementsGrid from './components/AchievementsGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ExperienceCarousel />
      <SkillsMarquee />
      <ProjectsCarousel />
      <AchievementsGrid />
      <Contact />
    </div>
  );
}

export default App;
