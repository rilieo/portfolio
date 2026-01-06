import Home from "@/sections/home";
import About from "@/sections/about";
import Photos from "@/sections/photos";
import Down from "@/sections/transition";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Home />
      <About />
      <Down />
      <Photos />
    </div>
  );
}
