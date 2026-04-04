import React from 'react'
import { motion } from 'framer-motion'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"
import image8 from "../assets/image8.png"

const ImagesRaw = () => {
  // Animation for the container children
  const itemAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  return (
    <>
      {/* Changed flex to a responsive grid: 2 cols on mobile, 4 on desktop */}
      <div className='main min-h-[60vh] md:h-[80vh] grid grid-cols-2 md:grid-cols-4 items-center p-5 md:p-10 gap-y-20 md:gap-0 overflow-hidden'>
        
        {/* Column 1 */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={itemAnim}
          className='relative h-[30vh] md:h-[45vh] w-full'>
          <motion.img whileHover={{ scale: 1.05 }} className='absolute w-[30vw] md:w-[12vw] z-10' src={image1} alt="image1" />
          <motion.img whileHover={{ scale: 1.05 }} className='absolute top-10 left-10 md:top-20 md:left-20 w-[35vw] md:w-[15vw]' src={image2} alt="image2" />
        </motion.div>

        {/* Column 2 */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={itemAnim}
          className='relative h-[30vh] md:h-[45vh] w-full'>
          <motion.img whileHover={{ scale: 1.05 }} className='absolute w-[30vw] md:w-[12vw] z-10' src={image3} alt="image3" />
          <motion.img whileHover={{ scale: 1.05 }} className='absolute top-10 left-10 md:top-20 md:left-20 w-[35vw] md:w-[15vw]' src={image4} alt="image4" />
        </motion.div>

        {/* Column 3 */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={itemAnim}
          className='relative h-[30vh] md:h-[45vh] w-full'>
          <motion.img whileHover={{ scale: 1.05 }} className='absolute w-[30vw] md:w-[12vw] z-10' src={image5} alt="image5" />
          <motion.img whileHover={{ scale: 1.05 }} className='absolute top-10 left-10 md:top-20 md:left-20 w-[35vw] md:w-[15vw]' src={image6} alt="image6" />
        </motion.div>

        {/* Column 4 */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={itemAnim}
          className='relative h-[30vh] md:h-[45vh] w-full'>
          <motion.img whileHover={{ scale: 1.05 }} className='absolute w-[30vw] md:w-[12vw] z-10' src={image7} alt="image7" />
          <motion.img whileHover={{ scale: 1.05 }} className='absolute top-10 left-10 md:top-20 md:left-20 w-[35vw] md:w-[15vw]' src={image8} alt="image8" />
        </motion.div>

      </div>
    </>
  )
}

export default ImagesRaw