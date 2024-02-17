import React, { useState } from "react";
import AIGenerateWidget from "./AIGenerateWidget";

type Props = {};

function ImageProcessor({}: Props) {
  return (
    <div className="bg-base-300 p-[32px] rounded-xl  grid grid-cols-[498px_201px_2fr] items-start relative bottom-0">
      <div
        className="h-[160px] w-[498px] grid grid-cols-2 items-center relative top-0 rounded-xl"
        style={{
          backgroundImage: "url('/images/image-to-process.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-[#652BFC]/30 w-full h-full"></div>

        <span className="h-[57px] w-[4px] bg-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></span>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="w-[127px] h-[127px] rounded-full animate-spin"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #9681FF 0deg, rgba(150, 129, 255, 0) 90deg, rgba(150, 129, 255, 0) 360deg)",
          }}
        ></div>
      </div>
      <div className="flex items-end flex-col h-full justify-start gap-5">
        <Dropdown />
        <AIGenerateWidget />
      </div>
    </div>
  );
}

export default ImageProcessor;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`inline-flex  shadow-inner justify-between items-center w-[379px] h-[64px] px-4 py-2 text-sm font-medium text-white/60     bg-base-200 rounded-2xl`}
      >
        Select Item{" "}
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
              fill="white"
            />
          </svg>
        </span>
      </button>

      <div
        data-value={isOpen}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute opacity-transition-animation right-0 mt-2  w-full bg-base-200 rounded-2xl  shadow-lg z-10   `}
      >
        {/* Dropdown content */}
        <div className="p-2  ">
          <div className=" bg-base-200 rounded-2xl p-4  text-sm cursor-pointer hover:bg-[#17171a] duration-300">
            1
          </div>
          <div className=" bg-base-200 rounded-2xl p-4  text-sm cursor-pointer hover:bg-[#17171a] duration-300">
            1
          </div>
        </div>
      </div>
    </div>
  );
};
