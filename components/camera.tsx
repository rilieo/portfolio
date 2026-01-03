"use client";

import Image from "next/image";
import { useState } from "react";
import { favImages } from "../constants";

const Camera = () => {
  const [index, setIndex] = useState<number>(0);

  console.log(favImages)

  const handleIncrement = () => {
    setIndex(index < favImages.length - 1 ? index + 1 : 0);
  }

  const handleDecrement = () => {
    setIndex(index > 0 ? index - 1 : favImages.length - 1);
  }

  return (
    <div className="relative flex w-150 md:w-200 p-2">
      <Image
        src={favImages[index][0]}
        alt={favImages[index][1]}
        className="object-contain"
      />
      <button 
        onClick={handleIncrement} 
        className="absolute bg-transparent w-[2%] h-[14%] right-[29%] top-[55%] rounded-tr-full rounded-br-full" 
      />
      <button 
        onClick={handleDecrement}
        className="absolute bg-transparent w-[2%] h-[14%] right-[34%] top-[55%] rounded-tl-full rounded-bl-full" 
      />
    </div>
  );
}

export default Camera;