import { useState } from "react";
import dataFile from "./data.json";

import Anousheh from "./assets/crew/image-anousheh-ansari.png";
import Victor from "./assets/crew/image-victor-glover.png";
import Mark from "./assets/crew/image-mark-shuttleworth.png";
import Douglas from "./assets/crew/image-douglas-hurley.png";

const Crew = () => {
  const [crewNum, setCrewNum] = useState(3);
  return (
    <div
      className="pageContainer bg-[url('./src/assets/crew/background-crew-mobile.jpg')]
     md:bg-[url('./src/assets/crew/background-crew-tablet.jpg')]
      lg:bg-[url('./src/assets/crew/background-crew-desktop.jpg')]   
      relative"
    >
      <div className="textSection mt-20 lg:mt-0">
        <div className="imgHeading">
          <span className="text-slate-600">02 </span>
          <h1>meet your crew</h1>
        </div>

        <h3 className="text-3xl text-slate-500">
          {dataFile.crew[crewNum].role}
        </h3>

        <h1 className="text-6xl mb-10">{dataFile.crew[crewNum].name}</h1>

        <p className="crewBio">{dataFile.crew[crewNum].bio}</p>

        <div className="crewSelection">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="imgSection">
        <img src={Anousheh} alt="" className="crewImg" />
      </div>
    </div>
  );
};

export default Crew;
