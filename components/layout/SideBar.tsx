import * as THREE from "three";
import { useRecoilState } from "recoil";
import {
  AtomBumperColors,
  AtomTab,
  AtomGearColors,
  AtomTireWheelColors,
  AtomMaps,
  AtomModel,
  AtomCameraPosition,
  AtomProgress,
  AtomWireFrmae,
} from "@/components/atoms/atoms";
import { BiSolidColorFill } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { PiSelectionBackgroundFill, PiLineSegmentsLight } from "react-icons/pi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";

import React from "react";

export default function SideBar() {
  const [atomProgress, setAtomProgress] = useRecoilState(AtomProgress);
  const sideList = [
    <AiFillCar key={"model"} />,
    <BiSolidColorFill key={"color"} />,
    <BsFillCameraVideoFill key={"camera"} />,
    <PiSelectionBackgroundFill key={"background"} />,
  ];
  const sideListValue = ["model", "color", "camera", "background"];
  const [tab, setTab] = useRecoilState(AtomTab);
  const [wireFrame, setWireFrame] = useRecoilState(AtomWireFrmae);
  const [toggle, setToggle] = useState(true);
  const [isSidelistClick, setIsSidelistClick] = useState<boolean>(false);
  if (atomProgress) {
    return null;
  }

  return (
    <>
      <CiSettings
        className="text-[30px] absolute top-[20px] right-[20px] md:left-[20px]"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      />
      {toggle && (
        <div className="md:max-w-sm md:h-screen md:top-0 h-[280px] overflow-auto fixed right-1 bottom-0 z-[1]  w-full flex-[0.25]  bg-slate-800">
          <div className="relative top-0 w-full md:flex ">
            <div className="tab md:w-[70px] w-full">
              <ul className="flex w-full md:block">
                {sideList.map((li, idx) => (
                  <SideList
                    title={li}
                    key={`color_${idx}`}
                    sideListValue={sideListValue[idx]}
                  />
                ))}
                <li
                  className={`side_list flex h-[60px] cursor-pointer items-center justify-center p-[10px] w-[60px] md:w-[70px] ${
                    wireFrame ? "wire_active" : ""
                  } `}
                  onClick={() => {
                    setWireFrame((prev) => !prev);
                  }}
                >
                  <span className="text-3xl text-white">
                    <PiLineSegmentsLight />
                  </span>
                </li>
              </ul>
            </div>
            <div className="h-full flex-1 p-[20px]">
              {tab === "color" && <SideColorTab />}
              {tab === "camera" && <SideCameraTab />}
              {tab === "background" && <SideBackgroundTab />}
              {tab === "model" && <Models />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const SideList = ({
  title,
  sideListValue,
}: {
  title: any;
  sideListValue: string;
}) => {
  const [tab, setTab] = useRecoilState(AtomTab);
  const [isClick, setIsClick] = useState(sideListValue);

  return (
    <li
      className={`side_list flex h-[60px] cursor-pointer items-center justify-center p-[10px] w-[60px] md:w-[70px] ${
        isClick === tab ? "active" : ""
      }`}
      onClick={() => {
        setTab(sideListValue);
        setIsClick(sideListValue);
      }}
    >
      <span className="text-3xl text-white">{title}</span>
    </li>
  );
};

const SideColorTab = () => {
  return (
    <>
      <Bumpers />
      <Gears />
      <TireWheel />
    </>
  );
};
const Bumpers = () => {
  const colorsLists = [
    "base",
    "#000000",
    "#7A7977",
    "#F7F7F7",
    "#B12B28",
    "#02A1C0",
  ];
  const [accordian, setAccordian] = useState(false);
  return (
    <>
      <div
        className="mb-[20px] text-xl font-bold text-white cursor-pointer flex items-center justify-between w-full"
        onClick={() => {
          setAccordian((prev) => !prev);
        }}
      >
        <h3>BASE </h3>
        <RiArrowRightSLine
          style={{ transform: accordian ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </div>
      {accordian && (
        <ul className="flex flex-col gap-3 mb-[20px]">
          {colorsLists.map((li, idx) => (
            <BumberLists li={li} key={li} idx={idx} colorsLists={colorsLists} />
          ))}
        </ul>
      )}
    </>
  );
};
const Gears = () => {
  const [accordian, setAccordian] = useState(false);
  const colorsLists = [
    "base",
    "#000000",
    "#7A7977",
    "#F7F7F7",
    "#B12B28",
    "#02A1C0",
  ];
  return (
    <>
      <div
        className="mb-[20px] text-xl font-bold text-white cursor-pointer flex items-center justify-between w-full"
        onClick={() => {
          setAccordian((prev) => !prev);
        }}
      >
        <h3>CALIPER</h3>
        <RiArrowRightSLine
          style={{ transform: accordian ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </div>
      {accordian && (
        <ul className="flex flex-col gap-3 mb-[20px]">
          {colorsLists.map((li, idx) => (
            <GearLists li={li} key={li} idx={idx} colorsLists={colorsLists} />
          ))}
        </ul>
      )}
    </>
  );
};
const TireWheel = () => {
  const [accordian, setAccordian] = useState(false);
  const colorsLists = [
    "base",
    "#000000",
    "#7A7977",
    "#F7F7F7",
    "#B12B28",
    "#02A1C0",
  ];
  return (
    <>
      <div
        className="mb-[20px] text-xl font-bold text-white cursor-pointer flex items-center justify-between w-full"
        onClick={() => {
          setAccordian((prev) => !prev);
        }}
      >
        <h3>WHEEL</h3>
        <RiArrowRightSLine
          style={{ transform: accordian ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </div>
      {accordian && (
        <ul className="flex flex-col gap-3 mb-[20px]">
          {colorsLists.map((li, idx) => (
            <TireWheelLists
              li={li}
              key={li}
              idx={idx}
              colorsLists={colorsLists}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const BumberLists = ({
  li,
  idx,
  colorsLists,
}: {
  li: string;
  idx: number;
  colorsLists: string[];
}) => {
  const [colors, setColors] = useRecoilState(AtomBumperColors);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColors(value);
  };

  return (
    <li>
      <label htmlFor={`bumperColor_${li}`} className="flex items-center gap-2">
        <input
          type="radio"
          name="bumperColor"
          id={`bumperColor_${li}`}
          className="h-[15px] w-[15px]"
          onChange={changeHandler}
          checked={colors === li}
          value={li}
        />
        <span
          style={{ color: `${li !== "base" ? li : "white"}` }}
          className="font-bold uppercase "
        >
          {li}
        </span>
      </label>
    </li>
  );
};
const GearLists = ({
  li,
  idx,
  colorsLists,
}: {
  li: string;
  idx: number;
  colorsLists: string[];
}) => {
  const [colors, setColors] = useRecoilState(AtomGearColors);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColors(value);
  };

  return (
    <li>
      <label htmlFor={`gearColor_${li}`} className="flex items-center gap-2">
        <input
          type="radio"
          name="gearColor"
          id={`gearColor_${li}`}
          className="h-[15px] w-[15px]"
          onChange={changeHandler}
          checked={colors === li}
          value={li}
        />
        <span
          style={{ color: `${li !== "base" ? li : "white"}` }}
          className="font-bold uppercase "
        >
          {li}
        </span>
      </label>
    </li>
  );
};
const TireWheelLists = ({
  li,
  idx,
  colorsLists,
}: {
  li: string;
  idx: number;
  colorsLists: string[];
}) => {
  const [colors, setColors] = useRecoilState(AtomTireWheelColors);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColors(value);
  };

  return (
    <li>
      <label
        htmlFor={`TireWheelColor_${li}`}
        className="flex items-center gap-2"
      >
        <input
          type="radio"
          name="TireWheelColor"
          id={`TireWheelColor_${li}`}
          className="h-[15px] w-[15px]"
          onChange={changeHandler}
          checked={colors === li}
          value={li}
        />
        <span
          style={{ color: `${li !== "base" ? li : "white"}` }}
          className="font-bold uppercase "
        >
          {li}
        </span>
      </label>
    </li>
  );
};

const SideBackgroundTab = () => {
  return (
    <>
      <Backgrounds />
    </>
  );
};
const Backgrounds = () => {
  const [accordian, setAccordian] = useState(false);
  // const backgroundlist = [
  //   "blouberg_sunrise_2_1k.hdr",
  //   "envi_2k.hdr",
  //   "KNRT-old_depot_2k.hdr",
  // ];
  const backgroundlist = [
    {
      name: "COAT",
      src: "https://sunhuweb.sgp1.cdn.digitaloceanspaces.com/school_quad_4k.hdr",
    },
    {
      name: "CITY",
      src: "https://sunhuweb.sgp1.cdn.digitaloceanspaces.com/outdoor_umbrellas_4k.hdr",
    },
    {
      name: "BEACH",
      src: "https://sunhuweb.sgp1.cdn.digitaloceanspaces.com/umhlanga_sunrise_4k.hdr",
    },
  ];
  return (
    <>
      <div
        className="mb-[20px] text-xl font-bold text-white cursor-pointer flex items-center justify-between w-full"
        onClick={() => {
          setAccordian((prev) => !prev);
        }}
      >
        <h3>BACKGROUND</h3>
        <RiArrowRightSLine
          style={{ transform: accordian ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </div>
      {accordian && (
        <ul className="flex flex-col gap-3 mb-[20px]">
          {backgroundlist.map((li, idx) => (
            <BackgroundList
              li={li.name}
              key={li.name}
              idx={idx}
              backgroundlist={li.src}
            />
          ))}
        </ul>
      )}
    </>
  );
};
const BackgroundList = ({
  li,
  idx,
  backgroundlist,
}: {
  li: string;
  idx: number;
  backgroundlist: string;
}) => {
  const [map, setMap] = useRecoilState(AtomMaps);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMap(value);
  };

  return (
    <li>
      <label
        htmlFor={`backgroundColor_${li}`}
        className="flex items-center gap-2"
      >
        <input
          type="radio"
          name="backgroundColor"
          id={`backgroundColor_${li}`}
          className="h-[15px] w-[15px]"
          onChange={changeHandler}
          checked={map === backgroundlist}
          value={backgroundlist}
        />
        <span style={{ color: "white" }} className="font-bold uppercase ">
          {li}
        </span>
      </label>
    </li>
  );
};
const Models = () => {
  const [accordian, setAccordian] = useState(false);

  const modellist = ["model1", "model2", "model3", "model4"];
  return (
    <>
      <div
        className="mb-[20px] text-xl font-bold text-white cursor-pointer flex items-center justify-between w-full"
        onClick={() => {
          setAccordian((prev) => !prev);
        }}
      >
        <h3>MODEL</h3>
        <RiArrowRightSLine
          style={{ transform: accordian ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </div>
      {accordian && (
        <ul className="flex flex-col gap-3 mb-[20px]">
          {modellist.map((li, idx) => (
            <ModelsList li={li} key={li} idx={idx} modellist={modellist} />
          ))}
        </ul>
      )}
    </>
  );
};
const ModelsList = ({
  li,
  idx,
  modellist,
}: {
  li: string;
  idx: number;
  modellist: string[];
}) => {
  const [model, setModel] = useRecoilState(AtomModel);
  const [bumperColors, setBumperColors] = useRecoilState(AtomBumperColors);
  const [gearColors, setGearColors] = useRecoilState(AtomGearColors);
  const [wireFrame, setWireFrame] = useRecoilState(AtomWireFrmae);
  const [TireWheelColors, setTireWheelColors] =
    useRecoilState(AtomTireWheelColors);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setModel(value);
    // 모델이 바뀔떄 색상 초기화
    setBumperColors("base");
    setGearColors("base");
    setWireFrame(false);
    setTireWheelColors("base");
  };

  return (
    <li>
      <label htmlFor={`model_${li}`} className="flex items-center gap-2">
        <input
          type="radio"
          name="model"
          id={`model_${li}`}
          className="h-[15px] w-[15px]"
          onChange={changeHandler}
          checked={model === li}
          value={li}
        />
        <span style={{ color: "white" }} className="font-bold uppercase ">
          {li}
        </span>
      </label>
    </li>
  );
};
const SideCameraTab = () => {
  const [accordian, setAccordian] = useState(false);
  const cameraRotation = [
    {
      name: "FRONT",
      rotation: {
        x: -0.7438445817482203,
        y: 23.314792253917872,
        z: 78.3892030664612,
      },
    },
    {
      name: "SIDE",
      rotation: {
        x: 69,
        y: 38,
        z: 22,
      },
    },
    {
      name: "BACK",
      rotation: {
        x: -4.280632566387441,
        y: 33.86386293929124,
        z: -74.32304468777164,
      },
    },
    {
      name: "TOP",
      rotation: {
        x: 0.00008178442246955136,
        y: 81.78630692232865,
        z: -5.551948484514156e-7,
      },
    },
  ];

  return (
    <>
      <div
        className="mb-[20px] text-xl font-bold text-white cursor-pointer flex items-center justify-between w-full"
        onClick={() => {
          setAccordian((prev) => !prev);
        }}
      >
        <h3>CAMERA</h3>
        <RiArrowRightSLine
          style={{ transform: accordian ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </div>
      {accordian && (
        <ul className="flex flex-col gap-3 mb-[30px]">
          {cameraRotation.map((li, idx) => (
            <CameraList
              name={li.name}
              key={li.name}
              idx={idx}
              cameraRotation={li.rotation}
            />
          ))}
        </ul>
      )}
    </>
  );
};
type cameraType = {
  name: string;
  rotation: {
    x: number;
    y: number;
    z: number;
  };
};

const CameraList = ({
  name,
  idx,
  cameraRotation,
}: {
  name: string;
  idx: number;
  cameraRotation: {
    x: number;
    y: number;
    z: number;
  };
}) => {
  const [cameraAtom, setCameraAtom] = useRecoilState(AtomCameraPosition);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const rotation = e.target.dataset.rotation;
    const rotationArry = JSON.parse(rotation!);

    setCameraAtom((prev: cameraType) => ({
      name: value,
      rotation: rotationArry,
    }));
  };

  return (
    <li>
      <label
        htmlFor={`camera_position_${name}`}
        className="flex items-center gap-2"
      >
        <input
          type="radio"
          name="camera_position"
          id={`camera_position_${name}`}
          className="h-[15px] w-[15px]"
          onChange={changeHandler}
          checked={cameraAtom.name === name}
          value={name}
          data-rotation={JSON.stringify(cameraRotation)}
        />
        <span style={{ color: "white" }} className="font-bold uppercase ">
          {name}
        </span>
      </label>
    </li>
  );
};
