import React from 'react'
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Productadd = () => {
  return (
    <div className={`w-[100%] ${poppins.className} h-[200px] flex justify-center items-center bg-[#FAF4F4] pt-10 gap-10 mt-10`}>
        <div className='w-[260px] h-[200px] flex flex-col'>
            <span className='text-[32px]'>Free Delivery</span>
            <span>For all oders over $50, consectetur adipim scing elit.</span>
            
        </div>

        <div className='w-[260px] h-[200px] flex flex-col'>
            <span className='text-[32px]'>90 Days Return</span>
            <span>If goods have problems, consectetur adipim scing elit.</span>
            
        </div>

        <div className='w-[270px] h-[200px] flex flex-col'>
            <span className='text-[32px]'>Secure Payment</span>
            <span>100% secure payment, consectetur adipim scing elit.</span>
            
        </div>
    </div>
  )
}

export default Productadd