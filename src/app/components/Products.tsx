import React from 'react'
import Image from 'next/image';
import {Poppins} from 'next/font/google';
const poppins = Poppins ({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Products = () => {
  return (
    <div className={`w-[100%] h-[1200px] ${poppins.className}`}>
          <div>
            <div className='bg-[#FAF4F4] w-full h-[100px] flex '>
            <div className='w-1/2 flex justify-center items-center'>
            <div className='flex gap-6'>
              <div><Image src={"/images/vector.svg"} alt="abc" width={30} height={30} /></div>
              <div className='text-[20px]'>Filter</div>
              <div><Image src={"/images/fourdots.svg"} alt="abc" width={30} height={30} /></div>
              <div><Image src={"/images/angle.svg"} alt="abc" width={30} height={30} /></div>
              <div className='text-[20px]'>Showing 1-16 of 32 results</div>



              

              

            </div>
            </div>




            <div className='w-1/2 justify-center items-center flex'>
            
            <div className='flex'>
              <div className='text-[20px]'>Show</div>
              <div className='text-[20px] w-8 bg-white text-center'>16</div>
              <div className='text-[20px]'>Short by</div>
              <div className='text-[20px] w-20 text-center bg-white'>     default         
              </div>

              </div>
            
            </div>

            </div>
          </div>











<div className='bg-slate-100 w-full h-[1100px] flex flex-wrap justify-center items-center gap-6 '>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/sofa.svg"} alt="keyboard" width={250} height={220} />
</div>

<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Trenton modular sofa_3</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>

</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/dinning.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Granite dining table with dining chair</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>

</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/outdoor.svg"} alt="keyboard" width={250} height={220} />
</div>

<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Outdoor bar table and stool</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/garden.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>

<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex flex-wrap'>
<Image src={"/images/5.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/6.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>

<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/7.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/8.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/4.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/10.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/11.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>

</div>
</div>
<div>
<div className='w-[350px] h-[280px] bg-[#f5f5f5] justify-center flex'>
<Image src={"/images/12.svg"} alt="keyboard" width={250} height={220} />
</div>
<div className='flex flex-col'>
  <span className='text-[16px] text-center '>Plain console with teak mirror</span>
  <span className='text-[16px] text-center font-bold '>Rs. 25,000.00</span>


</div> 

</div>
<div className='flex gap-4 justify-center items-center'>
  <div className='bg-yellow-200 block w-8 text-center rounded-md px-2'>1</div>
  <div className='bg-[#FFF9E5] block w-8 text-center rounded-md px-2'>2</div>
  <div className='bg-[#FFF9E5] block w-8 text-center rounded-md px-2'>3</div>
  <div className='bg-[#FFF9E5] block w-16 text-center rounded-md px-2'>Next</div>
</div>



          </div> 
          {/* products */}
    
    
    
    
    
    
    
    
    


    
    
    </div>
  )
}

export default Products