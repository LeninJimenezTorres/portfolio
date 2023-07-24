import React from 'react'
import { technologies, languajes, libraries, design, platforms, servicios, frameworks, systems } from '../constants'
import { SectionWrapped } from '../hoc'
import {SphereCanvas} from './canvas/SphereIcon'
import { motion, AnimatePresence } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { stylesVariable } from '../menustyles'

const Tech = () => {
  return (
    <div className='flex flex-col w-full h-full mb-12'>
      <motion.div 
          variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-full w-full'
      >
        <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full text-justify `}>What I use to build software solutions</p>
        <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Technologies</h2>
      </motion.div>
      

      <div className='w-4/5 h-full flex flex-col justify-center content-center self-center'>  
        <motion.div 
          variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-1/5 w-full'
          >
          <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full justify-center mt-10`}>Programming languajes</p>
        </motion.div>
        
        <div className='w-full h-full justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
          {
            languajes.map((languaje) => (
              <motion.div 
                variants={fadeIn("","",0.25,3)} 
                initial="hidden"
                whileInView="show"
                viewport={{once:true, amount:0.25}}
                className='justify-center items-center content-center align-middle'
                >
                  <div className='w-32 h-32' key={languaje.name}>
                    <SphereCanvas  icon={languaje.icon} name={languaje.name}/>
                  </div>
              </motion.div>
            ))
          }
        </div>

        <div className='w-9/10 h-full flex flex-col justify-center content-center self-center'>  
          <motion.div 
            variants={textVariant(0.25)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-1/5 w-full'
          >
            <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full justify-center mt-10`}>Frameworks</p>
          </motion.div>
          <div className='w-full h-full justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
            {
              frameworks.map((framework) => (
                <motion.div 
                  variants={fadeIn("","",0.25,3)} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true, amount:0.25}}
                  className='justify-center items-center content-center align-middle'
                  >
                    <div className='w-32 h-32' key={framework.name}>
                      <SphereCanvas  icon={framework.icon} name={framework.name}/>
                    </div>
                </motion.div>
              ))
            }
          </div>
        </div>
        
        <div className='w-9/10 h-full flex flex-col justify-center content-center self-center'>  
          <motion.div 
            variants={textVariant(0.25)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-1/5 w-full'
          >
            <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full justify-center mt-10`}>Libraries</p>
          </motion.div>
          <div className='w-full h-full justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
            {
              libraries.map((library) => (
                <motion.div 
                  variants={fadeIn("","",0.25,3)} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true, amount:0.25}}
                  className='justify-center items-center content-center align-middle'
                  >
                    <div className='w-32 h-32' key={library.name}>
                      <SphereCanvas  icon={library.icon} name={library.name}/>
                    </div>
                </motion.div>
              ))
            }
          </div>
        </div>
        
        <div className='w-9/10 h-full flex flex-col justify-center content-center self-center'>  
          <motion.div 
            variants={textVariant(0.25)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-1/5 w-full'
          >
            <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full justify-center mt-10`}>Services</p>
          </motion.div>
          <div className='w-full h-full justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
            {
              servicios.map((servicio) => (
                <motion.div 
                  variants={fadeIn("","",0.25,3)} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true, amount:0.25}}
                  className='justify-center items-center content-center align-middle'
                  >
                    <div className='w-32 h-32' key={servicio.name}>
                      <SphereCanvas  icon={servicio.icon} name={servicio.name}/>
                    </div>
                </motion.div>
              ))
            }
          </div>
        </div>

        <div className='w-9/10 h-full flex flex-col justify-center content-center self-center'>  
          <motion.div 
            variants={textVariant(0.25)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-1/5 w-full'
          >
            <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full justify-center mt-10`}>Platforms</p>
          </motion.div>
          <div className='w-full h-full justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
            {
              platforms.map((platform) => (
                <motion.div 
                  variants={fadeIn("","",0.25,3)} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true, amount:0.25}}
                  className='justify-center items-center content-center align-middle'
                  >
                    <div className='w-32 h-32' key={platform.name}>
                      <SphereCanvas  icon={platform.icon} name={platform.name}/>
                    </div>
                </motion.div>
              ))
            }
          </div>
        </div>

        <div className='w-9/10 h-full flex flex-col justify-center content-center self-center'>  
          <motion.div 
            variants={textVariant(0.25)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-1/5 w-full'
          >
            <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full justify-center mt-10`}>Systems</p>
          </motion.div>
          <div className='w-full h-full justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
            {
              systems.map((system) => (
                <motion.div 
                  variants={fadeIn("","",0.25,3)} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true, amount:0.25}}
                  className='justify-center items-center content-center align-middle'
                  >
                    <div className='w-32 h-32' key={system.name}>
                      <SphereCanvas  icon={system.icon} name={system.name}/>
                    </div>
                </motion.div>
              ))
            }
          </div>
        </div>
        
        <div className='w-9/10 h-full flex flex-col justify-center content-center self-center'>  
          <motion.div 
            variants={textVariant(0.25)} 
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className='justify-center items-center content-center align-middle h-1/5 w-full'
          >
            <p className={`${stylesVariable.sectionSubText} flex pl-10 h-1/2 w-full justify-center mt-10`}>Design and Edition</p>
          </motion.div>
          <div className='w-full h-full justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
            {
              design.map((item) => (
                <motion.div 
                  variants={fadeIn("","",0.25,3)} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true, amount:0.25}}
                  className='justify-center items-center content-center align-middle'
                  >
                    <div className='w-32 h-32' key={item.name}>
                      <SphereCanvas  icon={item.icon} name={item.name}/>
                    </div>
                </motion.div>
              ))
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default Tech