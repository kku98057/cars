import { atom } from "recoil";

export const AtomBumperColors = atom<string>({
  key: "AtomBumperColorsKey",
  default: "base",
});
export const AtomTab = atom({
  key: "AtomTabKey",
  default: "model",
});
export const AtomGearColors = atom<string>({
  key: "AtomGearColorsKey",
  default: "base",
});
export const AtomTireWheelColors = atom<string>({
  key: "AtomTireWheelColorsKey",
  default: "base",
});
export const AtomMaps = atom<string>({
  key: "AtomMapsKey",
  default: "blouberg_sunrise_2_1k.hdr",
});
export const AtomModel = atom<string>({
  key: "AtomModelKey",
  default: "model1",
});
export const AtomCameraPosition = atom<cameraType>({
  key: "AtomCameraPositionKey",
  default: {
    name: "옆면",
    rotation: {
      x: 69,
      y: 38,
      z: 22,
    },
  },
});
export const AtomOrbitEnable = atom({
  key: "AtomOrbitEnableKey",
  default: true,
});

type cameraType = {
  name: string;
  rotation: {
    x: number;
    y: number;
    z: number;
  };
};

export const AtomProgress = atom({
  key: "AtomProgressKay",
  default: true,
});

export const AtomWireFrmae = atom({
  key: "AtomWireFrmaeKey",
  default: false,
});
