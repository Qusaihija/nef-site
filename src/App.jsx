import React from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const scrollY = useScrollPosition();

  return (
    <div className="min-h-screen bg-dark">
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;