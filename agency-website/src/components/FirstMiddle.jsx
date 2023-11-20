import React from "react";
import productOne from "/medium-shot-girl-posing-with-gra.jpg";
import productTwo from "/business-women-signature-documen.jpg"
import productThree from '/book-laptop-pencil-clock-wooden-.jpg'

const FirstMiddle = () => {
  return (
    <div className="h-auto ">
      <div className="text-center pt-10 h-auto flex flex-wrap flex-col">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <h1 className=" md:text-4xl text-4xl pt-4 text-main font-bold text-center">
            “Pure Hardwork, No Shortcuts!”
          </h1>
          <div className="w-44 h-1 border-b-4 border-red-400 mt-2"></div>
        </div>


      </div>

      <div className="w-full flex flex-wrap justify-evenly mt-10 pb-10 pt-10">

      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
          <div className="relative h-56  overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              src={productOne}
              alt="img-blur-shadow"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-main">
              UI/UX Review Check
            </h5>
            <p className="block text-base antialiased font-medium leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
            
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-main py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              
            >
              Read More
            </button>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
          <div className="relative h-56  overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              src={productTwo}
              alt="img-blur-shadow"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-bold leading-snug tracking-normal text-main">
              UI/UX Review Check
            </h5>
            <p className="block  text-base antialiased font-medium leading-relaxed text-inherit text-blue-gray-900">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-main py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            
            >
              Read More
            </button>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
          <div className="relative h-56  overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              src={productThree}
              alt="img-blur-shadow"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-bold leading-snug tracking-normal text-main">
              UI/UX Review Check
            </h5>
            <p className="block text-base antialiased font-medium leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-main py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              
            >
              Read More
            </button>
          </div>
        </div>

        
      </div>


    </div>
  );
};

export default FirstMiddle;
