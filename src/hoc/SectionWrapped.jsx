import React from 'react'
import { motion } from 'framer-motion'
import { stylesVariable } from '../menustyles'
import { staggerContainer } from '../utils/motion'

const SectionWrapped = (props) => {
    function HOC(){
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once:true, amount:0.25}}
                className={`${stylesVariable.padding} max-w-7xl mx-auto relative z-0`}
            >
                {props.children}
                {/* <Component /> */}
                 
            </motion.section>
        )
    }
}

export default SectionWrapped