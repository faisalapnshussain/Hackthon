import React from 'react'
import Image from 'next/image';
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Herotwo = () => {
  return (
    <div className={`w-[100%] h-[500px]  flex ${poppins.className}`}>
        <div className='flex flex-col justify-center items-center w-full h-[500px]'>
            <h1 className='text-[36px]'>Top Pics for You</h1>
            <p className='text-[16px] text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className='w-full h-[400px]'>

           <div className='flex justify-evenly mt-6'>

<div>
<div className='w-[250px] h-[250px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/sofa.svg"} alt="keyboard" width={175} height={150} />
</div>

<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Trenton modular sofa_3</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>

</div>
<div>
<div className='w-[250px] h-[250px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/dinning.svg"} alt="keyboard" width={175} height={150} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Granite dining table with dining chair</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>

</div>
<div>
<div className='w-[250px] h-[250px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/outdoor.svg"} alt="keyboard" width={175} height={150} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Outdoor bar table and stool</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[250px] h-[250px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/garden.svg"} alt="keyboard" width={175} height={150} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>



            </div>
        </div>
        <div className='flex justify-center items-center underline underline-offset-8 pb-6'>View More</div>

        
</div>        

    </div>
  )
}

export default Herotwo