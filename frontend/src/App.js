import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceApple from './components/ExperienceApple';
import SkillsApple from './components/SkillsApple';
import ProjectsApple from './components/ProjectsApple';
import CertificationsApple from './components/CertificationsApple';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ExperienceApple />
      <SkillsApple />
      <ProjectsApple />
      <CertificationsApple />
      <Contact />
    </div>
  );
}

export default App;
