import React, {useRef} from 'react'
import { motion } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import {fadeIn,textVariant} from '../utils/motion.js'


const About = ({externalRef, scrollFunc}) => {
  const handleScroll = () => {
      scrollFunc();
  };
  return (
    <div ref={externalRef} className='h-screen w-full justify-center items-center content-center align-middle mt-10 mb-10 flex flex-col'>
      <motion.div 
        variants={textVariant(0.25)} 
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.25}}
        className='justify-center items-center content-center align-middle h-1/5 w-full pb-0 mb-0'
        >
        <p className={`${stylesVariable.sectionSubText} pt-10 flex pl-10 h-1/2 w-full text-justify `}>Introduction</p>
        <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify mb-[-5]` }>Overview</h2>
      </motion.div>
      <motion.div 
        variants={fadeIn("","",0.25,1)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.25}}
        className='justify-center  h-3/5 w-4/5 flex '
      >
        <p className='pt-12 flex m-10 text-justify text-[17px] leading-10'>
          Experienced iOS Developer with over 2 years of professional experience in creating software solutions tailored to project needs. I have a strong background in web and mobile development maily with React - React native and iOS Swift. <br/>
          My skill set includes proficiency in cloud services like AWS and Oracle Cloud Infrastructure as well as 3D web rendering webapps with Three.js, CI/CD, Git, Linux, and database management. Throughout my career, I have successfully developed websites, web apps, mobile apps, RESTful APIs, and eCommerce solutions with WordPress.<br/>
          I am a professional passionate about programming and developing solutions, I am self-taught and proactive, I like to learn and understand about different technologies, I look for professional challenges and improve day by day.
        </p>
      </motion.div>
      <div onClick={handleScroll} className='h-1/5 mb-100 bottom-32 w-full flex justify-center items-center'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.dev 
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </div>
    </div>
  )
}

//export default SectionWrapped(About)
export default About