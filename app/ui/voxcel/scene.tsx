"use client";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((_, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(_) => setActive(!active)}
      onPointerOver={(_) => setHover(true)}
      onPointerOut={(_) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function VoxcelScene() {
  // const gltf = useLoader(GLTFLoader, "/dog.glb");
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* <primitive object={gltf.scene} /> */}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
