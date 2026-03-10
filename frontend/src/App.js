import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceModern from './components/ExperienceModern';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ExperienceModern />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
