import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black flex justify-between h-24 w-full ">
      <h1 className="w-1/2  text-3xl text-red-500 font-bold  pl-12 pt-6 cursor-pointer">EDUKARE.</h1>
      <ul className="hidden md:flex  w-1/2 pl-24 pt-4">
        <li className="p-4 cursor-pointer text-main font-semibold hover:text-black">Home</li>
        <li className="p-4 cursor-pointer text-main font-semibold hover:text-black">Company</li>
        <li className="p-4 cursor-pointer text-main font-semibold hover:text-black">About</li>
        <li className="p-4 cursor-pointer text-main font-semibold hover:text-black">Services</li>
        <li className="p-4 cursor-pointer text-main font-semibold hover:text-black">Contact</li>
        <li className="p-4 cursor-pointer "><a href="" className="bg-red-500 
        rounded-[4px] text-white px-8 py-2.5">Get Started</a></li>

       
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} className=" mr-4 mt-6" /> : <AiOutlineMenu size={30}
        className=" mr-4 mt-6" />}
      </div>

      <div
        className={
          !nav
            ? "md:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-[75%] bg-[#000300] ease-in-out duration-500 z-10"
            : "md:hidden fixed left-[-100%] ease-in-out duration-500 " 
        }
      >
        <h1 className="w-full  text-3xl text-red-500 font-bold m-4 cursor-pointer">
          EDUKARE.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer">Company</li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer">About</li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer">Services</li>
          <li className="p-4 text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
