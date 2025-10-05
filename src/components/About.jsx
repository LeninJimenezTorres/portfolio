import React, {useEffect, useRef} from 'react'
import { motion } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import backgroundVideo from '../assets/iphone17.mp4';
import {useAnimationContext} from "../context/AnimationContext";
import {DISPLAY_HEIGHT} from "../constants/Metrics";

const About = ({externalRef, scrollFunc}) => {
    const { heroYPosition } = useAnimationContext();
    
    useEffect(() => {
      console.log("PositionY: ", heroYPosition, " - Display height: ", DISPLAY_HEIGHT);
    }, [heroYPosition])
    
    const handleScroll = () => {
      scrollFunc();
    };

    const videoRef = useRef(null);
    const directionRef = useRef(1) // 1 = forward, -1 = backward
    const rafRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        video.pause()
        video.currentTime = 0
      
        if (heroYPosition >= DISPLAY_HEIGHT) {
          const step = () => {
              if (video.readyState >= 2) {
                  video.currentTime += directionRef.current * 0.033 // ~30fps
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
    }, [heroYPosition])
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
            <div className='flex items-center justify-center flex-col' style={{width: '55%', height: '100vh'}} >
                <div className='flex items-center justify-center flex-col' style={{width: '100%', height: '90%'}} >
                    <div className='flex items-center justify-center flex-col' style={{width: '90%', height: '30%'}} >
                        <h2 className={`${stylesVariable.sectionHeadText} pt-10 pl-10 flex h-auto w-[100%] text-justify font-mono` } style={{background:'transparent'}}>Mobile Development</h2>
                    </div>
                    <div className='flex items-center justify-center flex-col' style={{width: '80%', height: '15%'}} >
                        <p className={`${stylesVariable.sectionSubText} pt-10 flex pl-10 h-auto w-full text-justify`} style={{background:'transparent'}}>Native & Multiplatform</p>
                    </div>
                    <div className='flex items-center justify-center flex-col' style={{width: '80%', height: '55%', background:'transparent'}} >
                        <p className='flex pl-10 m-10 text-justify text-[17px] leading-10' style={{width:'100%'}}>
                          Build your mobile app using the best tech stack tailored to your needs. Experience building native solutions (iOS and Android) and with cross-platform frameworks like Flutter and React Native.
                        </p>
                    </div>
                </div>
                <div onClick={handleScroll} className='justify-center items-center flex z-20' style={{width: '10%', height: '10%'}}>
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
            <div onClick={handleScroll} className='mb-100 bottom-0 justify-center items-center flex z-20' style={{width: '5%', height: '100vh'}}>
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
export default About