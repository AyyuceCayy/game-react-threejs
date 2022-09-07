import * as THREE from 'three'
import React, { useState, useRef } from 'react'


function Road(props) {


    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    
    const changeRotation = () => {
      setClicked(!clicked)
    }
    return (
        <mesh
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        scale={clicked ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        {...props}
        >
        <boxGeometry />
        
        <meshBasicMaterial color={hovered ? 'hotpink' : 'aquamarine'} />
      </mesh>
    )
}



export default Road;
