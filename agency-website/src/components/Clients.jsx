import React from "react";
import logoOne from "/client-logo-1.png"
import logoTwo from "/client-logo-3.png"
import logoThree from "/client-logo-6.png"
import logoFour from "/client-logo-8.png"


const Clients = () => {
  return (
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <h1 className=" md:text-4xl text-4xl pt-4 text-main font-bold text-center">
          Our Clients
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="w-full flex flex-wrap justify-evenly mt-10 pb-10 pt-10">
        <div>
            <img src={logoOne} alt="" />
        </div>

        <div>
            <img src={logoTwo} alt="" />
        </div>


        <div>
            <img src={logoThree} alt="" />
        </div>

        <div>
            <img src={logoFour} alt="" />
        </div>

      </div>

    </div>
  );
};

export default Clients;
