"use client";
import { RecoilRoot } from "recoil";
import RecoilProvider from "../RecoilProvider";
import SideBar from "./SideBar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <main className="flex-1 min-h-screen bg">{children}</main>
      <SideBar />
    </RecoilRoot>
  );
}
