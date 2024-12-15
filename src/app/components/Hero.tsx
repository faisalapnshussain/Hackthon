import React from 'react'
import Image from 'next/image';
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})


const Hero = () => {
  return (
    <div className={`w-[100%] h-[600px] flex justify-center items-center ${poppins.className}`}>
        
        <div className=' bg-[#FBEBB5] h-full w-full flex justify-center items-center'>
            <div className='w-1/2 h-full '>
            <div className='flex flex-col justify-center w-[500px] mt-48 ml-52'>
                
                <span className='text-[64px] ml-10 mt-20'>Rocket single seater</span>
                <div className='text-[24px] underline underline-offset-8 ml-10 mt-10'>Shop Now</div>
            </div>
            </div>
            <div className='w-1/2 h-full mr-10'> 
            <Image src={"/images/seater.svg"} alt="couch" width={700}height={700} />
            </div>
        </div>            
    </div>
  )
}

export default Hero