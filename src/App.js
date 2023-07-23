import './App.css';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Planet } from './components'
import React, { useRef } from 'react';
import Areas from './components/Areas';
function App() {
  const externalRef = useRef(null);

  const scrollToSection = () => {
    if (externalRef.current) {
      window.scrollTo({
        top: externalRef.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="App">
      <div className="flex flex-col relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/> 
          <Hero scrollFunc={scrollToSection}/>
        </div>
        <About externalRef={externalRef}/>
        <Areas/>
        <Tech/>
        
        <Works/>
        
        <div className="relative z-0 w-1/2 ml-10 mb-20 mt-20 flex flex-col w-full">
          <div className='w-full h-full flex justify-center'>
            <Contact/>
            <Planet/>
          </div>
          <StarsCanvas/>
        </div> 
        {/* 
        
        <Experience/>
        <Feedbacks/>
        
        */}
      </div>

    </div>
  );
}

export default App;
