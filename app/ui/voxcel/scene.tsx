"use client";

import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

export default function VoxcelScene() {
  const table = useLoader(OBJLoader, "/table.obj");
  const wizard = useLoader(OBJLoader, "/wizard.obj");

  const target = new THREE.Vector3(0, 1.2, 0);
  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    40,
    20 * Math.cos(0.2 * Math.PI),
  );

  const scale = 500 * 0.005 + 4.8;
  const camera = new THREE.OrthographicCamera(
    -scale,
    scale,
    scale,
    -scale,
    0.01,
    50000,
  );
  camera.position.copy(initialCameraPosition);
  camera.lookAt(target);

  return (
    <div className="h-[280px]">
      <Canvas camera={camera}>
        <ambientLight intensity={Math.PI} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <primitive position={[0, -40, 0]} object={table} />
        <primitive
          position={[45, -40, 35]}
          scale={1.8}
          rotation={[0, Math.PI * 1.5, 0]}
          object={wizard}
        />
        <OrbitControls camera={camera} target={target} />
        <Stats />
      </Canvas>
    </div>
  );
}
