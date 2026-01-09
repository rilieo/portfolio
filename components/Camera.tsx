"use client";

import { useState } from "react";
import { favImages } from "../constants";

const Camera = () => {
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    setIndex(index < favImages.length - 1 ? index + 1 : 0);
  };

  const handleDecrement = () => {
    setIndex(index > 0 ? index - 1 : favImages.length - 1);
  };

  return (
  <div className="relative max-w-160">
      <img
        src={favImages[index][0].src}
        alt={favImages[index][1]}
        className="w-full"
      />
      <button
        onClick={handleIncrement}
        className="absolute bg-transparent w-[4%] h-[20.5%] right-[14%] top-[55%] rounded-tr-full rounded-br-full hover:cursor-pointer"
      />
      <button
        onClick={handleDecrement}
        className="absolute bg-transparent w-[4%] h-[20.5%] right-[23%] top-[55%] rounded-tl-full rounded-bl-full hover:cursor-pointer"
      />
    </div>
  );
};

export default Camera;
