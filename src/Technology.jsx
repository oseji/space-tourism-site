import { useState, useRef } from "react";
import { motion } from "framer-motion";
import dataFile from "./data.json";

import launchVehicle from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spacePort from "./assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "./assets/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  const [techHeading, setTechHeading] = useState(0);
  const [techImg, setTechImg] = useState(launchVehicle);
  const numberRefs = [useRef(null), useRef(null), useRef(null)];

  const changeActiveNum = (e) => {
    // const num = e.target;
    // if (!num.classList.contains("techNumActive")) {
    //   num.classList.add("techNumActive");
    // } else {
    //   num.classList.remove("techNumActive");
    // }
    // numberRefs.forEach((ref) => {
    //   const num = ref.current;
    //   console.log(num);
    //   if (!num.classList.contains("techNumActive")) {
    //     num.classList.toggle("techNumActive");
    //   } else {
    //     num.classList.toggle("techNumActive");
    //   }
    // });
  };

  return (
    <div className="text-white py-10 px-10 lg:px-0 lg:pl-20 flex flex-col gap-20 lg:gap-0 lg:flex-row lg:justify-between lg:items-center   h-auto md:h-screen w-screen  bg-black">
      <motion.div
        initial={{ x: 250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="textSection mt-20 lg:mt-0"
      >
        <div className="imgHeading">
          <span className="text-slate-600">03 </span>
          <h1>space launch 101</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="techNumbersGrp">
            <p
              className="techNum techNumActive"
              onClick={(e) => {
                changeActiveNum(e);
                setTechHeading(0);
                setTechImg(launchVehicle);
              }}
              ref={numberRefs[0]}
            >
              1
            </p>
            <p
              className="techNum"
              onClick={(e) => {
                changeActiveNum(e);
                setTechHeading(1);
                setTechImg(spacePort);
              }}
              ref={numberRefs[1]}
            >
              2
            </p>
            <p
              className="techNum"
              onClick={(e) => {
                changeActiveNum(e);
                setTechHeading(2);
                setTechImg(spaceCapsule);
              }}
              ref={numberRefs[2]}
            >
              3
            </p>
          </div>

          <div className="techInfoGrp">
            <h3 className="text-slate-500 font-bold">THE TERMINOLOGY....</h3>

            <h1 className="text-5xl font-bold uppercase mb-5">
              {dataFile.technology[techHeading].name}
            </h1>

            <p>{dataFile.technology[techHeading].description}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="imgSection"
      >
        <img src={techImg} alt="" className="techImg" />
      </motion.div>
    </div>
  );
};

export default Technology;
