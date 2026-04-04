import React from "react";
import { motion } from "framer-motion"; // npm install framer-motion
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import semi from "../assets/semi.png";

const NewsLetter = () => {
  return (
    <div className="main flex flex-col justify-center items-center bg-[#D7EEDD] relative h-auto py-20 gap-5 overflow-hidden">
      
      {/* Arrow Animation - Position preserved */}
      <div className="arrow flex">
        <motion.img 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[12vw] md:w-[8vw]" 
          src={arrow1} 
          alt="arrow" 
        />
        <motion.img 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[12vw] md:w-[8vw]" // Fixed the empty vw typo
          src={arrow2} 
          alt="arrow2" 
        />
      </div>

      {/* Text Responsive Scaling */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text flex flex-col justify-center items-center text-center px-4"
      >
        <h1 className="text-4xl md:text-7xl font-medium">Subscribe to</h1>
        <h1 className="text-4xl md:text-7xl font-medium">our newsletter</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[14px] md:text-[15px] text-center px-6">
          To make your stay special and even more memorable
        </p>
      </motion.div>

      {/* Button Animation */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="bg-black text-white px-6 py-3 md:p-2 md:px-8 rounded-xl font-medium">
          Subscribe Now
        </button>
      </motion.div>

      {/* Decorative Semi-circle */}
      <div className="semi">
        <motion.img 
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          className="absolute right-4 md:right-8 bottom-10 md:bottom-15 w-[15vw] md:w-auto" 
          src={semi} 
          alt="semi" 
        />
      </div>

      {/* Divider */}
      <div className="w-[90vw] md:w-[80vw] h-px bg-[#AABDAE] mt-10">
      </div>
    </div>
  );
};

export default NewsLetter;