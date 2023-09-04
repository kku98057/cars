import { Html, useProgress } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { AtomProgress } from "./atoms/atoms";

export default function InLoader() {
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
