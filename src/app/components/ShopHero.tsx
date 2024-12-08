import React from 'react'
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})


const Shophero = () => {
  return (<div>

<div className={`bg-[url('/images/shopmain.svg')] bg-cover bg-center h-[300px] w-full ${poppins.className}`}>
<div className= ' flex flex-col items-center justify-center p-10'>
               
                <span className='text-[60px] font-extrabold'><Image src={"/images/logo.svg"} alt="logo" width={80} height={80}/></span>
                <span className='text-[48px] font-extrabold '>Shop</span>

                <span className='text-[22px] flex items-center gap-8'>Home<IoIosArrowForward />Shop</span>
             
            </div>

</div>
    </div>
  )
}

export default Shophero