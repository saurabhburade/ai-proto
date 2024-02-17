import Image from "next/image";
import { Inter } from "next/font/google";
import AppView from "@/views/AppView/AppView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <AppView />
    </main>
  );
}
