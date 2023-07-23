import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { stylesVariable } from '../menustyles'
const Works = () => {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center content-center align-middle mt-10 mb-10'>
      <motion.div 
          variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-full w-full'
      >
          <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Projects</h2>
      </motion.div>
      
      <div className='w-4/5 h-full justify-center items-center content-center align-middle flex flex-row'>
        <div className='w-1/2 h-full justify-center items-center content-center align-middle flex flex-col'>
          <motion.div 
            variants={textVariant(0.25)} 
              initial="hidden"
              whileInView="show"
              viewport={{once:true, amount:0.25}}
              className='justify-center items-center content-center align-middle h-1/4 w-full flex flex-col'
          >
              <h4 className='text-xl flex h-1/2 w-full justify-center mb-5' >Indomo Design</h4>
          </motion.div>
          <iframe
            src="https://www.indomodesign.com"
            title="Ejemplo iFrame"
            width={window.screen.width*0.8}
            height={window.screen.height*0.6}
          />
        </div>
  
      </div>
    </div>
  )
}

export default Works