import { useClockTime } from "@/hooks/useClockTime";
import React, { useState, useEffect } from "react";

const AnalogClock = () => {
  const {
    time,
    setTime,
    secondDeg,
    minuteDeg,
    hourDeg,
    seconds,
    minutes,
    hours,
  } = useClockTime();
  useEffect(() => {});
  return (
    <div className="analog-clock  bg-white relative top-0">
      <span className="w-[13.33px] border border-[##9E9FA6] absolute top-[50%] -translate-y-[50%] left-[8px] bg-[##9E9FA6] "></span>
      <span className="h-[13.33px] border border-[##9E9FA6] absolute left-[50%] -translate-x-[50%] top-[8px] bg-[##9E9FA6] "></span>
      <span className="w-[13.33px] border border-[##9E9FA6] absolute top-[50%] -translate-y-[50%] right-[8px] bg-[##9E9FA6] "></span>
      <span className="h-[13.33px] border border-[##9E9FA6] absolute left-[50%] -translate-y-[50%] bottom-[8px] bg-[##9E9FA6]"></span>

      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      ></div>
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      ></div>
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${secondDeg}deg)` }}
      ></div>
      <div className="center-circle"></div>
    </div>
  );
};

export default AnalogClock;
