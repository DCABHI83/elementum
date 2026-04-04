import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      links: ["Home", "Studio", "Service", "Blog"],
    },
    {
      title: "Terms & Policies",
      links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
    },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#D7EEDD] px-6 md:px-10 pt-16 pb-10 text-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
          
          {footerData.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xl md:text-2xl font-normal tracking-tight">{section.title}</h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href="#" 
                      className="text-sm opacity-80 hover:opacity-100 transition-all inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

    
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-6 col-span-2 md:col-span-1"
          >
            <h3 className="text-xl md:text-2xl font-normal tracking-tight">Contact</h3>
            <div className="text-sm leading-relaxed flex flex-col gap-4 md:gap-6 opacity-80">
              <p>
                1498w Fluton ste, STE<br />
                2D Chicago, IL 63867
              </p>
              <p className="hover:text-black transition-colors cursor-pointer">(123) 456789000</p>
              <p className="hover:underline cursor-pointer hover:text-black transition-colors">
                info@elementum.com
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 md:mt-24 pt-8 border-t border-black/5 text-center text-xs text-gray-600"
        >
          <p>©2026 Elementum. All rights reserved</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;