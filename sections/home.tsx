import Image from "next/image"
import { hi } from "@/constants"

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center font-dokdo p-5">
      <div className="bg-pastel-pink text-center px-12 py-2 -translate-x-1/4 translate-y-2">
        <h1 className="text-5xl">hi! i&apos;m</h1>
      </div>
      <div className="bg-pastel-pink-light text-center px-20">
        <h1 className="text-7xl">riley</h1>
      </div>
      <Image
        src={hi}
        alt="selfie"
        width={500}
      />
    </div>
  )
}

export default Home