import React, {useRef, Suspense} from 'react'
import { technologies, languajes, libraries, design, platforms, servicios, frameworks, systems } from '../constants'
import { SectionWrapped } from '../hoc'
import {SphereCanvas} from './canvas/SphereIcon'
import { motion, AnimatePresence } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { stylesVariable } from '../menustyles'
import CanvasLoader from './Loader'

//import { Carousel } from '@trendyol-js/react-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const TechCanvas =  ({datos,etiqueta})=>{

  return(
    <div className='w-9/10 h-full flex flex-col justify-center content-center self-center'>  
      <div className='w-full h-1/5 justify-center content-center self-center'>
        <motion.div 
          variants={fadeIn("","",0.25,3)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center self-center content-center align-middle h-full w-full flex flex-col'
        >
          <p className={` flex flex-col h-full w-full justify-center content-center align-middle self-center text-s mt-0 text-white`}>{etiqueta}</p>
        </motion.div> 
      </div>
      <div className='w-4/5 h-4/5 justify-center content-center self-center gap-1 flex flex-row flex-wrap'>
        {
          datos.map((item) => (
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
    
  )
}


const Tech = ({techRef, scrollFunc}) => {
  const handleScroll = () => {
      scrollFunc();
  };


  return (
    <div ref={techRef} className='flex flex-col w-full h-screen mb-0'>
      <motion.div 
          variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-1/5 w-full'
      >
        <p className={`${stylesVariable.sectionSubText} pt-10 flex pl-10 h-1/2 w-full text-justify `}>What I use to build software solutions</p>
        <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Technologies</h2>
      </motion.div>
      
      
      <div className='w-4/5 bg-black h-3/5 flex flex-col justify-center content-center self-center '>  
        <Carousel show={1} slide={2} transition={0.5} useArrowKeys={true}
          rightArrow={
            <div className='w-[20px] h-[20px] bg-white'></div>
          }
          leftArrow={
            <div className='w-[20px] h-[20px] bg-white'></div>
          }
        >
            
            <TechCanvas datos={languajes} etiqueta="Programming languajes"/>
            <TechCanvas datos={frameworks} etiqueta="Frameworks"/>
            <TechCanvas datos={libraries} etiqueta="Libraries"/>
            <TechCanvas datos={servicios} etiqueta="Services"/>
            <TechCanvas datos={platforms} etiqueta="Platforms"/>
            <TechCanvas datos={systems} etiqueta="Systems"/>
            <TechCanvas datos={design} etiqueta="Design and Edition"/>
          
        </Carousel>
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


export default Tech