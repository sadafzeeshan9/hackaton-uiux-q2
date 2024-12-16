import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const Hero = () =>{
  return (
    <div className="flex justify-center items-center px-10  ">
    <div className="max-w-[1440px] flex gap-2 justify-between   ">
   <div className="border-r-2 border-neutral-200  hidden md:block  items-start ">

<ul className="space-x-4 mr-14">
    {[
      
   "Woman’s Fashion",
   "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
     "Medicine",
   " Sports & Outdoor",
   " Baby’s & Toys",
    "Groceries & Pets",
   " Health & Beauty",
   ].map ((item,index) => (
    <li key= {index}
    className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150">
        <span>{item}</span>
        {index < 2 && ( 
            <IoIosArrowForward />
        )}
    </li>
   ))}
</ul>
 </div>


<div className="flex items-center bg-black rounded-lg p-6 mt-4  mb-5 h-100">
<div className="text-white flex flex-col justify-center space-y-5 sm:w-[180px] md:w-[300px] lg:w-[400] ">
    <div className="flex items-center gap-2">
    <FaApple className= "sm:text-2lg md:text-4xl" /> 
    <span className="sm:text-sm md:text-base font-semibold">{""} iPhone 14 Series</span>
    </div>
       
     <h1 className=" sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
Up to 10% off Voucher
</h1>  

<Link href={"Products"} 
className="underline underline-offset-4 hover:font-semibold flex items-center gap-2"
>  
Shop Now <FaArrowRight />

</Link>       
</div> 

<img
 src="/image/cover-image.png"
alt="iphone"
height={250}
width={250}/>




</div>
 </div>
    </div>
  )}
      

  export default Hero