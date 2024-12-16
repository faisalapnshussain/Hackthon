import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})




const Contactform = () => {
  return (
    <div className={`w-[100%] h-[800px] ${poppins.className}`}>
<div className='h-[100px] w-full justify-center flex flex-col items-center mt-10 gap-4'>
    <div className='text-[36px] font-bold'>Get In Touch With Us</div>
    <p className='text-[20px] w-[600px] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    
    
</div>
<div className='flex w-[100%] h-[400px] m-20 text-[20px]'>
<div className=' flex mx-auto'>
    <div className='grid grid-cols-[40px_200px] grid-rows-2 w-[300px]'>
        <div className='w-[2]'><FaMapMarkerAlt />        </div>
        <div>Address <p>236 5th SE Avenue, New York NY10000, United States</p></div>
        <div><FaPhoneAlt /></div>

        <div>Phone <p>Mobile: +(84) 546-6789
        Hotline: +(84) 456-6789</p>
        </div>
        <div><IoTimeSharp />
        </div>
        <div>Working Time <p>Monday-Friday: 9:00 - 22:00
        Saturday-Sunday: 9:00 - 21:00</p></div>
    </div>



    <div className='w-[600px] h-[600px] flex flex-col gap-4'>
    
    <div className="relative mb-4 ">
    <label htmlFor="email" className="leading-7 text-sm text-black">
      Your name
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded-lg h-[60px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    
  </div>

  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-black">
      Email address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded-lg h-[60px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-black">
      Subject
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded-lg h-[60px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    
  </div>

  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-black">
      Message
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded-lg h-[100px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    
  </div>
<div>  <button className="text-black border-2 rounded-2xl py-2 w-[200px] px-8 focus:outline-none hover:bg-indigo-600 text-lg">
    Submit
  </button></div>






    </div>
    </div>
</div>

    </div>
  )
}

export default Contactform