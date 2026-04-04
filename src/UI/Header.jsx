import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <>
      <div className='text-black flex justify-between md:justify-evenly items-center p-6 bg-white relative z-[100]'>
        <h1 className='text-2xl font-bold tracking-tighter'>Elementum</h1>

        {/* Desktop Navigation: Hidden on Mobile */}
        <nav className='hidden md:block'>
          <ul className='flex gap-10 justify-center items-center font-medium'>
            {navLinks.map((link) => (
              <li key={link} className="cursor-pointer hover:opacity-60 transition-opacity">
                {link}
              </li>
            ))}
          </ul>
        </nav>

        
        <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} strokeWidth={1.75} />}
        </div>
      </div>

  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 z-[99] md:hidden p-8"
          >
            <ul className='flex flex-col gap-6 items-center text-xl font-medium'>
              {navLinks.map((link) => (
                <li 
                  key={link} 
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-gray-500"
                >
                  {link}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header