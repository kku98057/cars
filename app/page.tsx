"use client";

import { Model } from "@/components/objects/Model";
import { Model2 } from "@/components/objects/Model2";
import * as THREE from "three";

import {
  Center,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useEnvironment,
  useProgress,
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
import Loading from "@/components/layout/Loading";

export default function Page() {
  return (
    <section>
      <div className="top-0 h-screen w-screen">
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
  const [color, setColor] = useState("white");
  const envMap = useEnvironment({
    files:
      "https://sunhuweb.sgp1.cdn.digitaloceanspaces.com/sunset_fairway_4k.hdr",
  });
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
      camera.updateProjectionMatrix();
    }
  }, [width, height, camera]);

  return (
    <>
      <Environment files={`/${mapFile}`} ground={{ height: 20, radius: 130 }} />
      {/* <Environment
        files={
          "https://sunhuweb.sgp1.cdn.digitaloceanspaces.com/sunset_fairway_8k.hdr"
        }
        ground={{ height: 20, radius: 130 }}
      /> */}

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
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center className="w-screen h-screen fixed top-0 z-10">
      <span className=" text-red-50">{progress} % loaded</span>
    </Html>
  );
}
