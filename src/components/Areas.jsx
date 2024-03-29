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
                variants={fadeIn("right","spring",0.1*index,1.75)}
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
                            className='bg-tertiary rounded-[20px] py-2 px-1 min-h-[70px] flex justify-evenly items-center flex-col'
                        >
                            <img src={icon} alt={title} className='w-10 h-8 object-contain'/>
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


function Areas({areasRef, scrollFunc}) {
    const handleScroll = () => {
        scrollFunc();
    };

    return (
        <div ref={areasRef} className='flex flex-col h-screen w-full justify-center items-center content-center align-middle mt-0 mb-0'>
            <motion.div 
                variants={textVariant(0.25)} 
                initial="hidden"
                whileInView="show"
                viewport={{once:true, amount:0.25}}
                className='justify-center items-center content-center align-middle h-1/5 w-full'
            >
                <p className={`${stylesVariable.sectionSubText} pt-10  flex pl-10 h-1/2 w-full text-justify `}>What kind of solutions I build </p>
                <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Professional areas</h2>
            </motion.div>
            <div className='w-1/2  h-3/5 flex flex-wrap gap-0 justify-center bg-black rounded-[20px] shodow-cardx  '>
                {
                    services.map((service,index)=>(
                    <SectionWrapped component={<ServiceCard key={service.title} index={index} {...service}/>}/>
                    ))
                }
            </div>
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

export default Areas
