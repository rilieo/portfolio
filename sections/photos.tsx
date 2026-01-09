import Camera from "@/components/Camera"

const Photos = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-dokdo text-4xl md:text-6xl">some fav photos!</h2>
      <div className="p-5">
        <Camera />
      </div>
    </div> 
  )
}

export default Photos