import { tacoIcon, ticon, cirlceTaco } from "../assets";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Circle = () => {
  const { scrollY } = useScroll();
  const [rotate, setRotate] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setRotate(latest / 3);
  });
  return (
    <div
      className="fixed bottom-36 left-[-2rem]  rounded-full w-20 md:w-32 h-20 md:h-32 z-30 flex justify-center items-center    "
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img src={cirlceTaco} alt="taco" className=" w-full h-full" />
    </div>
  );
};

export default Circle;
