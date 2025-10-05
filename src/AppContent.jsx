import './App.css';
import {About, Contact, Experience, Hero, Tech, WorkCanvas, Credentials } from './components'
import Areas from './components/Areas';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {useAnimationContext} from "./context/AnimationContext";

gsap.registerPlugin(ScrollToPlugin);

const DISPLAY_HEIGHT = window.innerHeight;

function AppContent() {
  const externalRef = useRef(null);
  const areasRef = useRef(null);
  const techRef = useRef(null);
  const experienceRef = useRef(null);
  const topRef = useRef(null);
  
  const { setHeroYPosition } = useAnimationContext();
  
  const scrollDown = (ref, duration = 4, yValue = 0) => {
    if (ref.current) {
      gsap.to(ref.current, {
        duration: duration,
        y: `+=${yValue}`,
        ease: "power3.inOut",
        onUpdate: () => {
          const currentY = gsap.getProperty(ref.current, 'y');
          setHeroYPosition(currentY);
        },
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
  
  return (
    <div className="App overflow-x-hidden overflow-hidden" style={{
      overflow: 'hidden',
      flex: 1,
      width: '100%',
    }}>
      <div className="bg-white bg-cover bg-no-repeat bg-center w-screen h-screen" style={{position: 'fixed', zIndex: 99}} ref={topRef}>
        <Hero scrollFunc={() => scrollDown(topRef, 4, DISPLAY_HEIGHT)}/>
      </div>
      <div className="overflow-hidden flex flex-col relative z-0 bg-primary">
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

export default AppContent;