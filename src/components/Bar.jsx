import Marquee from "react-fast-marquee";
import { tacoIcon } from "../assets";
const Bar = () => {
  return (
    <div className="fixed z-50 bottom-0 bg-pink text-2xl sm:text-3xl w-full   font-extrabold py-2">
      <Marquee speed={100} autoFill>
        <div className="flex gap-10">
          <span>Tacos </span>
          <img
            src={tacoIcon}
            alt="taco"
            width={30}
            height={30}
            className="mr-3"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Bar;
