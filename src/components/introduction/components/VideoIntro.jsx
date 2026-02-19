import React from 'react';
import backgroundVideo from "../../../assets/intro_small.mp4";

function VideoIntro() {
  return (
    <video
      muted
      autoPlay
      loop
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
}

export default VideoIntro;