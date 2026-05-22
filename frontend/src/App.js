import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroHero from './components/IntroHero';
import Hero from './components/Hero';
import ExperienceScroll from './components/ExperienceScroll';
import SkillsMarquee from './components/SkillsMarquee';
import ProjectsScroll from './components/ProjectsScroll';
import AchievementsGrid from './components/AchievementsGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroHero />
      <Hero />
      <ExperienceScroll />
      <SkillsMarquee />
      <ProjectsScroll />
      <AchievementsGrid />
      <Contact />
    </div>
  );
}

export default App;
