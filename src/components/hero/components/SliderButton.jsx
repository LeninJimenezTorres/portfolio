import React from 'react';
import {motion} from "framer-motion";

function SliderButton(props) {
  return (
    <div className="relative w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-end p-2 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full bg-secondary/40"
        style={{
          height: `${props.progress}%`,
          transition: 'height 0.1s linear',
        }}
      />
      <motion.div
        animate={{
          y: [0, -24, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1 relative z-10"
      />
    </div>
  );
}

export default SliderButton;