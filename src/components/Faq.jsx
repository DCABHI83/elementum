import React from 'react'
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
  return (
    <div className='main h-[80vh]  flex w-full justify-between p-5'>
        <div className='image relative h-full w-[20%]'>
            <img className='w-[8vw] absolute top-2 left-10' src={image1} alt="image1" />
            <img className='w-[4vw] absolute top-35 ' src={image2} alt="image1" />
            <img className='w-[10vw] absolute top-50 left-20' src={image3} alt="image1" />
            <img className='w-[10vw] absolute bottom-0' src={image4} alt="image1" />
        </div>
        <div className='text  w-[40%] relative text-center mt-10 flex flex-col gap-10'>
        <div>
           <h1 className='text-4xl'><span className='bg-[#D7EEDD] rounded-4xl p-2'>What</span>our customer</h1>
          <h1 className='text-4xl'>says About Us</h1>
          <img className='w-[10vw] absolute left-70 top-20' src={vector} alt="vector" />
        </div>
      <div className='bg-[#D7EEDD] p-5 rounded-4xl'>
            <p>   Elementum  delivered the site with inthe timeline
as they requested. Inthe end, the client found a 50% 
increase in traffic with in days since its launch. They
also had an impressive ability to use technologies that
the company hasn`t used, which have also proved to
be easy to use and reliable      </p>
      </div>
        </div>
        <div className='image h-[80vh]  w-[20%] relative'>
          <img className='w-[6vw] absolute right-20 top-3' src={image5} alt="image5" />
          <img className='w-[4vw] top-40 left-10 absolute' src={image6} alt="image6" />
          <img className='w-[6vw] top-70 absolute left-15' src={image7} alt="image7" />
          <img className='w-[10vw] absolute bottom-10 right-0' src={image8} alt="image8" />

        </div>
      
    </div>
  )
}

export default Faq
