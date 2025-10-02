import React, {useRef} from 'react'
import { motion } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import backgroundVideo from '../assets/iphone17.mp4';

const About = ({externalRef, scrollFunc}) => {
  const handleScroll = () => {
      scrollFunc();
  };
  return (
    <div ref={externalRef} className='h-screen w-full justify-center items-center content-center align-middle mt-0 mb-0 flex flex-col' style={{background:'black'}}>
        <div ref={externalRef} className='w-full justify-center items-center content-center align-middle mt-0 mb-0 flex flex-row' style={{height:'90%'}}>
            <div className='flex items-center justify-center' style={{width: '50%', height: '100vh'}} >
                <video
                    autoPlay
                    loop
                    muted
                    controls={false}
                    playsInline
                    className="inset-0 w-[100%] h-[100%] object-contain z-[10]"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <div className='flex items-center justify-center' style={{width: '50%', height: '100vh'}} >
                <div className='flex items-center justify-center flex-col' style={{width: '100%'}} >
                    <div className='flex items-center justify-center flex-col' style={{width: '100%', height: '30%'}} >
                        <h2 className={`${stylesVariable.sectionHeadText} pt-10 pl-10 flex h-auto w-[100%] text-justify font-mono` } style={{background:'transparent'}}>Overview</h2>
                    </div>
                    <div className='flex items-center justify-center flex-col' style={{width: '100%', height: '15%'}} >
                        <p className={`${stylesVariable.sectionSubText} pt-10 flex pl-10 h-auto w-full text-justify`} style={{background:'transparent'}}>Introduction</p>
                    </div>
                    <div className='flex items-center justify-center flex-col' style={{width: '100%', height: '55%', background:'transparent'}} >
                        <p className='flex m-10 text-justify text-[17px] leading-10'>
                          Experienced iOS Developer with over 2 years of professional experience in creating software solutions tailored to project needs. I have a strong background in web and mobile development maily with React - React native and iOS Swift. <br/>
                          My skill set includes proficiency in cloud services like AWS and Oracle Cloud Infrastructure as well as 3D web rendering webapps with Three.js, CI/CD, Git, Linux, and database management. Throughout my career, I have successfully developed websites, web apps, mobile apps, RESTful APIs, and eCommerce solutions with WordPress.<br/>
                          I am a professional passionate about programming and developing solutions, I am self-taught and proactive, I like to learn and understand about different technologies, I look for professional challenges and improve day by day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div onClick={handleScroll} className='mb-100 bottom-0 justify-center items-center flex' style={{height:'10%', width: '100%', backgroundColor:'transparent'}}>
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
  )
}

//export default SectionWrapped(About)
export default About