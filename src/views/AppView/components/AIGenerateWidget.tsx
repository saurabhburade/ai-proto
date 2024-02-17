import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

function AIGenerateWidget({}: Props) {
  const [tabIndex, settabIndex] = useState(0);
  //  If clicked outside then close modal
  useEffect(() => {
    const dialog = document.getElementById("prompt_modal") as HTMLDialogElement;

    const handleClickOutside = (event: MouseEvent) => {
      if (event?.target === dialog) {
        dialog?.close();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dialog.close();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div>
      <button
        onClick={() =>
          (
            document.getElementById("prompt_modal") as HTMLDialogElement
          ).showModal()
        }
        className="h-[64px] w-[64px] bg-[#652BFC] flex items-center justify-center rounded-full"
      >
        <Image src={"/images/generate.png"} width={24} height={24} alt="" />
      </button>

      <dialog
        id="prompt_modal"
        className="rounded-2xl w-[722px] bg-[#141417] text-white backdrop-blur-md z-50 animate-bounce bouncy-dialog"
      >
        <div className="bg-[#141417] p-5 space-y-4 ">
          <div className="flex gap-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.833 0.833984L14.783 3.12565L12.4997 4.16732L14.783 5.21732L15.833 7.50065L16.8747 5.21732L19.1663 4.16732L16.8747 3.12565M7.49967 3.33398L5.41634 7.91732L0.833008 10.0007L5.41634 12.084L7.49967 16.6673L9.58301 12.084L14.1663 10.0007L9.58301 7.91732M15.833 12.5007L14.783 14.784L12.4997 15.834L14.783 16.8757L15.833 19.1673L16.8747 16.8757L19.1663 15.834L16.8747 14.784"
                fill="#764FFF"
              />
            </svg>
            <p className="text-white">Ask AI</p>
          </div>
          <div className="bg-base-200 rounded-2xl overflow-hidden ">
            <textarea
              defaultValue={"Make this page using react js"}
              className=" p-5 w-full bg-base-200 focus:outline-none  h-[135px]"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-base-200 rounded-2xl w-fit p-2 flex gap-2">
              <button
                className={`px-4 p-2 text-base ${
                  tabIndex === 0 ? "bg-[#141417]" : ""
                }  rounded-lg`}
                onClick={() => settabIndex(0)}
              >
                React
              </button>
              <button
                className={`px-4 p-2 text-base ${
                  tabIndex === 1 ? "bg-[#141417]" : ""
                }  rounded-lg`}
                onClick={() => settabIndex(1)}
              >
                Vue
              </button>
            </div>
            <button
              className="px-4 p-2 text-base  rounded-lg border-t border-white/28 h-fit font-[700] "
              style={{
                background:
                  "linear-gradient(180deg, #8C6CFF 0%, #764FFF 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.28))",
              }}
            >
              Generate
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default AIGenerateWidget;
