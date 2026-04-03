import React from 'react'
import vector from '../assets/Vector 5.png'
import office1 from '../assets/office1.png'
import square from '../assets/square.png'
import triangle from '../assets/triangle.png'
import office2 from '../assets/office2.png'
import cursive from '../assets/cursive.png'
const Body = () => {
  return (
  <>
  <div className='main relative'>
    <div className='flex justify-evenly'>
      <div className='text relative'>
        <h1>Tomorrow should</h1>
        <img className=' w-[6em]' src={vector} alt="vector" />
        <h1>be better than <span className='bg-[#D7EEDD] rounded-xl p-1'>today</span></h1>
        <p className=' w-[40vw]'>We are a team of strategists, designers communicators, researchers.
Togeather, we belive that progress only happens when you refuse
to play things safe.</p>
<h1>Read More</h1>
      </div>
      <div className='image flex relative '>
        <img className='w-[15vw]' src={office1} alt="office" />
        <img className='w-[5vw] h-[10vh] absolute z-[-1] right-0' src={square} alt="square" />
      </div>
    </div>
    <div className='absolute right-25 top-20 z-[-1]'>
      <img className='w-[70vw]' src={cursive} alt="cursive" />
    </div>
    <div className='flex justify-evenly items-center mt-10'>
      <div className='image relative'>
        <img className='w-[5vw] absolute z-[-1] ' src={triangle} alt="triangle" />
        <img className='w-[15vw]' src={office2} alt="office" />
        <img className='w-[5vw] bottom-0 left-40 absolute ' src={triangle} alt="triangle" />
      </div>
      <div className='text'>
        <h1><span className='bg-[#D7EEDD] rounded-xl p-1'>See</span> how we can</h1>
        <h1>help you progress</h1>
        <img className='w-[5vw]' src={vector} alt="vector" />
        <div className='w-[40vw]'>
          <p className='text-[1em]'>We add a layer of fearless insights and action that allows change
makers to accelerate their progress in areas such as brand, design
digital, comms and social research.</p>
        </div>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default Body
