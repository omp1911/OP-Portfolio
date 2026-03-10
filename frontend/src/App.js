import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="App relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
