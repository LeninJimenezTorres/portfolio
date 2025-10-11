import React, {useRef, useState} from 'react';
import { motion } from 'framer-motion'
import { stylesVariable } from '../menustyles'

const Hero = ({scrollFunc }) => {
  const [clickedOnce, setClickedOnce] = useState(false);
  
  const handleScroll = () => {
    if (clickedOnce) return;
    setClickedOnce(true);
    scrollFunc();
  };

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${stylesVariable.paddingX} absolute inset-0 justify-center max-w-7cl mx-auto flex flex-arrow flex-col items-center gap-5`}>
        <h1 className={`${stylesVariable.heroHeadText} font-mono text-black`}>Need a developer?</h1>
        <p className={`${stylesVariable.heroSubText} mt-2 text-white-200`}>
            Got it, I can help you with that.
        </p>
      </div>
      <div onClick={handleScroll} className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <div className='w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
          <motion.dev 
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration:3.5,
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