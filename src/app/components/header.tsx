import React from 'react'
import { FaSearch } from "react-icons/fa";
import {  IoCartOutline, IoHeartOutline } from 'react-icons/io5';
const Upperheader = () => {
  return (
    <div className='flex items-center justify-center h-[48px] w-full bg-black pt-3 pb-3 gap-36 '>
        <span className="text-white ">Summer Sale For All Swim Suits 
            And Free Express Delivery - OFF 50%! <a href="/home" className='mx-8 underline '>ShopNow</a> </span>

            <select className='bg-black text-white mx-10'>
                <option value="english" > English</option>
            </select>
      
    </div>
  )
}

export default Upperheader



export const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      
      <span className="ml-10 text-xl font-bold">Exclusive</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 font-bold">Home</a>
      <a className="mr-5 hover:text-gray-900 font-bold">About</a>
      <a className="mr-5 hover:text-gray-900 font-bold">Contact</a>
      <a className="mr-5 hover:text-gray-900 font-bold">Sign up</a>
    </nav>

     <input type="text" placeholder="What are You Look For ?" className='w-[180px]'></input> 
     <FaSearch  className='text-black'/>
     <IoHeartOutline className='text-black size-6 mx-3' />
     <IoCartOutline  className='text-black size-6 mx-2 '/>
     
     
     


  </div>
</header>

    </div>
  )
}

