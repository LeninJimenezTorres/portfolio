import React, {useEffect, useRef, useState} from 'react'
import { motion } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import backgroundVideo from '../assets/web_intro.mp4';
import {useAnimationContext} from "../context/AnimationContext";

const WebDevelopmentSection = ({externalRef, scrollFunc}) => {
  const { showWebSection } = useAnimationContext();
  const [showText, setShowText] = useState(false)
  const [videoShouldLoop, setVideoShouldLoop] = useState(false)
  const [clickedOnce, setClickedOnce] = useState(false);
  
  const handleScroll = () => {
    if (clickedOnce) return;
    setClickedOnce(true);
    
    scrollFunc();
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
  const [contentIsHidden, setContentIsHidden] = useState(true)
  
  useEffect(() => {
    if (!contentIsHidden) {
      const timer = setTimeout(() => {
        setShowText(true)
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [contentIsHidden]);
  
  const handleVideoEnd = () => {
    setContentIsHidden(false)
    setVideoShouldLoop(true);
  }
  
  useEffect(() => {
    if (showWebSection) {
      const contentTimer = setTimeout(() => {
        handleVideoEnd();
      }, 3000);
      
      return () => clearTimeout(contentTimer);
    }
  }, [showWebSection]);
  
  return (
    <div ref={externalRef} className='h-screen w-full justify-center items-center content-center align-middle mt-0 mb-0 flex flex-col' style={{background:'black'}}>
      <div ref={externalRef} className='w-full justify-center items-center content-center align-middle mt-0 mb-0 flex flex-row' style={{height:'90%'}}>
        <div onClick={handleScroll} className='mb-100 bottom-0 justify-center items-center flex absolute z-20 left-0' style={{width: '10%', height: '100vh', visibility: contentIsHidden ? 'hidden' : 'visible'}}>
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
        <div className='flex items-center justify-center' style={{width: '40%', height: '100vh'}} >
          <video
            ref={videoRef}
            muted
            autoPlay
            loop={videoShouldLoop}
            className="inset-0 w-[100%] h-[100%] object-contain absolute z-10"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <motion.div
          className='flex items-center justify-center flex-col absolute z-20'
          animate={{
            width: contentIsHidden ? '0%' : '90%',
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
                  staggerChildren: 0.3,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {showText && <motion.h2
              variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity: 1, y: 0, transition: {duration: 1.0, ease: 'easeOut'}},
              }}
              className={`${stylesVariable.sectionHeadText} pt-10 pl-10 flex w-[100%] text-justify font-mono`}
              style={{background: 'transparent', flex: 0.3}}
            >
              Web Development
            </motion.h2>}
            
            {showText && <motion.p
              variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity: 1, y: 0, transition: {duration: 1.7, ease: 'easeOut'}},
              }}
              className={`${stylesVariable.sectionSubText} pt-10 flex pl-10 h-auto w-full text-justify`}
              style={{background: 'transparent', flex: 0.3}}
            >
              Modern Web Applications
            </motion.p>}
            
            {showText && <motion.p
              variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity: 1, y: 0, transition: {duration: 2.4, ease: 'easeOut'}},
              }}
              className='flex pl-10 m-10 text-justify text-[17px] leading-10'
              style={{width: '80%', flex: 0.3}}
            >
              Build your website using the best solution for your needs. Whether you want a landing page, an e-commerce site, your professional portfolio, or your web app.
            </motion.p>}
          </motion.div>
          
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
      </div>
    </div>
  )
}

//export default SectionWrapped(About)
export default WebDevelopmentSection