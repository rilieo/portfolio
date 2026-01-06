import Camera from "@/components/Camera"

const Photos = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 pb-5">
      <h2 className="font-dokdo text-4xl md:text-6xl">some fav photos!</h2>
      <Camera />
    </div> 
  )
}

export default Photos