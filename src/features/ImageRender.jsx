import React from "react";
import logo from "../assets/question.jpg";
import { motion, AnimatePresence } from "framer-motion";

const ImageRender = ({ imageElemets, promted }) => {
  let i = 0;
  const ImgRender = imageElemets.map((item) => {
    if (i < 10)
      return (
        <AnimatePresence>
          <div className="my-10 mx-1" key={i++}>
            <p className="p-2">{item.name}</p>
            {promted ? (
              <motion.div
                className="box"
                animate={{
                  scale: [1, 0.2, 0.5, 0.7, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: 1,
                  repeatDelay: 1,
                }}
              >
                <img
                  className=" w-64 h-64 rounded-xl "
                  src={item.img ? item.img : logo}
                  alt={item.name}
                />
              </motion.div>
            ) : (
              <motion.div
                className="box"
                animate={{
                  scale: [1, 0.2, 0.5, 0.7, 1],
                  rotateX: [0, 0, 180, 180, 0],
                  rotateY: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <img
                  className=" w-64 h-64 rounded-xl "
                  src={item.img ? item.img : logo}
                  alt={item.name}
                />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      );
  });
  return ImgRender;
};

export default ImageRender;
