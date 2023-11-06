import { useState } from "react";
import dataFile from "./data.json";

import launchVehicle from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spacePort from "./assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "./assets/technology/image-space-capsule-portrait.jpg";

import techBgMobile from "./assets/technology/background-technology-mobile.jpg";
import techBgTablet from "./assets/technology/background-technology-tablet.jpg";
import techBgDesktop from "./assets/technology/background-technology-desktop.jpg";

const Technology = () => {
  const [techHeading, setTechHeading] = useState(0);

  return (
    <div
      className="text-white pt-10 px-10 lg:px-0 lg:pl-20 flex flex-col gap-20 lg:gap-0 lg:flex-row lg:justify-between lg:items-center   h-auto lg:h-screen w-screen 
    bg-[url('./assets/technology/background-technology-mobile.jpg')]
     md:bg-[url('./assets/technology/background-technology-tablet.jpg')] 
     lg:bg-[url('./assets/technology/background-technology-desktop.jpg')]"
    >
      <div className="textSection mt-20 lg:mt-0">
        <div className="imgHeading">
          <span className="text-slate-600">03 </span>
          <h1>space launch 101</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="techNumbersGrp">
            <p className="techNum">1</p>
            <p className="techNum">2</p>
            <p className="techNum">3</p>
          </div>

          <div className="techInfoGrp">
            <h3 className="text-slate-500 font-bold">THE TERMINOLOGY....</h3>

            <h1 className="text-5xl font-bold uppercase mb-5">
              {dataFile.technology[techHeading].name}
            </h1>

            <p>{dataFile.technology[techHeading].description}</p>
          </div>
        </div>
      </div>

      <div className="imgSection">
        <img src={launchVehicle} alt="" className="techImg" />
      </div>
    </div>
  );
};

export default Technology;
