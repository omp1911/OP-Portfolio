import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
