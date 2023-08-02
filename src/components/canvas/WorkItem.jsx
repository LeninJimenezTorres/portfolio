import React, { Suspense, useEffect, useRef, useState} from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Image, OrbitControls, Preload, Text, useGLTF } from '@react-three/drei'

import Pepito from '../Loader'
import { animate, useMotionValue } from 'framer-motion'
import { atom, useAtom } from 'jotai'


const WorkItemCanvas = ({item, highlighted, angle, scale}) =>{
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov:45,
        near: 0.1,
        far:200,
        position: [0,0,8]
      }}
      className='w-screen h-screen flex flex-col justify-left content-center self-center'
      style={{ opacity: highlighted, transitionDuration:'2s', scaleX:`${scale}`}}
      >
      <Suspense 
        fallback={<Pepito/>}
        className='w-full h-full flex flex-col justify-left content-center self-center'
      >
        <hemisphereLight intensity={0.9} groundColor="black"/>
        <pointLight intensity={1}/>
        <OrbitControls
          autoRotate={false}
          rotateSpeed={0.5}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
        <WorkItem  item={item} highlighted={highlighted}/>
        <Image position={[0,0,0.2]} scale={[4.5,2.2,2.2]} url={item.image} />
        <Text 
          position={[0,-1.5,0.2]} 
          maxWidth={2}
          window={1.9} 
          anchorX={"center"} 
          anchorY={'top'} 
          fontSize={0.2} 
          color={"white"}
          textAlign='center'
          onClick={()=>window.open(item.url,"_blank")}
        >
          {
            item.title
          }
        </Text>
      </Suspense>
    </Canvas>
  )
}

const WorkItem = ({item, highlighted}) => {
  return (
      <mesh 
        position-z={0} 
        castShadow 
        receiveShadow 
        scale={2.75}
      >
          <planeGeometry  args={[2,1.5]}/>
          <meshStandardMaterial
            color='#404050'
            transparent={false}
            opacity={0}
          />
      </mesh>  
  )
}

export default WorkItemCanvas