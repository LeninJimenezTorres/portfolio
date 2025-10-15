import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { stylesVariable } from '../menustyles';
import backgroundVideo from '../assets/start.mp4';
import { Z_INDEX_HERO, Z_INDEX_INTRO } from '../constants/zIndexComponents';

const Hero = ({ scrollFunc }) => {
  const [clickedOnce, setClickedOnce] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const decayRef = useRef(null); // nuevo: controla la animación de retroceso
  
  const handleScroll = () => {
    if (clickedOnce) return;
    setClickedOnce(true);
    scrollFunc();
  };
  
  const startPress = () => {
    if (intervalRef.current || clickedOnce) return;
    
    // cancelar cualquier retroceso activo
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
        return prev + 4; // velocidad del “cargado” (4 = 2.5 s aprox)
      });
    }, 100);
  };
  
  const cancelPress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // retroceso suave hacia 0
    if (!decayRef.current) {
      decayRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(decayRef.current);
            decayRef.current = null;
            return 0;
          }
          return prev - 3; // velocidad del retroceso (ajustable)
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
    <section className="relative w-full h-screen mx-auto bg-white">
      <div
        className={`${stylesVariable.paddingX} absolute inset-0 justify-center max-w-7cl mx-auto flex flex-col items-center gap-5`}
        style={{ zIndex: Z_INDEX_HERO }}
      >
        <h1 className={`${stylesVariable.heroHeadText} font-mono text-black`}>
          Need a developer?
        </h1>
        <p className={`${stylesVariable.heroSubText} mt-2 text-white-200`}>
          Got it, I can help you with that.
        </p>
      </div>
      
      {/* Botón con efecto de carga */}
      <div
        onMouseDown={startPress}
        onMouseUp={cancelPress}
        onMouseLeave={cancelPress}
        onTouchStart={startPress}
        onTouchEnd={cancelPress}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        style={{ zIndex: Z_INDEX_HERO }}
      >
        <div className="relative w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-end p-2 overflow-hidden">
          {/* Indicador de progreso */}
          <div
            className="absolute bottom-0 left-0 w-full bg-secondary/40"
            style={{
              height: `${progress}%`,
              transition: 'height 0.1s linear',
            }}
          />
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1 relative z-10"
          />
        </div>
      </div>
      
      {/* Video con opacidad dependiente del progreso */}
      <div
        className="flex items-center justify-center absolute"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: Z_INDEX_INTRO,
          opacity: progress / 100,
          transition: 'opacity 0.2s ease-out',
        }}
      >
        <video
          muted
          autoPlay
          loop={true}
          className="inset-0 w-full h-full object-cover absolute"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
