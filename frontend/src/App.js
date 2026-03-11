import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceVertical from './components/ExperienceVertical';
import SkillsMarquee from './components/SkillsMarquee';
import ProjectsVertical from './components/ProjectsVertical';
import AchievementsGrid from './components/AchievementsGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ExperienceVertical />
      <SkillsMarquee />
      <ProjectsVertical />
      <AchievementsGrid />
      <Contact />
    </div>
  );
}

export default App;
