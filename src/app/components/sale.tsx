
import Image from 'next/image'
import React from 'react'


const Sale = () => {
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
                 <Image src="/image/g92-2-500x500 1.png" alt="picture" width={150} height={100} ></Image>
                </div>
                <div className='flex flex-col '>
                  <span className='text-2xl font-bold'>HAVIT HV-G92 </span>
               <span className='font-bold'></span></div>
</div>

                <div>
                <div className="w-[200px] h-[170px]  bg-gray-200 flex justify-center items-center">
                <Image src="/image/Frame 612.png" alt="picture" width={100} height={50} ></Image>
                </div> 
                <div className='flex flex-col '>
                  <span className='text-2xl font-bold'></span>
                <span className='font-bold'></span></div>
                </div>
               
                
               <div>
                 <div className="w-[200px] h-[170px]   bg-gray-200 flex justify-center items-center">
                <Image src="/image/Frame 613.png" alt="picture" width={150} height={100} ></Image>
                </div>
                 <div className='flex flex-col '><span className='text-2xl font-bold'></span>
                <span className='font-bold'></span></div>
               </div>
               
               
               <div> <div className="w-[200px] h-[170px]   bg-gray-200 flex justify-center items-center ">
                <Image src="/image/Frame 614.png" alt="picture" width={150} height={100} ></Image>
                </div><div className='flex flex-col '><span className='text-2xl font-bold'>  </span>
                <span className='font-bold'></span></div>
                </div>


            </div>
        </div>
    
<button className=''> View All Product</button>
    </div>
    
  )
}

export default Sale
