import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion.js'

import {SectionWrapped} from '../hoc'
import { staggerContainer } from '../utils/motion.js'

const ServiceCard=({index,title,icon})=>{
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          300000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return(
    <Tilt 
      className="xs:w-[250px] w-full"
      options={defaultOptions}
    >
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shodow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='font-bold text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center content-center align-middle mt-10 mb-10'>
      <motion.div variants={textVariant()} className='justify-center items-center content-center align-middle h-full w-full'>
        <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full text-justify `}>Introduction</p>
        <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}>
        <p className='flex m-10 text-justify text-[17px] leading-relaxed'>
          Experienced iOS Developer with over 2 years of professional experience in creating software solutions tailored to project needs. I have a strong background in web and mobile development maily with React - React native and iOS Swift. <br/>
          My skill set includes proficiency in cloud services like AWS and Oracle Cloud Infrastructure as well as 3D web rendering webapps with Three.js, CI/CD, Git, Linux, and database management. Throughout my career, I have successfully developed websites, web apps, mobile apps, RESTful APIs, and eCommerce solutions with WordPress.<br/>
          I am a professional passionate about programming and developing solutions, I am self-taught and proactive, I like to learn and understand about different technologies, I look for professional challenges and improve day by day.
        </p>
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {
          services.map((service,index)=>(
              <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </div>
  )
}

//export default SectionWrapped(About)
export default About