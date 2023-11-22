import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { water, tamales, elote } from "../assets/index";
import {
  pozole,
  tostitos,
  newBurrito,
  guacamole,
  love,
} from "../assets/horizontal";

const menu = {
  tacos: { title: "Pozole", img: pozole, color: "bg-lessGreen" },
  elote: { title: "Guacamole", img: guacamole, color: "bg-orange" },
  nachos: { title: "Tostitos", img: tostitos, color: "bg-pink" },
  tamales: { title: "Tamales", img: tamales, color: "bg-lessGreen" },
  horchata: { title: "Horchata", img: elote, color: "bg-pink" },
  burritos: { title: "Burritos", img: newBurrito, color: "bg-lessGreen" },
};

const Horizontal = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);

  return (
    <>
      <section className="bg-green flex justify-center items-center pt-20 max-md:px-5">
        <img
          src={love}
          alt="love"
          width={500}
          height={400}
          className="object-contain rounded-2xl bg-pink "
        />
      </section>
      <section ref={targetRef} className="relative h-[250vh] bg-green">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-green">
          <motion.div style={{ x }} className="flex gap-4">
            {Object.values(menu).map((el) => (
              <motion.div
                key={el.title}
                className={`${el.color} w-80 h-[80vh] rounded-2xl mr-2 overflow-hidden opacity-80`}
                whileHover={{ opacity: 1 }}
              >
                <p className="relative top-5 left-6  w-32 bg-lightGreen text-green font-extrabold text-center rotate-3">
                  {el.title}
                </p>
                <motion.img
                  src={el.img}
                  alt={el.title}
                  className="w-full h-[80%] object-cover my-14 "
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="bg-green w-full h-44"></div>
    </>
  );
};

export default Horizontal;
