"use client";

import Image from "next/image";
import { me, path } from "@/constants"
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";

const Down = () => {
  return (
    <div className="flex justify-center relative w-full">
      <FadeInWhenVisible
        style="w-50"
      >
        <Image
          src={path}
          alt="ski path"
          className="object-contain"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible 
        style="absolute w-30"
        delay={0.7}
      >
        <Image
          src={me}
          alt="me skiing"
          className="object-contain"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible 
        style="absolute bottom-15 w-30 scale-x-[-1]"
        delay={0.7}
      >
        <Image
          src={me}
          alt="me skiing"
          className="object-contain"
        />
      </FadeInWhenVisible>
    </div>
  )
}

export default Down