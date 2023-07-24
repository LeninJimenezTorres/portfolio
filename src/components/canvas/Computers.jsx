import React, {Suspense, useState, useEffect, lazy, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useFrame } from 'react-three-fiber';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./boy_with_sky/scene.gltf')
  
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.006; // Ajusta la velocidad y eje de rotación según tus necesidades
    }
  });

  const [desplaza, setdesplaza] = useState(0)
  return (
    <mesh  ref={meshRef}>
      <hemisphereLight intensity={0.9} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={0.1} castShadow shadow-mapSize={1024}/>
      <spotLight position={[5,60,15]} angle={0.15} penumbra={1} intensity={0.1} castShadow shadow-mapSize={1024}/>
      <spotLight position={[480,860,10]} angle={0.91} penumbra={1} intensity={0.5} castShadow shadow-mapSize={1024}/>
      <spotLight position={[480,860,10]} angle={0.91} penumbra={1} intensity={0.8} castShadow shadow-mapSize={1024}/>
      <primitive 
        object={computer.scene}
        scale={ isMobile ? 0.35:0.4}
        position={isMobile ? [1.9,-1.0, -2.3] : [7.9,-1.0, 2.3]}
        rotation={[-0.05,1.0,-0.0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  },[])

  

  return(
    <Canvas
      frameloop='always'
      shadows
      camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.05}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas