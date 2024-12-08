import React from 'react'
import Image from 'next/image';

import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Footer = () => {
  return (
    <footer className={`${poppins.className} w-[100%] h-[400px] flex justify-center items-center gap-6 border-b-4`}>

<div>
<div className='w-[400px] h-[400px] justify-center text-[#9F9F9F] flex items-center p-20'>400 University Drive Suite 200 Coral Gables,
FL 33134, <br /> USA

</div>
</div>

<div>
<div className='w-[400px] h-[400px] justify-center flex'>
    <div className=' grid grid-cols-2 grid-rows-5 items-center  gap-10 justify-center m-10'>
        <div className='text-[#9F9F9F]'>Links</div>
        <div className='text-[#9F9F9F]'>Help</div>
        <div>Home</div>
        <div>Payment Options</div>
        <div>Shop</div>
        <div>Returs</div>
        <div>About</div>
        <div>Privacy Policy</div>
        <div>Contact</div>



    </div>

</div>
</div>

<div>
<div className='w-[400px] h-[420px] flex'>
<div className='flex flex-col m-10 relative'>
<div className='text-[#9F9F9F] absolute'>Newsletter</div>
<div className='gap-2 absolute top-20 flex'> 
    <input type="text" name="email" id="email" placeholder='Enter your email address'  className='border border-b-black'/> 
    <button className='border border-b-black'>Subscribe</button>
    

</div>



    </div>
</div>
</div>


    </footer>
  )
}

export default Footer