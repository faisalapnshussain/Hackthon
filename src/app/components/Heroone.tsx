import React from 'react'
import Image from 'next/image';
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Heroone = () => {
  return (
    <div className={`${poppins.className}w-[100%] h-[600px] flex justify-center items-center`}>
        
        <div className=' bg-[#FAF4F4] h-full w-full flex justify-center items-center'>
            < div className='w-1/2 h-full  mx-12 px-12 mt-10 pt-10'><Image src={"/images/sidetable1.svg"} alt="sidetables" width={400} height={400} />
                <div className='flex flex-col '>
                <span className='text-[32px] ml-8 mt--10'>Side Table</span>
                <span className='text-[25px] ml-8 underline underline-offset-8 mt-10'>View More</span>
                </div>
            
            </div>
            <div className='w-1/2 h-full mx-12 px-12 mt-10 pt-10'><Image src={"/images/sitetable2.svg"} alt="sidetables" width={400} height={400}/>
            <div className='flex flex-col '>
                <span className='text-[32px] ml-8 mt--10'>Side Table</span>
                <span className='text-[25px] ml-8 underline underline-offset-8 mt-10'>View More</span>
                </div>
            </div>



            </div>
          </div>
  )
}

export default Heroone