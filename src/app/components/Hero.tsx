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
            <div className='flex flex-col justify-center w-[400px] mt-48 ml-52'>
                
                <h1 className='text-[64px] '>Rocket single seater</h1>
                <div className='text-[24px] underline underline-offset-8 mt-10'>Shop Now</div>
            </div>
            </div>
            <div className='w-1/2 h-full'> 
            <Image src={"/images/seater.svg"} alt="couch" width={500}height={500} />
            </div>
        </div>            
    </div>
  )
}

export default Hero