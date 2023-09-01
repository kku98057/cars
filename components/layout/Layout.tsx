"use client";
import { RecoilRoot } from "recoil";

import SideBar from "./SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <main className="bg min-h-screen flex-1">{children}</main>
      <SideBar />
    </RecoilRoot>
  );
}
