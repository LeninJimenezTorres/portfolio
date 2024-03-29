import React, { Suspense} from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import Pepito from '../Loader'

const EarthCanvas = () =>{
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov:45,
        near: 0.1,
        far:200,
        position: [-4,3,6]
      }}
    >
      <Suspense fallback={<Pepito/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

const Earth = () => {
  const earth = useGLTF("./oceanic/scene.gltf")

  return (
    <primitive
      object={earth.scene}
      scale={1}
      position-y={0}
    />  
  )
}

export default EarthCanvas