import React from "react";
import { Canvas } from '@react-three/fiber'
import Road from "./components/Road";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
     
      <Road/>
    </Canvas>
  );
}

export default App;
