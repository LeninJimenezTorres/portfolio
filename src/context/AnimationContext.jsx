import React, { createContext, useState, useContext } from 'react';

const AnimationContext = createContext(undefined);

export const AnimationProvider = ({ children }) => {
  const [heroYPosition, setHeroYPosition] = useState(0);
  const [introYPosition, setIntroYPosition] = useState(0);
  const [showWebSection, setShowWebSection] = useState(false);
  const [showMobSection, setShowMobSection] = useState(false);
  const [showPathSection, setShowPathSection] = useState(false);
  
  const value = {
    heroYPosition,
    setHeroYPosition,
    introYPosition,
    setIntroYPosition,
    showWebSection,
    setShowWebSection,
    showMobSection,
    setShowMobSection,
    showPathSection,
    setShowPathSection,
  };
  
  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  return useContext(AnimationContext);
};

export default AnimationContext;