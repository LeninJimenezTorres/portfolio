import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { stylesVariable } from '../menustyles'
import { projects } from '../constants'

const Works = ({workItem}) => {
  return (
    <div className='w-1/2 h-full justify-center items-center content-center align-middle flex flex-col'>
      <motion.div 
        variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-1/4 w-full flex flex-col'
      >
          <h4 className='text-xl flex h-1/2 w-full justify-center mb-5' >{workItem.title}</h4>
      </motion.div>
      <iframe
        src={workItem.url}
        title={workItem.url}
        width={window.screen.width*0.8}
        height={window.screen.height*0.6}
      />
    </div>
  )
}

const WorkCanvas = ()=>{
  return (
    <div className='flex flex-col h-full w-full justify-center items-center content-center align-middle mt-10 mb-10'>
      <motion.div 
          variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-full w-full'
      >
        <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full text-justify `}>Some of my creations</p>
        <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Projects</h2>
      </motion.div>
      
      <div className='w-4/5 h-full justify-center items-center content-center align-middle flex flex-col'>
        {
          projects.map((workItem,index)=>(
            <Works key={index} workItem={workItem}/>
          ))
        }
      </div>
    </div>
  )
}

export default WorkCanvas