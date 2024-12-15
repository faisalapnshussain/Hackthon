import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Herothree = () => {
  return (
    <div className={`${poppins.className}w-[100%] h-[600px] flex bg-[#FFF9E5]`}>
        <div className=' w-[70%] h-[500px] flex justify-center items-center'>
        <Image src={"/images/asofa.svg"} alt="couch" width={650}height={650} />
            </div> 
        <div className={` w-[30%] h-[500px] justify-center ${poppins.className}`}>
            <div className='flex flex-col items-center  mt-40'>
                <span className='text-[24px]'>New Arrivals</span>
                <span className='text-[48px]'>Asgaard sofa</span>
                <button className='border-black border-2 p-4 w-48 m-7'><Link href="/asgaardsofa"> Order Now</Link></button>
            </div>
        </div>
            
        </div>
  )
}

export default Herothree