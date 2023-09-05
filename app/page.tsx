"use client";

import { Model } from "@/components/objects/Model";
import { Model2 } from "@/components/objects/Model2";
import * as THREE from "three";

import {
  AccumulativeShadows,
  Center,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  useProgress,
} from "@react-three/drei";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  AtomCameraPosition,
  AtomMaps,
  AtomModel,
  AtomOrbitEnable,
  AtomProgress,
} from "@/components/atoms/atoms";
import { useControls, button, buttonGroup, folder } from "leva";
import { Model3 } from "@/components/objects/Model3";
import { Model4 } from "@/components/objects/Model4";
import gsap from "gsap";
import Image from "next/image";
import InLoader from "@/components/InLoader";

export default function Page() {
  return (
    <section>
      <div className="top-0 w-screen h-screen">
        <Canvas>
          <Suspense fallback={<Loader />}>
            <MyScene />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
type nowPosition = {
  x: number;
  y: number;
  z: number;
};
const MyScene = () => {
  const [mapFile, setMapFile] = useRecoilState(AtomMaps);

  const [model, setModel] = useRecoilState(AtomModel);
  const [orbitEnable, setOrbitEnable] = useRecoilState(AtomOrbitEnable);
  const [cameraPosition, setCameraPosition] =
    useRecoilState(AtomCameraPosition);

  // const { rotation, orbitContol, position, wire } = useControls("model", {
  //   transform: folder({
  //     rotation: {
  //       step: 0.01,
  //       min: -10,
  //       max: 10,
  //       value: 1,
  //     },
  //   }),
  //   orbitContol: orbitEnable,
  //   position: [0, 0, 0],
  //   wire: false,
  // });

  const { width, height } = useThree((state) => state.size);
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.aspect = width / height;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [width, height, camera]);
  // https://threejs.org/examples/textures/memorial.hdr

  return (
    <>
      <Environment files={`${mapFile}`} ground={{ height: 25, radius: 130 }} />

      {model === "model1" && (
        <Model position={[0, 9.5, 0]} rotation={[0, 0, 0]} scale={15} />
      )}

      {model === "model2" && (
        <Model2
          position={[0, -1, 0]}
          rotation={[0, Math.PI / 8, 0]}
          scale={12}
        />
      )}
      {model === "model3" && (
        <Model3
          position={[0, 0, 0]}
          rotation={[0, Math.PI / 8, 0]}
          scale={12}
        />
      )}
      {model === "model4" && (
        <Model4
          position={[0, 0.2, 0]}
          rotation={[0, Math.PI / 8, 0]}
          scale={12}
        />
      )}
      <ContactShadows
        opacity={0.8}
        scale={100}
        blur={1}
        far={100}
        resolution={1920}
        color="#000000"
        position={[0, 0, 0]}
      />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
        maxDistance={120}
        minDistance={70}
      />
      <PerspectiveCamera
        makeDefault
        position={[
          cameraPosition.rotation.x,
          cameraPosition.rotation.y,
          cameraPosition.rotation.z,
        ]}
        fov={50}
      />
    </>
  );
};
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [atomProgress, setAtomProgress] = useRecoilState(AtomProgress);

  if (progress >= 100) {
    setAtomProgress(false);
  }
  return (
    <Html
      center
      className="fixed top-0 z-10 flex items-center justify-center w-screen h-screen bg-slate-800"
    >
      <span className="text-5xl text-red-50">{progress.toFixed(0)}%</span>
    </Html>
  );
}
