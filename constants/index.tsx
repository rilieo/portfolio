import one from "@/public/one.png";
import two from "@/public/two.png";
import three from "@/public/three.png";
import four from "@/public/four.png";
import five from "@/public/five.png";
import six from "@/public/six.png";
import seven from "@/public/seven.png";
import eight from "@/public/eight.png";
import nine from "@/public/nine.png";
import about from "@/public/about.png";
import hi from "@/public/hi.png";
import ski from "@/public/ski.png";

import { StaticImageData } from "next/image";

type ImageData = [StaticImageData, string]

export const favImages: ImageData[] = [
    [one, "through the looking glass"],
    [two, "brooklyn bridge"],
    [three, "corn maize"],
    [four, "friends!"],
    [five, "boat"],
    [six, "geese and alex"],
    [seven, "me!"],
    [eight, "snow in nyc"],
    [nine, "like a moth attracted to the flame"],
]

export {
    about,
    hi,
    ski,
}