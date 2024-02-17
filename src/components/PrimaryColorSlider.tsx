import React, { useState } from "react";

type Props = {};

function PrimaryColorSlider({}: Props) {
  const [hue, setHue] = useState(0);

  const handleSliderChange = (event) => {
    setHue(event.target.value);
    console.log(
      `🚀 ~ file: PrimaryColorSlider.tsx:11 ~ event.target.value:`,
      event.target.value,
      ` hsl(${event.target.value}, 100%, 50%)`
    );
  };

  const generateShades = (hue, numberOfShades) => {
    const shades = [];

    for (let i = 0; i < numberOfShades; i++) {
      const lightness = 100 - i * 10; // Adjust the step as needed
      const color = `hsl(${hue}, 100%, ${lightness}%)`;
      shades.push(color);
    }

    return shades;
  };
  const shades = generateShades(hue, 10);

  return (
    <div className="flex gap-4 items-center w-full">
      <div className="  p-4 w-[30%] rounded-full rounded-full bg-base-300 flex items-center ">
        <input
          id="color-range"
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={handleSliderChange}
          className="w-full h-[16px] rounded-lg appearance-none cursor-pointer "
          style={{
            background: ` linear-gradient(90deg, #FF0000 0%, #FF8600 12.64%, #0EFF00 29.5%, #00FFE0 43.68%, #00E0FF 56.64%, #1400FF 71.03%, #FA00FF 83.57%, #FF0000 100%)`,
          }}
        />
      </div>
      <div className="flex bg-base-300 p-4 rounded-full gap-2  w-[70%]">
        {shades.map((color, index) => (
          <div
            key={index}
            className="w-[88px] h-[16px] rounded-md"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PrimaryColorSlider;
