import Home from "@/sections/home";
import About from "@/sections/about";
import Photos from "@/sections/photos";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Home />
      <About />
      <Photos />
    </div>
  );
}
