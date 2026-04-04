import React from 'react'
import { motion } from 'framer-motion'
import cursive from "../assets/cursive.png"
import vector from "../assets/vector.png"

const Offer = () => {
  const items = [
    {
      label: "Office of multiple interest content",
      title: "Collaborative & partnership",
    },
    {
      label: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      label: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
   
      <div className='main flex flex-col md:flex-row p-6 md:p-[2em] justify-evenly items-center gap-10 overflow-hidden'>
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='text text-4xl md:text-7xl flex flex-col gap-2'
        >
          <h1>What we <span className='bg-[#D7EEDD] p-1 rounded-xl'>can</span></h1>
          <h1>Offer You!</h1>
          <img className='w-[30vw] md:w-[15vw]' src={vector} alt="vector" />
        </motion.div>
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='image'
        >
          <img className='w-[80vw] md:w-[45vw]' src={cursive} alt="cursive" />
        </motion.div>
      </div>


      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full px-6 md:px-10 mb-20"
      >
        {items.map((elem, index) => {
          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group border-t border-gray-300 last:border-b py-8 md:py-10"
            >
       
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_4fr_1fr] items-center gap-6 md:gap-10">
                
       
                <p className="text-xs md:text-base text-gray-500 uppercase tracking-widest md:normal-case md:text-gray-800 leading-tight md:max-w-[200px]">
                  {elem.label}
                </p>


                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black group-hover:text-gray-600 transition-colors">
                    {elem.title}
                  </h2>
                </div>


                <div className="text-right hidden md:block">
                  <span className="text-4xl font-extralight transition-transform group-hover:translate-x-3 inline-block cursor-pointer">
                    &rarr;
                  </span>
                </div>
                
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default Offer