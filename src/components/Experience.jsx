import React, {useRef} from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { stylesVariable } from '../menustyles'
import { experiences } from '../constants'
import { SectionWrapped } from '../hoc'
import { textVariant } from '../utils/motion'

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({experience})=>{
  return (
   <VerticalTimelineElement 
    contentStyle={{padding:'10', background:'#1d1836', color:'#fff'}}
    contentArrowStyle={{ borderWidth:'200', borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background:experience.iconBg }}
    icon={
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[100%] h-[100%] object-contain'
        />
      </div>
    }
    className=''
   >
    <div>
      <h3 className='text-white text-[24px] font-bold '>{experience.title}</h3>
    </div>

    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider text-justify'
        >
          {point}
        </li>
      ))}
    </ul>

   </VerticalTimelineElement>
  )
}

const Experience = ({experienceRef, scrollFunc}) => {
  const handleScroll = () => {
    scrollFunc();
  };
  return (
    <div ref={experienceRef} className='flex flex-col justify-center items-center content-center align-middle h-screen w-full p-0 mb-0'>
      <div ref={experienceRef} className='flex flex-col justify-center items-center content-center align-middle h-4/5 w-full p-0 mb-0 overflow-y-scroll'>
        <motion.div
          variants={textVariant(0.25)} 
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className='justify-center items-center content-center align-middle h-1/6 w-full p-0 mb-0'
        >
          <p className={`${stylesVariable.sectionSubText} pt-5 flex pl-10 h-1/2 w-full text-justify `}>What I have done do far</p>
          <h2 className={`${stylesVariable.sectionHeadText} flex pl-10 h-1/2 w-full text-justify` }>Professional experience</h2>
        </motion.div>

        <div className='mt-0 flex flex-col w-full h-5/6 pt-5'>
          <VerticalTimeline>
            {
              experiences.map((experience,index)=>(
                <ExperienceCard key={index} experience={experience}/>
              ))
            }
          </VerticalTimeline>
        </div>

      </div>

      <div onClick={console.log("In progress")} className='h-1/5 mb-100 bottom-32 w-full flex justify-center items-center'>
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

export default Experience