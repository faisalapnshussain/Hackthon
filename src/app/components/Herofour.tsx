import React from 'react'
import Image from 'next/image';
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})


const Herofour = () => {
  return (
    <div className={`w-[100%] h-[500px]  flex ${poppins.className}`}>
        <div className='flex flex-col justify-center items-center w-full h-[500px]'>
            <h1 className='text-[36px]'>Our Blogs</h1>
            <p className='text-[16px] text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection</p>
            <div className='w-full h-[400px]'>

            <div className='flex justify-evenly mt-6'>


<div>
<div className='w-[250px] h-[250px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/blog1.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col mt-4 space-y-4'>
  <span className='text-[16px] text-center '>Going all-in with millennial design</span>
  <span className='text-[16px] text-center font-bold'>Read More</span>
  <div className="w-18 inline-block border-t-4 border-gray-400 mx-24"></div>


</div>

</div>
<div>
<div className='w-[250px] h-[250px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/blog2.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col mt-4 space-y-4'>
  <span className='text-[16px] text-center '>Going all-in with millennial design</span>
  <span className='text-[16px] text-center font-bold '>Read More</span>
  <div className="w-18 inline-block border-t-4 border-gray-400 mx-24"></div>


</div>
</div>
<div>
<div className='w-[250px] h-[250px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/blog3.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col mt-4 space-y-4'>
  <span className='text-[16px] text-center '>Going all-in with millennial design</span>
  <span className='text-[16px] text-center font-bold '>Read More</span>
  <div className="w-18 inline-block border-t-4 border-gray-400 mx-24"></div>


</div>
</div>



            </div>
        </div>
        <div className='flex justify-center items-center underline underline-offset-8 mt-6'>View All Posts</div>

        
</div>        

    </div>
  )
}

export default Herofour