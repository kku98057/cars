"use client";
import { RecoilRoot } from "recoil";
import RecoilProvider from "../RecoilProvider";
import SideBar from "./SideBar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <main className="bg min-h-screen flex-1">{children}</main>
      <SideBar />
    </RecoilRoot>
  );
}
