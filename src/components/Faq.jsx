import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
const Faq = () => {
  return (
    <div className='main'>
        <div className='image relative h-[80vh] border '>
            <img className='w-[8vw] absolute top-2 left-10' src={image1} alt="image1" />
            <img className='w-[4vw] absolute top-35 ' src={image2} alt="image1" />
            <img className='w-[10vw] absolute top-50 left-20' src={image3} alt="image1" />
            <img className='w-[10vw] absolute bottom-0' src={image4} alt="image1" />
        </div>
        <div className='text'></div>
        <div className='image'></div>
      
    </div>
  )
}

export default Faq
