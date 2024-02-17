import React, { useEffect, useRef, useState } from "react";
import AIGenerateWidget from "./AIGenerateWidget";
import Resizable from "@/components/Resizable";
import { DEFAULT_FILTER_LIST } from "@/configs/constants";

type Props = {};

function ImageProcessor({}: Props) {
  return (
    <div className="bg-base-300 p-[32px]   rounded-xl  grid grid-cols-[498px_201px_2fr] items-start relative bottom-0">
      <div
        className="h-[160px] w-[498px] grid grid-cols-2 items-center relative top-0 rounded-xl"
        style={{
          backgroundImage: "url('/images/image-to-process.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Resizable
          enableBottom={false}
          enableRight={true}
          enableTop={false}
          enableLeft={false}
          extraClassNames={"bg-[#652BFC]/30 h-full max-w-[498px]"}
        >
          <div className="bg-[#652BFC]/30 w-full h-[160px]">
            <span className="h-[57px] w-[4px] bg-white absolute top-[50%] right-0 -translate-y-[50%]"></span>
          </div>
        </Resizable>
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
// TODO : Component
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // close if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="relative inline-block text-left"
      id="drop_down"
      ref={dropdownRef}
    >
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
        } absolute opacity-transition-animation left-0 mt-2  w-full overflow-scroll h-[10em]  bg-[#17171A] rounded-2xl  shadow-lg z-10   `}
      >
        {/* Dropdown content */}
        <div className="p-2  ">
          {DEFAULT_FILTER_LIST?.map((filt) => {
            return (
              <CheckBox
                item={filt.title}
                key={filt?.title}
                checkStatus={filt.isChecked}
                hasDash={filt.hasDash}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
function CheckBox({ checkStatus, item, hasDash }) {
  const [isChecked, setIsChecked] = useState(checkStatus);

  const handleCheckboxChange = () => {
    if (!hasDash) {
      setIsChecked((prev) => {
        return !prev;
      });
    }
  };
  return (
    <label className="flex items-center hover:gap-2   transition-all duration-[500ms] gap-0  space-x-2 cursor-pointer  hover:bg-[#201f23] rounded-2xl p-2  text-sm cursor-pointer  duration-300">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <div
        className={`w-5 h-5 border  rounded transition-all duration-[700ms]  ${
          isChecked ? "bg-blue-500 border-blue-500" : "bg-white border-white "
        }`}
      >
        {hasDash && isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mx-auto my-auto text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        )}
        {!isChecked && (
          <svg
            className="w-4 h-4 mx-auto my-auto text-black/50 opacity-0 hover:opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
        {!hasDash && isChecked && (
          <svg
            className="w-4 h-4 mx-auto my-auto text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>

      <span className={`text-white/60  `}>{item}</span>
    </label>
  );
}

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         type="button"
//         className={`inline-flex  shadow-inner justify-between items-center w-[379px] h-[64px] px-4 py-2 text-sm font-medium text-white/60     bg-base-200 rounded-2xl`}
//       >
//         Select Item{" "}
//         <span>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="white"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`transition-all duration-500 ${
//               isOpen ? "rotate-180" : "rotate-0"
//             }`}
//           >
//             <path
//               d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
//               fill="white"
//             />
//           </svg>
//         </span>
//       </button>

//       <div
//         data-value={isOpen}
//         className={`${
//           isOpen ? "block" : "hidden"
//         } absolute opacity-transition-animation right-0 mt-2  w-full bg-base-200 rounded-2xl  shadow-lg z-10   `}
//       >
//         {/* Dropdown content */}
//         <div className="p-2  ">
//           <div className=" bg-base-200 rounded-2xl p-4  text-sm cursor-pointer hover:bg-[#17171a] duration-300">
//             1
//           </div>
//           <div className=" bg-base-200 rounded-2xl p-4  text-sm cursor-pointer hover:bg-[#17171a] duration-300">
//             1
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
