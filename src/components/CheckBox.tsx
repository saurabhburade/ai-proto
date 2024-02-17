import React, { useState } from "react";

type Props = {
  onStatusChange: (v: boolean) => void;
  task: string;
  checkStatus: boolean;
};

function CheckBox({ onStatusChange, task, checkStatus }: Props) {
  const [isChecked, setIsChecked] = useState(checkStatus);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => {
      onStatusChange(!prev);
      return !prev;
    });
  };
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <div
        className={`w-5 h-5 border  rounded transition-all duration-[700ms] ${
          isChecked
            ? "bg-primary-400 border-[#764FFF]"
            : "bg-transparent border-white "
        }`}
      >
        {isChecked && (
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
      <span className="line-through-animated"></span>
      <span
        className={`${
          isChecked
            ? " text-[#764FFF]  strike-through-animation duration-200 transition-all "
            : ""
        }`}
      >
        {task}
      </span>
    </label>
  );
}

export default CheckBox;
