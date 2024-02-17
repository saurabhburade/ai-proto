import PrimaryColorSlider from "@/components/PrimaryColorSlider";
import React from "react";
import TodaysTasks from "./components/TodaysTasks";
import AIModels from "./components/AIModels";
import ImageProcessor from "./components/ImageProcessor";

type Props = {};

function AppView({}: Props) {
  return (
    <div className="container mx-auto  space-y-[16px] ">
      <PrimaryColorSlider />
      <div className="p-5 bg-base-200 rounded-xl  space-y-[16px]">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-[16px]">
          <TodaysTasks />
          <AIModels />
          <TodaysTasks />
        </div>
        <ImageProcessor />
      </div>
    </div>
  );
}

export default AppView;
