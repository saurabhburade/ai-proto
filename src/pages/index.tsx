import Image from "next/image";
import { Inter } from "next/font/google";
import AppView from "@/views/AppView/AppView";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <main className={inter.className}>
      <AppView />
    </main>
  );
}
