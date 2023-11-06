import { useState } from "react";
import dataFile from "./data.json";

import moon from "./assets/destination/image-moon.png";
import mars from "./assets/destination/image-mars.png";
import europa from "./assets/destination/image-europa.png";
import titan from "./assets/destination/image-titan.png";

const Destination = () => {
  console.log(dataFile);

  const [destinationName, setDestinationName] = useState("moon");
  const [destinationNum, setDestinationNum] = useState(0);

  return (
    <div className="pageContainer">
      <div className="imgSection mt-20 lg:mt-0 ">
        <div className="imgHeading">
          <span className="text-slate-600">01 </span>
          <h1>pick your destination</h1>
        </div>

        <img src={moon} alt={destinationName} className="planetImg" />
      </div>

      <div className="textSection">
        <div className="destinationSelection">
          <p className="destination">Moon</p>
          <p className="destination">Mars</p>
          <p className="destination">Europa</p>
          <p className="destination">Titan</p>
        </div>

        <h1 className="text-7xl font-bold uppercase">{destinationName}</h1>

        <p className="destinationDescription">
          {dataFile.destinations[destinationNum].description}
        </p>

        <div className="destinationInfo">
          <div>
            <p className="text-sm">AVG. DISTANCE</p>
            <p className="text-3xl">
              {dataFile.destinations[destinationNum].distance}
            </p>
          </div>

          <div>
            <p className="text-sm">EST. TRAVEL TIME</p>
            <p className="text-3xl">
              {dataFile.destinations[destinationNum].travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
