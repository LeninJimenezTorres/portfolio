import React, { useState } from "react";
import { motion } from "framer-motion";
import {stylesVariable} from "../menustyles";

const mockApps = [
  { id: 1, name: "YouTube", img: "https://picsum.photos/400/700?1" },
  { id: 2, name: "Instagram", img: "https://picsum.photos/400/700?2" },
  { id: 3, name: "Twitter", img: "https://picsum.photos/400/700?3" },
  { id: 4, name: "Spotify", img: "https://picsum.photos/400/700?4" },
  { id: 5, name: "Chrome", img: "https://picsum.photos/400/700?5" },
  { id: 6, name: "Maps", img: "https://picsum.photos/400/700?6" },
  { id: 7, name: "Messages", img: "https://picsum.photos/400/700?7" },
];

export default function MobileWork() {
  const [offset, setOffset] = useState(0);
  
  const handleSwipe = (direction) => {
    if (direction === "left" && offset < mockApps.length - 1) setOffset(offset + 1);
    if (direction === "right" && offset > 0) setOffset(offset - 1);
  };
  
  return (
    <div
      className="relative w-screen overflow-x-hidden h-screen bg-white flex items-center justify-center overflow-hidden flex-1 flex-row"
      onWheel={(e) => handleSwipe(e.deltaY > 0 ? "left" : "right")}
      onTouchStart={(e) => (this.touchStart = e.touches[0].clientX)}
      onTouchMove={(e) => {
        if (!this.touchStart) return;
        const diff = this.touchStart - e.touches[0].clientX;
        if (Math.abs(diff) > 50) {
          handleSwipe(diff > 0 ? "left" : "right");
          this.touchStart = null;
        }
      }}
    >
      {/*<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-800/90 backdrop-blur-sm" />*/}
      
      <div className="relative w-[400px] h-[650px] flex-1 flex-col">
        <div className="flex w-[100%] h-[30%] justify-center align-middle">
          <h1 className={`${stylesVariable.heroHeadText} font-mono text-black`}>
            Apps Background
          </h1>
        </div>
        <div className="flex w-[100%] h-[20%] justify-center align-middle">
          <p className={`${stylesVariable.heroSubText} mt-2 text-white-200`} style={{}}>
            Native App
          </p>
        </div>
        <div className="flex w-[100%] h-[50%] justify-center align-middle">
          <p className={`${stylesVariable.heroSubText} mt-2 text-black`} style={{}}>
            Cross-platform App
          </p>
        </div>
      </div>
      
      <div className="relative w-[400px] h-[650px] flex-1 justify-center align-middle items-center ">
        {[...mockApps].reverse().map((app, reversedIndex) => {
          const index = mockApps.length - 1 - reversedIndex;
          const relativeIndex = index - offset;
          
          const scale = 1 - Math.max(0, relativeIndex) * 0.07;
          const translateX = Math.max(0, relativeIndex) * 70;
          const translateY = Math.max(0, relativeIndex) ;
          const opacity = relativeIndex < 0 ? 0 : 1 - relativeIndex * 0.1;
          const zIndex = 100 - index;
          
          return (
            <motion.div
              key={app.id}
              className="absolute rounded-3xl overflow-hidden shadow-2xl bg-black/30 cursor-pointer select-none"
              animate={{
                scale,
                x: translateX,
                y: translateY,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{
                width: 340,
                height: 600,
                zIndex,
                left: "10%",
                transform: `translateX(-50%)`,
              }}
            >
              <img
                src={app.img}
                alt={app.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-lg font-semibold">
                {app.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
