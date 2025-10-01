import './App.css';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, WorkCanvas, Credentials } from './components'
import React, { useRef } from 'react';
import Areas from './components/Areas';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const externalRef = useRef(null);
  const areasRef = useRef(null);
  const techRef = useRef(null);
  const experienceRef = useRef(null);

    const scrollToSectionGSAP = (ref, duration = 4, offset = 0) => {
        if (ref.current) {
            gsap.to(window, {
                duration: duration,
                scrollTo: {
                    y: ref.current.offsetTop - offset,
                },
                ease: "power3.inOut"
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
        <div className="bg-white bg-cover bg-no-repeat bg-center">
            <Hero scrollFunc={() => scrollToSectionGSAP(externalRef, 4, 0)}/>
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
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
