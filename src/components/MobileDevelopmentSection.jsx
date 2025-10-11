import React, {useEffect, useRef, useState} from 'react'
import { motion } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import backgroundVideo from '../assets/iphone17_2.mp4';
import {useAnimationContext} from "../context/AnimationContext";
import {DISPLAY_HEIGHT} from "../constants/Metrics";

const MobileDevelopmentSection = ({externalRef, scrollFunc}) => {
    const { introYPosition, setShowWebSection, showMobSection } = useAnimationContext();
    const [showText, setShowText] = useState(false)
    const [clickedOnce, setClickedOnce] = useState(false);

    useEffect(() => {
      console.log("PositionY: ", introYPosition, " - Display height: ", DISPLAY_HEIGHT);
    }, [introYPosition])
    
    const handleScroll = () => {
      if (clickedOnce) return;
      setClickedOnce(true);
      
      scrollFunc();
      setShowWebSection(true);
    };
  
  useEffect(() => {
    if (clickedOnce) {
      const contentTimer = setTimeout(() => {
        setClickedOnce(false);
      }, 5000);
      
      return () => clearTimeout(contentTimer);
    }
  }, [clickedOnce]);
  

    const videoRef = useRef(null);
    const directionRef = useRef(1) // 1 = forward, -1 = backward
    const rafRef = useRef(null)
    const [contentIsHidden, setContentIsHidden] = useState(true)
  
    useEffect(() => {
      if (!contentIsHidden) {
        const timer = setTimeout(() => {
          setShowText(true)
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    }, [contentIsHidden]);

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        video.pause()
        video.currentTime = 0
      if (showMobSection) {
        const step = () => {
          if (video.readyState >= 2) {
            video.currentTime += directionRef.current * 0.0128 // ~30fps
            if ((video.duration - video.currentTime) < 0.05 && contentIsHidden) {
              setContentIsHidden(false)
            }
            if (video.currentTime >= video.duration) {
              directionRef.current = -1 // reverse
            } else if (video.currentTime <= 0) {
              directionRef.current = 1 // forward
            }
          }
          rafRef.current = requestAnimationFrame(step)
        }
        rafRef.current = requestAnimationFrame(step)
      }
      return () => cancelAnimationFrame(rafRef.current)
    }, [showMobSection])
  
    return (
    <div ref={externalRef} className='h-screen w-full justify-center items-center content-center align-middle mt-0 mb-0 flex flex-col' style={{background:'black'}}>
        <div ref={externalRef} className='w-full justify-center items-center content-center align-middle mt-0 mb-0 flex flex-row' style={{height:'90%'}}>
            <div className='flex items-center justify-center' style={{width: '40%', height: '100vh'}} >
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    className="inset-0 w-[100%] h-[100%] object-cover z-[10]"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
          <motion.div
            className='flex items-center justify-center flex-col'
            animate={{
              width: contentIsHidden ? '0%' : '55%',
              opacity: contentIsHidden ? 0 : 1,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ height: '100vh', overflow: 'hidden' }}
          >
            <motion.div
              className='flex items-center justify-center flex-col'
              style={{ width: '100%', height: '90%' }}
              initial="hidden"
              animate={contentIsHidden ? "hidden" : "visible"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3, // tiempo entre cada texto
                    delayChildren: 0.3,   // espera antes de empezar
                  },
                },
              }}
            >
              {showText && <motion.h2
                variants={{
                  hidden: {opacity: 0, y: 20},
                  visible: {opacity: 1, y: 0, transition: {duration: 1.0, ease: 'easeOut'}},
                }}
                className={`${stylesVariable.sectionHeadText} pt-10 pl-10 flex h-auto w-[100%] text-justify font-mono`}
                style={{background: 'transparent'}}
              >
                Mobile Development
              </motion.h2>}
              
              {showText && <motion.p
                variants={{
                  hidden: {opacity: 0, y: 20},
                  visible: {opacity: 1, y: 0, transition: {duration: 1.7, ease: 'easeOut'}},
                }}
                className={`${stylesVariable.sectionSubText} pt-10 flex pl-10 h-auto w-full text-justify`}
                style={{background: 'transparent'}}
              >
                Native & Multiplatform
              </motion.p>}
              
              {showText && <motion.p
                variants={{
                  hidden: {opacity: 0, y: 20},
                  visible: {opacity: 1, y: 0, transition: {duration: 2.4, ease: 'easeOut'}},
                }}
                className='flex pl-10 m-10 text-justify text-[17px] leading-10'
                style={{width: '80%'}}
              >
                Build your mobile app using the best tech stack tailored to your needs. Experience building native
                solutions (iOS and Android) and with cross-platform frameworks like Flutter and React Native.
              </motion.p>}
            </motion.div>
            
            {/* Botón de scroll */}
            <div onClick={()=>{}} className='justify-center items-center flex z-20' style={{width: '10%', height: '10%'}}>
              <div className='w-[25px] h-[25px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{ y:[0, 5, 0] }}
                  transition={{ duration:1.5, repeat: Infinity, repeatType: "loop" }}
                  className='w-3 h-1 rounded-full bg-secondary mb-1'
                />
              </div>
            </div>
          </motion.div>
          
          <div onClick={handleScroll} className='mb-100 bottom-0 justify-center items-center flex z-20' style={{width: '5%', height: '100vh', visibility: contentIsHidden ? 'hidden' : 'visible'}}>
                <div className='w-[25px] h-[25px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
                    <motion.dev
                        animate={{
                            y:[0, 5, 0]
                        }}
                        transition={{
                            duration:1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className='w-3 h-1 rounded-full bg-secondary mb-1'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

//export default SectionWrapped(About)
export default MobileDevelopmentSection