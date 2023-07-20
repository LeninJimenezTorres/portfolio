import React from 'react'
import { Html, useProgress } from '@react-three/drei'


const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className='canvas-load'>
      </span>
      <p 
        style={{
          fontSize:14,
          color:'#f1f1f1',
          fontWeight:800,
          marginTop:40,
          backgroundColor: 'rgba(0,0,0,1)',
          width:70,
          height:70,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems:'center',
          alignSelf:'center',
          textAlignVertical:'center',
          display:'flex',
          opacity:0.7,
        }}
      >
        {
          progress.toFixed(2)
        }%
      </p>
    </Html>
  )
}

export default Loader