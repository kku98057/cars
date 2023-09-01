import SideBar from "@/components/layout/SideBar";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilProvider from "@/components/RecoilProvider";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Cars",
//   description: "3d Cars",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head />
      <body className="flex">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
