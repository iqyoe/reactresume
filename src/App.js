import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import About from './About';
import Skill from './Skill';
import Experience from './Experience';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Content />
      <About />
      <div className='container' id='skillexperience'>
        <div className='row'>
          <Skill />
          <Experience />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
