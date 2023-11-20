import React from "react";
import logo from "/5995729.jpg";
import logoOne from "/5340737.jpg";

const Middle = () => {
  return (
    <div className="text-black">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <h1 className=" md:text-4xl text-4xl pt-4 text-main font-bold text-center">
            Our Services
          </h1>
          <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="w-full h-auto mt-auto">
        <div className="md:flex md:w-full">
          <div className="md:w-1/2 w-full">
            <img
              src={logo}
              className="mt-2 rounded-2xl md:w-2/3 md:ml-24 w-full"
              alt=""
            ></img>
          </div>

          <div className="md:flex md:flex-col md:w-1/2 flex justify-center
           items-center flex-col">
            <h1 className="md:text-5xl text-4xl md:ml-5 
            md:mr-5 md:mb-5 md:mt-16 
             
             text-main">
              Ready, set, publish!
            </h1>
            <p className="md:ml-5 md:mt-2 md:text-xl
             text-gray-600 mt-6 text-lg">
              Maybe not too simple, but one that offers enough<br></br>
              formatting choices and a convenient method to<br></br>
              upload images. Our editor supports these features<br></br>
              and more, making it effortless to publish your<br></br>
              content wherever you are.
            </p>
            <div className="pt-4">
              <button
                type="button"
                className="bg-red-500 mt-2 px-8 py-2.5 text-center 
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex md:w-full mt-6 ">
          <div className="md:w-1/2 pt-20 md:pl-20 
          w-full flex flex-col justify-center items-center">
            <h1 className="md:text-5xl text-4xl md:ml-8 mt-4 text-main ">Notify subscribers</h1>
            <p className="md:text-xl text-lg md:ml-8 mt-4 text-gray-600">
              Whenever you release updates or new features, let your <br></br>
              changelog subscribers know about them (but don't do it<br></br> on
              Fridays, please). Bring your update straight to their <br></br>
              email and use straightforward language, images, and<br></br>{" "}
              emoticons to get them excited.
            </p>
            <div className="pt-4">
              <button
                type="button"
                className="bg-red-500 mt-2 px-8 py-2.5 text-center 
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col md:w-1/2 ">
            <img
              src={logoOne}
              className="mt-2 rounded-2xl md:w-2/3 md:ml-24"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
