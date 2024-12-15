import React from 'react'
import Image from 'next/image';

const Productasgaard = () => {
  return (
    <div className='w-[100%] h-[700px]  '>
      <div className='flex w-full h-[100px] items-center justify-center ' >
        <div className='flex gap-14 text-[24px]'>
          <span>Description</span>
          <span>Additional Information</span>
          <span>Reviews 5</span>
        </div>
        
        </div>
        
      <div>
      <div className=' h-[200px]  w-[70%] mx-auto text-justify'>
        <p className=' p-4'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className='p-4'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div >
        <div className='flex items-center justify-center gap-5 p-4'>
        <div><Image src={"/images/sofaa.svg"} alt='images' height={500} width={500} /> </div>
        <div><Image src={"/images/safaaa.svg"} alt='images' height={500} width={500} /> </div>
        </div>
        <div></div>
      </div>

    
    
    
    
    
    
    </div>
  )
}

export default Productasgaard