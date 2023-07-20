import React, {useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import { services } from '../constants'
import {fadeIn, Bg ,textVariant} from '../utils/motion.js'
import { Tilt } from 'react-tilt'

import {SectionWrapped} from '../hoc'

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
            className="xs:w-[230px] w-full"
            options={defaultOptions}
        >
            <motion.div
                variants={fadeIn("right","spring",0.5*index,0.75)}
                initial="hidden"
                whileInView="show"
                className='w-full p-[1px] rounded-[20px] shodow-card'
                >
                <AnimatePresence>
                    <motion.div
                        //variants={Bg("right","spring",3,5)}
                        initial={{
                            background: 'rgb(120,0,140)',
                            backgroundImage: 'linear-gradient(0deg, rgba(120,0,140,1) 0%, rgba(202,25,192,1) 35%, rgba(0,212,255,1) 100%)'
                        }}
                        animate={{
                            background: 'rgb(120,0,140)',
                            backgroundImage: 'linear-gradient(360deg, rgba(120,0,140,1) 0%, rgba(202,25,192,1) 35%, rgba(0,212,255,1) 100%)',
                        }}
                        exit={{
                            background: 'rgb(120,0,140)',
                            backgroundImage: 'linear-gradient(0deg, rgba(120,0,140,1) 0%, rgba(202,25,192,1) 35%, rgba(0,212,255,1) 100%)'
                        }}
                        transition={{
                            duration: 5,
                            delay: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className='w-full p-[1px] rounded-[20px] shodow-card'
                    >
                        <div
                            className='bg-tertiary rounded-[20px] py-2 px-10 min-h-[160px] flex justify-evenly items-center flex-col'
                        >
                            <img src={icon} alt={title} className='w-16 h-12 object-contain'/>
                            <h3 className='font-bold text-white text-[17px] font-bold text-center'>
                            {title}
                            </h3>
                        </div>
                    </motion.div>

                </AnimatePresence>
            </motion.div>
        </Tilt>
    )
}


function Areas() {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center content-center align-middle mt-10 mb-10'>
        <motion.div 
            variants={textVariant(0.25)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-full w-full'
        >
            <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Professional areas</h2>
        </motion.div>
            <div className='w-1/2 flex flex-wrap gap-0 justify-center'>
            {
                services.map((service,index)=>(
                <SectionWrapped component={<ServiceCard key={service.title} index={index} {...service}/>}/>
                ))
            }
        </div>
    </div>
  )
}

export default Areas
