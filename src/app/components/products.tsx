import Image from 'next/image'
import React from 'react'


const Product = () => {
  return (
 
    <div className="w-full h-[300px] flex justify-center items-center mt-20 mb-20">
        <div className="w-[80%] h-full ">
            {/*top sale*/}
          
             <div>
                <span className="border-l-8 border-red-500 text-red-500 font-bold text-2xl"> This Month</span>
            <h2 className='text-2xl font-bold '> Best Selling Product</h2>
            <button className=' bg-red-600 ml-[350px] rounded-md '> Show All Products </button>
            </div>

            <div className="flex justify-evenly gap-8 mt-7">
             <div>
                <div className="w-[200px] h-[170px]  bg-gray-200 flex justify-center items-center">
                <Image src="/image/Cart.png" alt="picture" width={150} height={100} ></Image>
                </div>
                <div className='flex flex-col '>
                  <span className='text-2xl font-bold'> </span>
               <span className='font-bold'>Rs.1850</span></div></div>

                <div>
                <div className="w-[200px] h-[170px]  bg-gray-200 flex justify-center items-center">
                <Image src="/image/Frame 606.png" alt="picture" width={100} height={50} ></Image>
                </div> 
                <div className='flex flex-col '>
                  <span className='text-2xl font-bold'> </span>
                <span className='font-bold'>Rs.2500</span></div>
                </div>
               
                
               <div>
                 <div className="w-[200px] h-[170px]   bg-gray-200 flex justify-center items-center">
                <Image src="/image/Frame 610.png" alt="picture" width={150} height={100} ></Image>
                </div>
                 <div className='flex flex-col '><span className='text-2xl font-bold'></span>
                <span className='font-bold'>Rs.1800</span></div>
               </div>
               
               
               <div> <div className="w-[200px] h-[170px]   bg-gray-200 flex justify-center items-center ">
                <Image src="/image/Frame 612 (1).png" alt="picture" width={150} height={100} ></Image>
                </div><div className='flex flex-col '><span className='text-2xl font-bold'>  </span>
                <span className='font-bold'>Rs.2000</span></div>
                </div>


            </div>
        </div>
    

    </div>
    
  )
}

export default Product
