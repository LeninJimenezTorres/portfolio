// src/context/AnimationContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const AnimationContext = createContext(undefined);

// 2. Crear el Provider
export const AnimationProvider = ({ children }) => {
  // Estado para la posición Y de Hero (o cualquier otro valor)
  const [heroYPosition, setHeroYPosition] = useState(0);
  
  const value = {
    heroYPosition,
    setHeroYPosition,
  };
  
  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

// 3. Hook personalizado para fácil consumo
export const useAnimationContext = () => {
  return useContext(AnimationContext);
};

// Exportar el Provider para usarlo en App.js
export default AnimationContext;