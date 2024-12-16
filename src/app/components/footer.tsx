import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoQrCodeOutline } from 'react-icons/io5'
import { LiaFacebook } from 'react-icons/lia'
import { RiLinkedinFill } from 'react-icons/ri'


const Footer = () => {
  return (
    <div>
        <footer className="text-white body-font bg-black ]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Account
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white">Subcribe</a>
          </li>
          <li>
            <a className="text-white">Get 10% off your first oredr</a>
          </li>
          <li>
            <a className="text-white">facebook/sadafzeeshan</a>
          </li>
          <li>
            <a className="text-white">Insta/sadafzeeshan</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Visit Now
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white">zamzama clifton</a>
          </li>
          <li>
            <a className="text-white">zamzam@gmail,com</a>
          </li>
          <li>
            <a className="text-white">Galf Mall</a>
          </li>
          <li>
            <a className="text-white">+92 341-7678717</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          For Order
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white"> website</a>
          </li>
          <li>
            <a className="text-white">WhatsApp</a>
          </li>
          <li>
            <a className="text-white">Mobile</a>
          </li>
          <li>
            <a className="text-white">Ptcl</a>
          </li>
        </nav>
      </div>
     
      <div> <span> Download App</span>
      <IoQrCodeOutline className='size-36' />
      <div className='flex gap-4'><LiaFacebook />
      <FaTwitter />
      <FaInstagram />
      <RiLinkedinFill />
      </div>
      </div>
      
        

        <div>
        
        </div>
      </div>
    </div>
  
        
           
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
      <p className="text-gray-500 text-sm text-center sm:text-left ">
        © 2020 Tailblocks —
        
      </p>

    </div>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
