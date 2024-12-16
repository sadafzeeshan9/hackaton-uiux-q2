import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { FaHeadphones, FaCamera } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
const Category = () => {
  return (
    <div className="w-full flex justify-center items-center mt--10 mb-1">
      <div className="sm:w-[full] md:w-[80%] border-2 border-neutral-100 pb-10">
        <div className="flex flex-col sm:pl[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1 ">
            {" "}
            {"   "}Categories
          </h3>
          <div className="flex">
            <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
              {" "}
              {"  "}
              Browse By Category
            </h1>
          </div>
        </div>
        {/* {CAtegores} */}
        <div className=" flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8 ">
          {/* {boxs} */}

          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-300 sm:w-[120px] md:w-[200] h-[150px] 
                flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <CiMobile4 className="text-3xl font-bold" />
            <p className="font-normal"> Phones </p>
          </div>
          {/* {2} */}

          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-300 sm:w-[120px] md:w-[200] h-[150px] 
                flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <FaHeadphones className="text-3xl font-bold" />
            <p className="font-normal"> HeadPhones </p>
          </div>

          {/* {3} */}

          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-300 sm:w-[120px] md:w-[200] h-[150px] 
                flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <MdOutlineComputer className="text-3xl font-bold" />
            <p className="font-normal"> Computer </p>
          </div>

          {/* {4} */}

          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-300 sm:w-[120px] md:w-[200] h-[150px] 
                flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <MdOutlineComputer className="text-3xl font-bold" />
            <p className="font-normal"> SmartWatch </p>
          </div>

          {/* {5} */}

          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-300 sm:w-[120px] md:w-[200] h-[150px] 
                flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <FaCamera className="text-3xl font-bold" />
            <p className="font-normal"> Camera </p>
          </div>
          {/* {6} */}

          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-300 sm:w-[120px] md:w-[200] h-[150px] 
                flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <IoLogoGameControllerB className="text-3xl font-bold" />
            <p className="font-normal"> Gaming </p>
          </div>
        
      </div>
    </div>
    </div>
  );
}

export default Category;
