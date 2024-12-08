import React from 'react'
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})


const Footerline = () => {
  return (
    <div>
        <div className={`${poppins.className} text-[16px] px-32`}>2022 Meubel House. All rights reverved</div>
        </div>
  )
}

export default Footerline