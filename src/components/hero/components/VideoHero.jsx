import React from 'react';
import {Z_INDEX_INTRO} from "../../../constants/zIndexComponents";
import backgroundVideo from "../../../assets/start.mp4";

function VideoHero(props) {
  return (
    <div
      className="flex items-center justify-center absolute"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: Z_INDEX_INTRO,
        opacity: props.progress / 100,
        transition: 'opacity 0.2s ease-out',
      }}
    >
      <video
        muted
        autoPlay
        loop={true}
        className="inset-0 w-full h-full object-cover absolute"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoHero;