import React from "react";
import { Canvas } from '@react-three/fiber'
import Road from "./components/Road";
import {  Float } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Float speed={0.7} rotationIntensity={1.1} floatIntensity={2.1}>
        <Road position={[-2, 0.3, 4]} />
      </Float>
      
    </Canvas>
  );
}

export default App;
