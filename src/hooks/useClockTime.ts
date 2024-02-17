import { useEffect, useState } from "react";

export const useClockTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID); // Cleanup interval on component unmount
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  // Calculate degree of rotation for each clock hand
  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes * 60 + seconds) / 3600) * 360;
  const hourDeg = ((hours * 3600 + minutes * 60 + seconds) / 43200) * 360;
  return {
    time,
    setTime,
    secondDeg,
    minuteDeg,
    hourDeg,
    seconds,
    minutes,
    hours,
  };
};
