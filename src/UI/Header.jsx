import React from 'react'
import {Menu} from 'lucide-react'
const Header = () => {
  return (
   <>
   <div className='text-black  flex justify-evenly items-center p-4'>
    <h1>Elementum</h1>
    <nav>
        <ul className='flex gap-5 justify-center items-center'>
            <li>
                Home
            </li>
            <li>
                Studio
            </li>
            <li>
                Services
            </li>
            <li>
                Contact
            </li>
            <li>
                FAQs
            </li>
        </ul>
    </nav>
    <div>
        <Menu size={25} strokeWidth={1.75} />
    </div>
   </div>
   </>
  )
}

export default Header
