import AnalogClock from "@/components/AnalogClock";
import { useClockTime } from "@/hooks/useClockTime";
import React, { useState } from "react";
// import bg1 from "@/assets/clock-bg.png"
// import bg2 from "@/assets/clock-gradient-bg.png"
const DraggableItem = ({ id, name, onDrop }) => {
  const [isDropped, setisDropped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    console.log(`🚀 ~ file: DragAndDropContainer.tsx:11 ~ e:`, e);

    e.dataTransfer.setData("text/plain", JSON.stringify({ id, name }));
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  const handleDrag = (e) => {
    console.log(`🚀 ~ file: DragAndDropContainer.tsx:21 ~ e:`, e);
    e;
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
      className="w-fit rounded-full overflow-hidden bg-white opacity-[0.999] cursor-grab"
    >
      <AnalogClock />
    </div>
  );
};

const DropArea = ({ onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const droppedItem = JSON.parse(data);
    onDrop(droppedItem);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: "2px dashed #FFFFFF4D",
      }}
      className="w-[132px] h-[132px] rounded-full overflow-hidden bg-"
    ></div>
  );
};

const DragAndDropContainer = () => {
  const [droppedItem, setDroppedItem] = useState([]);
  const [hasDropped, sethasDropped] = useState(false);
  const handleDrop = (item) => {
    sethasDropped(true);
    setDroppedItem(item);
  };

  return (
    <div
      className="h-[597px] relative top-0 grid grid-rows-4 justify-items-center items-center   p-[64px]"
      style={{
        backgroundImage: `url('/images/clock-gradient-bg.png'),  url('/images/clock-bg.png')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        {!hasDropped && (
          <DraggableItem id={1} name="Item 2" onDrop={handleDrop} />
        )}
      </div>
      <CurrentTime />
      <img src="/images/icons/arrow-down.svg" alt="" />
      <div>
        {!hasDropped && <DropArea onDrop={handleDrop} />}
        {hasDropped && (
          <div
            onClick={() => {
              sethasDropped(false);
            }}
            onDragEnd={() => {
              sethasDropped(false);
            }}
          >
            <DraggableItem id={1} name="Item 2" onDrop={handleDrop} />
          </div>
        )}
      </div>
    </div>
  );
};
const CurrentTime = () => {
  const { hours, minutes, seconds } = useClockTime();
  return (
    <p className="text-[32px] font-[400]">
      {" "}
      {hours}:{minutes}:{seconds}
    </p>
  );
};
export default DragAndDropContainer;
