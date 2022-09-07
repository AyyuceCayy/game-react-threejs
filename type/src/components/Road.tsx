import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    bridge_pillar: THREE.Mesh;
  };
  materials: {
    bridge_pillar: THREE.MeshStandardMaterial;
  };
};

export default function Road({ ...props }: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./assets/bridge_pillar.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={30}>
      <mesh
        geometry={nodes.bridge_pillar.geometry}
        material={materials.bridge_pillar}
      />
    </group>
  );
}

useGLTF.preload("./assets/bridge_pillar.glb");