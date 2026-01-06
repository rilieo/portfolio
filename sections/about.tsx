import Image from "next/image"
import { about } from "@/constants"

const About = () => {
  return (
    <div className="md:flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <div className="relative w-25 h-25 md:w-30 md:h-30">
          <Image
            src={about}
            alt="ski"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="font-dokdo text-4xl md:text-6xl">about me</h2>
      </div>

      <p className="font-dongle text-2xl max-w-3xl pt-5 px-5">
        i was born in texas, but i call new york my second home!
        i currently work at capital one as an associate software engineer.

        i love rock climbing, skiing, and dancing. i also enjoy photography and crocheting :)
      </p>
    </div>
  )
}

export default About