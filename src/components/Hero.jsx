import React from 'react'
import vector from '../assets/Vector 5.png'
import semi from '../assets/semi.png'
import curl1 from '../assets/curl1.png'
import curl2 from '../assets/curl2.png'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col  justify-center relative items-center mt-[4em] gap-10'>
       <div className='flex flex-col gap-5  text-6xl'>
         <h1>The thinkers and</h1>
        <img src={vector} alt="vector" className='w-[4em] absolute top-14 h-[0.45em] left-[36%]' />
        <h1>doers were ch<span className='bg-[#FFC2EA] rounded-4xl  pr-2 pl-2'>anging</span></h1>
        <img src={semi} alt="semi" className='w-[1em] absolute right-[20%] top-[40%]' />
        <h1>the <span className='bg-[#D7EEDD] rounded-4xl'>status</span> Quo with</h1>
       </div>
         <div>
        <p>We are a team of strategists, designers communicators, researchers. Togeather,</p>
        <p>we belive that progress only hghappens when you refuse to play things safe.</p>
    </div>
    <div>
        <img src={curl1} alt="curl1" className='absolute top-[40%] left-1 h-[80%]' />
        <img src={curl2} alt="curl2" className='absolute top-[40%] left-6 h-[80%]'  />

    </div>
    </div>
  
    
    </>
  )
}

export default Hero
