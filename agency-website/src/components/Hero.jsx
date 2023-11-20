import React from "react";
import logo from "/4905784.jpg"

const Hero = () => {
  return (
    /*<div className='text-black'>

     <div className=' mt-auto w-full h-[350px] 
     mx-auto text-center flex flex-col justify-center '>
       <h1 className='md:text-5xl texxt-center sm:text-6xl text-4xl font-semibold md:py-6 text-main'>Product Release Notes &<br></br> Changelog Tool for SaaS<br></br> Companies</h1>
       
       <div>
        
       <p className="sm:text-lg lg:text-3xl text-center mb-2
       tracking-wide mt-3 text-gray-600">Announce your latest product updates, be it feature releases,<br></br> improvements, or any general announcements.</p>
       </div>

       <div className='mt-2 mb-2'>
        <button type='button' className='bg-red-500 mt-2  px-8 py-2.5 
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out
        '>Get Started</button>
       </div>

     </div>
  </div> */
    <div className="md:flex md:flex-row flex flex-col">
      <div className="md:w-1/2 md:pt-28 ">
        
        <h1 className="md:text-5xl md:font-bold md:pl-40 md:leading-10 md:pb-6
        
         text-main">
          Fast & Affordable<br></br> Proxy Servers
        </h1>
        
        <p className="md:text-lg pl-40 font-semibold pb-6 text-gray-500">
          Buy anonymous and private proxy servers. HTTP &<br></br> SOCK5 proxy
          supported. IP authentication or<br></br> Password available
        </p>

        <div className=" pl-40 pb-6">
          <button
            type="button"
            className="bg-red-500 mt-2 px-8 py-2.5 text-center 
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="md:w-1/2 ">
        <img src={logo} alt="" />
      </div>

    </div>
  );
};

export default Hero;
