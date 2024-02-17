import PrimaryColorSlider from "@/components/PrimaryColorSlider";
import React from "react";
import TodaysTasks from "./components/TodaysTasks";
import AIModels from "./components/AIModels";
import ImageProcessor from "./components/ImageProcessor";

import Resizable from "@/components/Resizable";
import dynamic from "next/dynamic";
const DragAndDropContainer = dynamic(
  () => import("./components/DragAndDropContainer"),
  {
    ssr: false,
  }
);
type Props = {};

function AppView({}: Props) {
  return (
    <div className="container mx-auto  space-y-[16px] my-10">
      <PrimaryColorSlider />

      <div className="p-5 bg-base-200 rounded-xl  space-y-[16px] overflow-hidden">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-[16px]">
          <Resizable
            showResizerThumbRight={true}
            extraClassNames={"max-w-[400px] min-w-[100px] h-full"}
          >
            <TodaysTasks />
          </Resizable>
          <AIModels />
          <DragAndDropContainer />
        </div>
        <Resizable
          extraClassNames={" h-full bg-base-300"}
          showResizerThumbRight={false}
        >
          <ImageProcessor />
        </Resizable>
      </div>
    </div>
  );
}

export default AppView;
