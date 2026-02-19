import React, {useState} from 'react'
import backgroundVideo from '../../assets/intro_small.mp4';
import {useAnimationContext} from "../../context/AnimationContext";
import VideoIntro from "./components/VideoIntro";

const Intro = ({scrollFunc }) => {
  const [clickedOnce, setClickedOnce] = useState(false);
  const { setShowMobSection } = useAnimationContext();
  
  const handleScroll = () => {
    console.log("UP");
    if (clickedOnce) return;
    setClickedOnce(true);
    
    scrollFunc();
    setShowMobSection(true)
  };
  
  return (
    <div className='relative flex items-center justify-center w-screen h-screen'>
      <VideoIntro />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center"
        style={{ background: "rgba(0,0,0,0.0)" }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-stroke-black">
          Let me show you my work
        </h1>
        <p className="text-xl sm:text-2xl bg-black mt-3" onClick={handleScroll}>
          [Click]
        </p>
      </div>
    
    </div>
  )
}

export default Intro