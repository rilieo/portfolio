"use client";

import { useEffect, useState } from "react";
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
    <div className="relative flex w-150 md:w-200 p-2">
      <img
        src={favImages[index][0].src}
        alt={favImages[index][1]}
      />

      <button
        onClick={handleIncrement}
        className="absolute bg-transparent w-[2%] h-[14%] right-[29%] top-[55%] hover:cursor-pointer"
      />
      <button
        onClick={handleDecrement}
        className="absolute bg-transparent w-[2%] h-[14%] right-[34%] top-[55%] hover:cursor-pointer"
      />
    </div>
  );
};

export default Camera;