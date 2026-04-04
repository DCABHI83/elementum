import React from "react";
import { motion } from "framer-motion"; 
import vector from "../assets/vector.png";
import semi from "../assets/semi.png";
import curl1 from "../assets/curl1.png";
import curl2 from "../assets/curl2.png";

const Hero = () => {

  const alert = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>

      <div className="flex flex-col justify-center relative items-center mt-[4em] gap-10 px-4">
        
 
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={alert}
          className="flex flex-col gap-5 text-4xl md:text-6xl text-center items-center"
        >
          <h1 className="relative">
            The thinkers and
            <img
              src={vector}
              alt="vector"
  
              className="w-[4em] absolute top-10 md:top-14 h-[0.45em] left-[10%] md:left-[36%]"
            />
          </h1>

          <h1>
            doers were ch
            <span className="bg-[#FFC2EA] rounded-4xl pr-2 pl-2">anging</span>
          </h1>

          <div className="relative">
            <img
              src={semi}
              alt="semi"
       
              className="w-[1em] absolute -right-8 md:right-[-10%] top-[10%] hidden md:block"
            />
            <h1>
              the <span className="bg-[#D7EEDD] rounded-4xl">status</span> Quo
              with
            </h1>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm md:text-base"
        >
          <p>
            We are a team of strategists, designers communicators, researchers.
            Togeather,
          </p>
          <p>
            we belive that progress only hghappens when you refuse to play
            things safe.
          </p>
        </motion.div>

        <div className="pointer-events-none">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            src={curl1}
            alt="curl1"
            className="absolute top-[40%] left-1 h-[50%] md:h-[80%]"
          />
          <motion.img
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={curl2}
            alt="curl2"
            className="absolute top-[40%] left-6 h-[50%] md:h-[80%] hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;