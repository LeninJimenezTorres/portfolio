import React, {useState, useEffect, useRef} from 'react'
import { stylesVariable } from '../menustyles'
import { motion, useAnimation } from 'framer-motion'
import { credentials } from '../constants'
import { textVariant } from '../utils/motion'
import Credential from './canvas/Credential'

function Credentials() {

  const [width, setwidth] = useState(window.innerWidth)
  const [height, setheight] = useState(window.innerHeight)
  
  const [viewed, setviewed] = useState(1)
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  


  const animationControls = useAnimation();
  useEffect(() => {
    animationControls.start({
      x: viewed * (-divRef.current.clientWidth) + divRef.current.clientWidth * 0.4,
    });
  }, [viewed, animationControls]);

  const divRef = useRef(null);
  const getWidth = () => divRef.current.clientWidth;

    // Ejemplo de uso en useEffect, podrías usarlo según tus necesidades
  useEffect(() => {
    const width = getWidth();
    console.log('Ancho del div:', width);
  }, []);


  return (
    <div className='w-full h-screen flex flex-col' style={{marginBottom:'15px'}}>
      <motion.div 
          variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-1/5 w-full'
      >
        <p className={`${stylesVariable.sectionSubText} pt-10 flex pl-10 h-1/2 w-full text-justify `}>My certifications and support</p>
        <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Credentials</h2>
      </motion.div>
      <div className='z-0 w-4/5 h-4/5 flex flex-col justify-center content-center self-center'>
        <div className='w-full h-4/5 flex flex-row justify-left content-center self-center'>
          {
            credentials.map((item,index)=>(
              <div key={index} style={{width:width/2, height:`${height*0.5}px`, marginLeft:'7%'}} className={`flex flex-row justify-center self-center`}>
                <motion.group 
                  key={index} 
                  animate={animationControls}
                  transition={{
                    duration: 1.5, // Duración de la animación en segundos
                    ease: "easeOut", // Tipo de easing, por ejemplo, "linear", "ease", "ease-in", "ease-out", "ease-in-out", etc.
                    delay: 0.0, // Retardo antes de que comience la animación en segundos
                    times: [0.2, 0.8, 1], // Puntos en el tiempo donde ocurren cambios en la animación
                  }}
                  ref={divRef}
                  className=' w-full h-full flex flex-col justify-left content-center self-center'
                >
                  <Credential item={item} highlighted={index===viewed?1:0.4} angle={index===viewed?'0deg':'30deg'} scale={index===viewed?'100%':'50%'}/>
                </motion.group>
              </div>
            ))
          }
        </div>
      </div>
      <div className='z-1000 w-full bg-black h-1/5 flex flex-row justify-center content-center self-center mb-15'>
        <div className='w-1/3 bg-black h-1/5 flex flex-row justify-center content-center self-center'>
          <div 
            className='w-1/2 h-full justify-center content-center self-center'
            onClick={()=>{
              if (viewed>0) {
                setviewed(viewed-1)
              }
              console.log("Viewed: "+viewed)
            }}
          > 
            {`< Previous`}
          </div>
          <div 
            className='w-1/2 h-full justify-center content-center self-center '
            onClick={()=>{
              if (viewed<credentials.length-1) {
                setviewed(viewed+1)
              }
              console.log("Viewed: "+viewed)
            }}
          > 
            {`Next >`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credentials