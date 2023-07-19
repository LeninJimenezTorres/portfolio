import React, { useRef } from 'react';
import { motion } from 'framer-motion'
import { stylesVariable } from '../menustyles'
import { ComputersCanvas } from './canvas'
import { fadeIn } from '../utils/motion'

const Hero = ({scrollFunc }) => {
  const sectionRef = useRef(null);
  
  const offset = window.screen.height-window.screen.height*.19; // Ajusta esto según tus necesidades
  const scrollToSection2 = () => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const handleScroll = () => {
    scrollFunc();
  };

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${stylesVariable.paddingX} absolute inset-0 top-[120px] max-w-7cl mx-auto flex flex-arrow items-start gap-5`}>
        <div className='flex flex-col justofy-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff] '>
          </div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'>
          </div>
        </div>
        <div>
          <motion.div 
            variants={fadeIn("", "", 0.25, 2)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-full w-full'
          >
            <h1 className={`${stylesVariable.heroHeadText} text-white`}>Hello, I'm 
              <span className='text-[#915eff] '> Lenin</span>
            </h1>
            <p className={`${stylesVariable.heroSubText} mt-2 text-white-100`}>
              I Idevelop mobile and web applications.
            </p>
          </motion.div>
        </div>
      </div>
      <ComputersCanvas/>
      <div onClick={handleScroll} className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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
    </section>
  )
}

export default Hero