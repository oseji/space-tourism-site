import { useState } from "react";
import { motion } from "framer-motion";
import dataFile from "./data.json";

import Anousheh from "./assets/crew/image-anousheh-ansari.png";
import Victor from "./assets/crew/image-victor-glover.png";
import Mark from "./assets/crew/image-mark-shuttleworth.png";
import Douglas from "./assets/crew/image-douglas-hurley.png";

const Crew = () => {
  const [crewNum, setCrewNum] = useState(3);
  const [crewImg, setCrewImg] = useState(Anousheh);

  return (
    <div className="pageContainer  relative    bg-cover bg-[url('./assets/crew/background-crew-mobile.jpg')]  md:bg-[url('./assets/crew/background-crew-tablet.jpg')]  lg:bg-[url('./assets/crew/background-crew-desktop.jpg')]">
      <motion.div
        initial={{ x: 250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="textSection mt-10 lg:mt-0"
      >
        <div className="imgHeading">
          <span className="text-slate-600">02 </span>
          <h1>meet your crew</h1>
        </div>

        <h3 className="text-3xl text-slate-500">
          {dataFile.crew[crewNum].role}
        </h3>

        <h1 className="text-4xl md:text-6xl mb-10">
          {dataFile.crew[crewNum].name}
        </h1>

        <p className="crewBio">{dataFile.crew[crewNum].bio}</p>

        <div className="crewSelection">
          <div
            className="circle"
            onClick={() => {
              setCrewNum(3);
              setCrewImg(Anousheh);
            }}
          ></div>
          <div
            className="circle"
            onClick={() => {
              setCrewNum(2);
              setCrewImg(Victor);
            }}
          ></div>
          <div
            className="circle"
            onClick={() => {
              setCrewNum(1);
              setCrewImg(Mark);
            }}
          ></div>
          <div
            className="circle"
            onClick={() => {
              setCrewNum(0);
              setCrewImg(Douglas);
            }}
          ></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="imgSection"
      >
        <img src={crewImg} alt="" className="crewImg" />
      </motion.div>
    </div>
  );
};

export default Crew;
