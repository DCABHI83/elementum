import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import vector from '../assets/Vector 5.png'

const Faq = () => {
  // Animation for the side images (subtle floating)
  const floatAnim = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  }

  return (
    <div className='main min-h-[100vh] md:h-[80vh] flex flex-col md:flex-row w-full justify-between p-5 overflow-hidden gap-10 md:gap-0'>
      
      {/* Left Image Cluster - Hidden or simplified on mobile */}
      <div className='image relative h-[30vh] md:h-full w-full md:w-[20%]'>
        <motion.img {...floatAnim} className='w-[15vw] md:w-[8vw] absolute top-2 left-10' src={image1} alt="image1" />
        <motion.img {...floatAnim} transition={{ delay: 0.5 }} className='w-[8vw] md:w-[4vw] absolute top-20 md:top-35 left-2' src={image2} alt="image2" />
        <motion.img {...floatAnim} transition={{ delay: 1 }} className='w-[18vw] md:w-[10vw] absolute top-32 md:top-50 left-20' src={image3} alt="image3" />
        <motion.img {...floatAnim} className='w-[18vw] md:w-[10vw] absolute bottom-0 left-5' src={image4} alt="image4" />
      </div>

      {/* Center Testimonial Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='text w-full md:w-[40%] relative text-center mt-0 md:mt-10 flex flex-col gap-6 md:gap-10 items-center'
      >
        <div className="relative">
          <h1 className='text-3xl md:text-4xl font-medium'>
            <span className='bg-[#D7EEDD] rounded-4xl p-2'>What</span> our customer
          </h1>
          <h1 className='text-3xl md:text-4xl font-medium mt-2'>says About Us</h1>
          <img className='w-[15vw] md:w-[10vw] absolute -right-4 md:left-70 top-16 md:top-20' src={vector} alt="vector" />
        </div>

        <div className='bg-[#D7EEDD] p-6 md:p-8 rounded-3xl md:rounded-4xl shadow-sm'>
          <p className='text-sm md:text-base leading-relaxed text-gray-800'>
            Elementum delivered the site within the timeline as they requested. 
            In the end, the client found a 50% increase in traffic within days since its launch. 
            They also had an impressive ability to use technologies that the company hasn't used, 
            which have also proved to be easy to use and reliable.
          </p>
        </div>
      </motion.div>

      {/* Right Image Cluster */}
      <div className='image h-[30vh] md:h-[80vh] w-full md:w-[20%] relative'>
        <motion.img {...floatAnim} transition={{ delay: 0.2 }} className='w-[12vw] md:w-[6vw] absolute right-10 md:right-20 top-3' src={image5} alt="image5" />
        <motion.img {...floatAnim} transition={{ delay: 0.7 }} className='w-[8vw] md:w-[4vw] top-10 md:top-40 left-10 absolute' src={image6} alt="image6" />
        <motion.img {...floatAnim} transition={{ delay: 1.2 }} className='w-[12vw] md:w-[6vw] top-24 md:top-70 absolute right-10 md:left-15' src={image7} alt="image7" />
        <motion.img {...floatAnim} className='w-[18vw] md:w-[10vw] absolute bottom-5 right-0' src={image8} alt="image8" />
      </div>

    </div>
  )
}

export default Faq