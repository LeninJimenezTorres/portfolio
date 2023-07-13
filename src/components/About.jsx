import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { stylesVariable } from '../menustyles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={stylesVariable.sectionHeadText}>Introduction</p>
        <h2 className={stylesVariable.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}>

      </motion.p>
    </>
  )
}

export default About