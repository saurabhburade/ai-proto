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
    <div className="analog-clock  bg-white">
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
