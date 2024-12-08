import React from 'react'
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})


const Insta = () => {
  return (<div className='m-10'>

<div className="bg-[url('/images/map.svg')] bg-cover bg-center h-[450px] w-full ">
<div className= ' flex flex-col items-center justify-center p-28'>
               
                <span className={`text-[60px] font-extrabold ${poppins.className} `}>Our Instagram</span>
                <span className='text-[22px]'>Follow our store on Instagram</span>
             
                <button className='bg-[#FAF4F4] p-4 w-48 m-7 rounded-3xl shadow-2xl'>Follow Us</button>
            </div>

</div>
    </div>
  )
}

export default Insta