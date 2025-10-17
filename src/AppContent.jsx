import './App.css';
import {MobileDevelopmentSection, Contact, Hero } from './components'
import Areas from './components/Areas';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {useAnimationContext} from "./context/AnimationContext";
import WebDevelopmentSection from "./components/WebDevelopmentSection";
import {
  Z_INDEX_MOB_SECTION,
  Z_INDEX_HERO,
  Z_INDEX_WEB_SECTION,
  Z_INDEX_INTRO,
  Z_INDEX_BASE, Z_INDEX_MY_PATH, Z_INDEX_MOBILE_WORK
} from "./constants/zIndexComponents";
import Intro from "./components/Intro";
import {DISPLAY_WIDTH} from "./constants/Metrics";
import MyPath from "./components/MyPath";
import MobileWork from "./components/MobileWork";

gsap.registerPlugin(ScrollToPlugin);

const DISPLAY_HEIGHT = window.innerHeight;

function AppContent() {
  const externalRef = useRef(null);
  const areasRef = useRef(null);
  const techRef = useRef(null);
  const topRef = useRef(null);
  const upRef = useRef(null);
  
  const mobileDevRef = useRef(null);
  const mobileWorkRef = useRef(null);
  const webDevRef = useRef(null);
  const myPathRef = useRef(null);
  
  const { setHeroYPosition } = useAnimationContext();
  const { setIntroYPosition } = useAnimationContext();
  
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
  
  const scrollUp = (ref, duration = 4, yValue = 0) => {
    if (ref.current) {
      gsap.to(ref.current, {
        duration: duration,
        y: `-=${yValue}`,
        ease: "power3.inOut",
        onUpdate: () => {
          const currentY = gsap.getProperty(ref.current, 'y');
          setIntroYPosition(currentY);
        },
      });
    }
  };
  
  const moveToWebDevSection = (showComponentRef, hideComponentRef) => {
    const tl = gsap.timeline();
    
    tl.fromTo(showComponentRef.current, {
      opacity: 0,
      zIndex: Z_INDEX_WEB_SECTION
    }, {
      opacity: 1,
      duration: 2.5,
      ease: "power2.inOut"
    }, 0);
    
    tl.to(hideComponentRef.current, {
      opacity: 0,
      duration: 2.5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(hideComponentRef.current, { zIndex: 0 });
      }
    }, 0);
  };
  
  const scrollToSection3 = () => {
    if (techRef.current) {
      window.scrollTo({
        top: techRef.current.offsetTop - 0,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div
      className="App w-full h-full flex"
      style={{
        flex: 1,
        width: '100vw',
        padding: 0,
        margin: 0,
      }}
    >
      <div className="bg-green-500 bg-cover bg-no-repeat bg-center w-full h-screen" style={{position: 'fixed', zIndex: Z_INDEX_HERO, width: "10vw"}} ref={topRef}>
        <Hero scrollFunc={() => scrollDown(topRef, 4, DISPLAY_HEIGHT)}/>
      </div>
      <div className="bg-white bg-cover bg-no-repeat bg-center w-screen h-screen" style={{position: 'fixed', zIndex: Z_INDEX_INTRO}} ref={upRef}>
        <Intro scrollFunc={() => scrollUp(upRef, 4, DISPLAY_HEIGHT)}/>
      </div>
      <div ref={mobileDevRef} className="bg-white bg-cover bg-no-repeat bg-center w-screen h-screen" style={{position: 'fixed', zIndex: Z_INDEX_MOB_SECTION, overflowX: 'hidden'}}>
        <MobileDevelopmentSection
          externalRef={externalRef}
          scrollFunc={() => { moveToWebDevSection(webDevRef, mobileDevRef) }}
          scrollFuncExit={() => {
            if (webDevRef.current) {
              webDevRef.current.style.display = "none";
            }
            scrollUp(mobileDevRef, 4, DISPLAY_HEIGHT)
          }}
        />
      </div>
      <div ref={webDevRef} className="bg-white bg-cover bg-no-repeat bg-center w-screen h-screen" style={{position: 'fixed', zIndex: Z_INDEX_WEB_SECTION}}>
        <WebDevelopmentSection
          externalRef={externalRef}
          scrollFunc={() => { moveToWebDevSection(mobileDevRef, webDevRef)}}
          scrollFuncExit={() => scrollUp(webDevRef, 4, DISPLAY_HEIGHT)}
        />
      </div>
      <div ref={mobileWorkRef} className="bg-white bg-cover bg-no-repeat bg-center w-screen h-screen" style={{position: 'relative', zIndex: Z_INDEX_MOBILE_WORK}}>
        <MobileWork scrollFunc={() => scrollUp(upRef, 4, DISPLAY_HEIGHT)}/>
      </div>
      {/*<div ref={myPathRef} className="bg-white bg-cover bg-no-repeat bg-center w-screen h-screen" style={{position: 'fixed', zIndex: Z_INDEX_MY_PATH, top: DISPLAY_HEIGHT}}>*/}
      {/*  <MyPath scrollFunc={() => scrollUp(upRef, 4, DISPLAY_HEIGHT)}/>*/}
      {/*</div>*/}
      <div className="w-screen h-screen bg-black" style={{zIndex: Z_INDEX_BASE, position: "absolute", width: DISPLAY_WIDTH, height: DISPLAY_HEIGHT}}></div>
    </div>
  );
}

export default AppContent;