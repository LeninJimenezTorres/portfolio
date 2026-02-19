import React, { useState, useRef, useEffect } from 'react';
import { stylesVariable } from '../../menustyles';
import backgroundVideo from '../../assets/start.mp4';
import { Z_INDEX_HERO, Z_INDEX_INTRO } from '../../constants/zIndexComponents';
import SliderButton from "./components/SliderButton";
import VideoHero from "./components/VideoHero";

const Hero = ({ scrollFunc }) => {
  const [clickedOnce, setClickedOnce] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const decayRef = useRef(null);
  
  const handleScroll = () => {
    if (clickedOnce) return;
    setClickedOnce(true);
    scrollFunc();
  };
  
  const startPress = () => {
    if (intervalRef.current || clickedOnce) return;
    
    if (decayRef.current) {
      clearInterval(decayRef.current);
      decayRef.current = null;
    }
    
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          handleScroll();
          
          return 100;
        }
        return prev + 4;
      });
    }, 100);
  };
  
  const cancelPress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (!decayRef.current) {
      decayRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(decayRef.current);
            decayRef.current = null;
            return 0;
          }
          return prev - 3;
        });
      }, 50);
    }
  };
  
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(decayRef.current);
    };
  }, []);
  
  return (
    <section className="absolute w-screen h-screen mx-auto bg-white">
      <div
        className={`${stylesVariable.paddingX} absolute inset-0 justify-center max-w-7cl mx-auto flex flex-col items-center gap-5`}
        style={{ zIndex: Z_INDEX_HERO }}
      >
        <h1 className={`${stylesVariable.heroHeadText} font-mono text-black`}>
          Need a developer?
        </h1>
        <p className={`${stylesVariable.heroSubText} mt-2 text-white-200`} style={{opacity: progress/100}}>
          Got it, I can help you with that.
        </p>
      </div>
      
      <div
        onMouseDown={startPress}
        onMouseUp={cancelPress}
        onMouseLeave={cancelPress}
        onTouchStart={startPress}
        onTouchEnd={cancelPress}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        style={{ zIndex: Z_INDEX_HERO, flexDirection: 'column' }}
      >
        <p className="text-xl sm:text-2xl bg-black mt-3 mb-1 font-light" style={{opacity: (100-progress)/100}}>
          [Keep pressing]
        </p>
        <SliderButton progress={progress} />
      </div>
      <VideoHero progress={progress}/>
    </section>
  );
};

export default Hero;
