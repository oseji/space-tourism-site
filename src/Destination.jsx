import { useState } from "react";
import { motion } from "framer-motion";
import dataFile from "./data.json";

import moon from "./assets/destination/image-moon.png";
import mars from "./assets/destination/image-mars.png";
import europa from "./assets/destination/image-europa.png";
import titan from "./assets/destination/image-titan.png";

const Destination = () => {
  //console.log(dataFile);

  const [destinationName, setDestinationName] = useState("moon");
  const [destinationNum, setDestinationNum] = useState(0);
  const [destinationImg, setDestinationImg] = useState(moon);

  return (
    <div className="pageContainer">
      <motion.div
        initial={{ x: 250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="imgSection mt-10 lg:mt-0 "
      >
        <div className="imgHeading">
          <span className="text-slate-600">01 </span>
          <h1>pick your destination</h1>
        </div>

        <img src={destinationImg} alt={destinationName} className="planetImg" />
      </motion.div>

      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="textSection"
      >
        <div className="destinationSelection">
          <p
            className="destination"
            onClick={(e) => {
              setDestinationName("moon");
              setDestinationNum(0);
              setDestinationImg(moon);
            }}
          >
            Moon
          </p>
          <p
            className="destination"
            onClick={(e) => {
              setDestinationName("mars");
              setDestinationNum(1);
              setDestinationImg(mars);
            }}
          >
            Mars
          </p>
          <p
            className="destination"
            onClick={(e) => {
              setDestinationName("europa");
              setDestinationNum(2);
              setDestinationImg(europa);
            }}
          >
            Europa
          </p>
          <p
            className="destination"
            onClick={(e) => {
              setDestinationName("titan");
              setDestinationNum(3);
              setDestinationImg(titan);
            }}
          >
            Titan
          </p>
        </div>

        <h1 className="text-7xl font-bold uppercase">{destinationName}</h1>

        <p className="destinationDescription">
          {dataFile.destinations[destinationNum].description}
        </p>

        <div className="destinationInfo">
          <div>
            <p className="text-sm">AVG. DISTANCE</p>
            <p className="text-xl lg:text-3xl">
              {dataFile.destinations[destinationNum].distance}
            </p>
          </div>

          <div>
            <p className="text-sm">EST. TRAVEL TIME</p>
            <p className="text-xl lg:text-3xl">
              {dataFile.destinations[destinationNum].travel}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Destination;
