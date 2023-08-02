import './App.css';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, WorkCanvas, StarsCanvas, Planet, Credentials } from './components'
import React, { useRef } from 'react';
import Areas from './components/Areas';
function App() {
  const externalRef = useRef(null);
  const areasRef = useRef(null);
  const techRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = () => {
    if (externalRef.current) {
      window.scrollTo({
        top: externalRef.current.offsetTop - 0,
        behavior: 'smooth',
      });
    }
  };
  
  const scrollToSection2 = () => {
    if (areasRef.current) {
      window.scrollTo({
        top: areasRef.current.offsetTop - 0,
        behavior: 'smooth',
      });
    }
  };
  const scrollToSection3 = () => {
    if (techRef.current) {
      window.scrollTo({
        top: techRef.current.offsetTop - 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSection4 = () => {
    if (experienceRef.current) {
      window.scrollTo({
        top: experienceRef.current.offsetTop - 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSectionAll = (referencia) => {
    if (referencia.current) {
      window.scrollTo({
        top: referencia.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className="App overflow-x-hidden">
      <div className="w-full overflow-x-hidden flex flex-col relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero scrollFunc={scrollToSection}/>
        </div>
        <About externalRef={externalRef} scrollFunc={scrollToSection2}/>
        <Areas areasRef={areasRef} scrollFunc={scrollToSection3}/>
        <Tech techRef={techRef} scrollFunc={scrollToSection4}/>
        <Experience experienceRef={experienceRef}/>
        <WorkCanvas/>
        <Credentials/>
        
        <div className="relative z-0 w-1/2 ml-10 mb-20 mt-20 flex flex-col w-full">
          <div className='w-full h-full flex justify-center'>
            <Contact/>
            <Planet/>
          </div>
          <StarsCanvas/>
        </div> 
        {/* 
          <Navbar/> 
        
        <Feedbacks/>
        
        */}
      </div>

    </div>
  );
}

export default App;
