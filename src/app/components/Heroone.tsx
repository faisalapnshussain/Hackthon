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
        
        <div className=' bg-[#FAF4F4] h-[600px] w-full flex justify-center items-center'>
            < div className='w-1/2 h-[500px]  mx-12 px-12 pt-5'><Image src={"/images/sidetable1.svg"} alt="sidetables" width={500} height={500} />
                <div className='flex flex-col relative justify-center'>
                <div className='text-[32px] bottom-6 absolute'>Side Table</div>
                <div className='text-[25px]  underline absolute underline-offset-8 mt-10'>View More</div>
                </div>
            
            </div>

            < div className='w-1/2 h-[500px]  mx-12 px-12 pt-5'><Image src={"/images/sitetable2.svg"} alt="sidetables" width={500} height={500} />
            <div className='flex flex-col relative justify-center'>
            <div className='text-[32px] bottom-6 absolute'>Side Table</div>
            <div className='text-[25px]  underline absolute underline-offset-8 mt-10'>View More</div>
            </div>
            </div>



            </div>
          </div>
  )
}

export default Heroone