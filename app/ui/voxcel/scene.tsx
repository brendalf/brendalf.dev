"use client";

import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

export default function VoxcelScene() {
  const [table, wizard] = useLoader(OBJLoader, ["/table.obj", "/wizard.obj"]);

  const target = new THREE.Vector3(30, -20, 20);
  const initialCameraPosition = new THREE.Vector3(100, 5, 80);

  const camera = new THREE.PerspectiveCamera();
  camera.position.copy(initialCameraPosition);
  camera.lookAt(target);

  return (
    <div className="lg:mt-12 h-[200px] lg:w-[400px] lg:h-[400px]">
      <Canvas camera={camera}>
        <ambientLight intensity={Math.PI * 0.8} />
        <spotLight
          position={[0, 20, 0]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[0, 20, 10]} decay={0} intensity={Math.PI} />
        <mesh>
          <primitive
            matrix4={new THREE.Matrix4()}
            scale={new THREE.Vector3(-1, 1, 1)}
            position={[65, -40, 0]}
            object={table}
          />
        </mesh>
        <mesh>
          <primitive
            position={[45, -40, 35]}
            scale={1.8}
            rotation={[0, Math.PI * 1.5, 0]}
            object={wizard}
          />
        </mesh>
        <OrbitControls camera={camera} target={target} />
      </Canvas>
    </div>
  );
}
