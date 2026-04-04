import React from 'react'
import { motion } from 'framer-motion'
import vector from '../assets/vector.png'
import office1 from '../assets/office1.png'
import square from '../assets/square.png'
import triangle from '../assets/triangle.png'
import office2 from '../assets/office2.png'
import cursive from '../assets/cursive.png'

const Body = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <>
      <div className='main relative overflow-hidden px-6 md:px-0'>
   
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0'>
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className='text relative z-10 text-center md:text-left'
          >
            <h1 className='text-4xl md:text-6xl font-medium'>Tomorrow should</h1>
            <img className='w-[6em] mx-auto md:mx-0' src={vector} alt="vector" />
            <h1 className='text-4xl md:text-6xl font-medium'>
              be better than <span className='bg-[#D7EEDD] rounded-xl p-1'>today</span>
            </h1>
            <p className='w-full md:w-[40vw] mt-4 text-gray-700'>
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse
              to play things safe.
            </p>
            <h1 className='mt-6 font-bold underline cursor-pointer hover:text-gray-600 transition-colors'>
              Read More
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            className='image flex relative'
          >
            <img className='w-[60vw] md:w-[15vw] rounded-lg shadow-sm' src={office1} alt="office" />
            <img className='w-[10vw] md:w-[5vw] h-auto absolute z-[-1] -right-5 md:right-0 top-0' src={square} alt="square" />
          </motion.div>
        </div>

        
        <div className='absolute right-0 md:right-25 top-20 z-[-1] opacity-30 md:opacity-100 pointer-events-none'>
          <img className='w-[90vw] md:w-[70vw]' src={cursive} alt="cursive" />
        </div>

       
        <div className='flex flex-col-reverse md:flex-row justify-evenly items-center mt-20 md:mt-10 gap-10 md:gap-0'>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
            className='image relative'
          >
            <img className='w-[12vw] md:w-[5vw] absolute z-[-1] -top-5 -left-5' src={triangle} alt="triangle" />
            <img className='w-[60vw] md:w-[15vw] rounded-lg shadow-sm' src={office2} alt="office" />
            <img className='w-[12vw] md:w-[5vw] bottom-0 left-32 md:left-40 absolute' src={triangle} alt="triangle" />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className='text text-center md:text-left'
          >
            <h1 className='text-4xl md:text-6xl font-medium'>
              <span className='bg-[#D7EEDD] rounded-xl p-1'>See</span> how we can
            </h1>
            <h1 className='text-4xl md:text-6xl font-medium'>help you progress</h1>
            <img className='w-[5vw] mx-auto md:mx-0 mt-2' src={vector} alt="vector" />
            <div className='w-full md:w-[40vw] mt-4'>
              <p className='text-base md:text-[1em] text-gray-700 leading-relaxed'>
                We add a layer of fearless insights and action that allows change
                makers to accelerate their progress in areas such as brand, design
                digital, comms and social research.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Body