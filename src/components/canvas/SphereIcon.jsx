import { Canvas } from 'react-three-fiber'
import { OrbitControls, Decal, Float, Preload, useTexture, Sphere } from '@react-three/drei'
import Loader from '../Loader'
import { MeshStandardMaterial } from 'three';
import React, { useState, Suspense } from 'react'
import CanvasLoader from '../Loader'


const SphereIcon = ( props ) => {
    const [decal] = useTexture([props.imgUrl])
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                {/* 
                <Sphere args={[1, 32, 32]}>
                    <meshStandardMaterial color="blue" roughness={0.5} metalness={0.7} />
                </Sphere> 


                <boxGeometry  args={[1,1,1]} />
                <sphereGeometry  args={[1,72,72]} />
            */}
                
                <sphereGeometry  args={[1,30,30]} />
                <meshStandardMaterial
                    color='#9a00ff'
                    //color='#ffffff'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                    transparent
                    visible={false}
                />
                <Decal
                    position={[0, 0, 0.5]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                    
                />

            </mesh>
        </Float>
    )
}

const SphereCanvas = ({icon,name})=>{
    return(
        <Canvas
            frameloop='always'
            gl={{preserveDrawingBuffer:true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                />
                <SphereIcon imgUrl={icon} />
            </Suspense>
            <Preload all/> 
        </Canvas>
    )
}

export {SphereCanvas}