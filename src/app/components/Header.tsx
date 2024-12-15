import React from 'react'
import Link from "next/link";
import Home from '../page';
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})



const Header = () => {
  return (
    <div className={`w-[100%] h-[100px] items-center justify-center flex bg-[#FBEBB5] relative border-2 ${poppins.className}`}>
        
        <div >
          <ul className='flex gap-8 mr-4 justify-center items-center text-[20px]'>
            <li className='hover:underline'><Link href="/">Home</Link></li>
            <li className='hover:underline'><Link href="/shop">Shop</Link></li>
            <li className='hover:underline'><Link href="/about">About</Link></li>
            <li className='hover:underline'><Link href="/contact">Contact</Link></li>
            
          </ul>
        </div>
        <div className='flex justify-items-end text-[24px] gap-14 absolute right-20'>
        <FaRegUser className='text-[20px]'/> <FiSearch /> <IoIosHeartEmpty className='font-bold' /><IoCartOutline />
        </div>
    </div>

  )
}

export default Header