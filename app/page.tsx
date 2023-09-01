"use client";

import { Model } from "@/components/objects/Model";
import { Model2 } from "@/components/objects/Model2";

import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useEnvironment,
} from "@react-three/drei";

import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { Suspense, useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import {
  AtomCameraPosition,
  AtomMaps,
  AtomModel,
  AtomOrbitEnable,
} from "@/components/atoms/atoms";
import { useControls, button, buttonGroup, folder } from "leva";
import { Model3 } from "@/components/objects/Model3";
import { Model4 } from "@/components/objects/Model4";

export default function Page() {
  return (
    <section>
      <div className="top-0 h-screen w-screen">
        <Canvas>
          <MyScene />
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
  const [color, setColor] = useState("white");
  const envMap = useEnvironment({ files: "/envi_2k.hdr" });
  const [mapFile, setMapFile] = useRecoilState(AtomMaps);
  const [model, setModel] = useRecoilState(AtomModel);
  const [orbitEnable, setOrbitEnable] = useRecoilState(AtomOrbitEnable);
  const [cameraPosition, setCameraPosition] =
    useRecoilState(AtomCameraPosition);

  const { rotation, orbitContol, position, wire } = useControls("model", {
    transform: folder({
      rotation: {
        step: 0.01,
        min: -10,
        max: 10,
        value: 1,
      },
    }),
    orbitContol: orbitEnable,
    position: [0, 0, 0],
    wire: false,
  });

  const { camera, controls, scene } = useThree();

  return (
    <>
      <Suspense fallback={null}>
        <Environment
          files={`/${mapFile}`}
          ground={{ height: 20, radius: 130 }}
        />
        {model === "model1" && (
          <Model position={[0, 10, 0]} rotation={[0, 0, 0]} scale={15} />
        )}
        {model === "model2" && (
          <Model2
            position={[0, 0, 0]}
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
            position={[0, 0, 0]}
            rotation={[0, Math.PI / 8, 0]}
            scale={12}
          />
        )}
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
        maxDistance={100}
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
