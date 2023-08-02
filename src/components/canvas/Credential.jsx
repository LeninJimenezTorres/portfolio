import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Image, OrbitControls, Preload, Text, useTexture, Decal, Float } from '@react-three/drei'

import Pepito from '../Loader'
import { lerp } from 'three/src/math/MathUtils'

const Credential = ({ item, highlighted, angle, scale }) => {

    return (

        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 0, 8]
            }}
            className='w-screen h-screen flex flex-col justify-left content-center self-center'
            style={{ opacity: highlighted, transitionDuration: '2s', transitionDelay: '0.25s', scaleX: `${scale}` }}
        >
            <Suspense
                fallback={<Pepito />}
                className='w-full h-full flex flex-col justify-left content-center self-center'
            >
                <hemisphereLight intensity={0.9} groundColor="black" />
                <pointLight intensity={1} />
                <OrbitControls
                    autoRotate={false}
                    rotateSpeed={0.5}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Plane highlighted={highlighted} item={item} />
                <Texto highlighted={highlighted} item={item} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

const Texto = ({ highlighted, item }) => {
    const textRef = useRef();
    useFrame(() => {
        if (textRef.current) {
            if (highlighted >= 0.7) {
                textRef.current.position.z = 2;
                textRef.current.position.y = -0.5;
            }
            else {
                textRef.current.position.z = -1;
                textRef.current.position.y = -1.5;
            }
        }
    });
    return (
        <mesh
            position-z={0}
            castShadow
            receiveShadow
            scale={1}
            ref={textRef}
        >
            <Text
                position={[0, -1.0, 0]}
                maxWidth={2}
                window={1.9}
                anchorX={"center"}
                anchorY={'top'}
                fontSize={0.2}
                color={"white"}
                textAlign='center'
                onClick={() => window.open(item.url, "_blank")}
            >
                {
                    item.title
                }
            </Text>
        </mesh>
    )
}

const Plane = ({ highlighted, item }) => {

    const meshRef = useRef();
    const inRef = useRef();
    const ballRef = useRef();
    useFrame(() => {
        if (meshRef.current) {
            if (highlighted >= 0.7) {
                meshRef.current.position.z = -1;
            }
            else {
                meshRef.current.position.z = -4;
            }
        }
    });
    useFrame(() => {
        if (inRef.current) {
            if (highlighted >= 0.7) {
                inRef.current.opacity = lerp(0.5,0,0.07);;
                inRef.current.color.set("#5590fa");
                inRef.current.metalness=0.95;
                inRef.current.roughness=0;
            }
            else{
                inRef.current.opacity = 0.3;
                inRef.current.color.set("white");
                inRef.current.metalness=0.5;
                inRef.current.roughness=0.4;
            }
        }
    });
    const [decal] = useTexture([item.image])
    return (
        <mesh
            position-y={0}
            castShadow
            receiveShadow
            scale={2.75}
            ref={meshRef}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 20, 20]} intensity={1} />
            <sphereGeometry args={[1, 40, 40]} />
            <meshStandardMaterial
                color='#ffffff'
                polygonOffset
                polygonOffsetFactor={-5}
                flatShading
                transparent
                visible={true}
                ref={inRef}
                opacity={0.05}
            />
            <Decal
                position={[0, 0, 0.5]}
                rotation={[2 * Math.PI, 0, 6.25]}
                scale={1}
                map={decal}
                flatShading

            />
        </mesh>
    )
}

export default Credential