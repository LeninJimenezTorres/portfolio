import React from 'react';
import {motion} from "framer-motion";

function CircleSlider(props) {
  return (
    <div className='w-[25px] h-[25px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
      <motion.div
        animate={{ y:[0, 5, 0] }}
        transition={{ duration:1.5, repeat: Infinity, repeatType: "loop" }}
        className='w-3 h-1 rounded-full bg-secondary mb-1'
      />
    </div>
  );
}

export default CircleSlider;