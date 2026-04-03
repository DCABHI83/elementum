import React from 'react'
import cursive from "../assets/cursive.png"
import vector from "../assets/vector 5.png"

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
      hasFloat: true,
    },
  ];

  return (
    <>
      <div className='main flex p-[2em] justify-evenly items-center'>
        <div className='text text-7xl flex flex-col gap-2'>
          <h1>What we <span className='bg-[#D7EEDD] p-1 rounded-xl'>can</span></h1>
          <h1>Offer You!</h1>
          <img className='w-[15vw]' src={vector} alt="vector" />
        </div>
        <div className='image'>
          <img className='w-[45vw]' src={cursive} alt="cursive" />
        </div>
      </div>

      {/* --- Section Modified to match image --- */}
      <div className="w-full px-10">
        {items.map((elem, index) => {
          return (
            <div key={index} className="group border-t border-gray-300 last:border-b py-10">
              <div className="grid grid-cols-[1.5fr_4fr_1fr] items-center gap-10">
                
                {/* Left: Label */}
                <p className="text-sm md:text-base text-gray-800 leading-tight max-w-[200px]">
                  {elem.label}
                </p>

                {/* Center: Title (Large Display Font) */}
                <div className="relative">
                  <h2 className="text-4xl md:text-4xl font-light tracking-tight text-black">
                    {elem.title}
                  </h2>
                  {/* Floating sticker effect for the 3rd item */}
                 
                </div>

                {/* Right: Arrow */}
                <div className="text-right">
                  <span className="text-4xl font-extralight transition-transform group-hover:translate-x-2 inline-block cursor-pointer">
                    &rarr;
                  </span>
                </div>
                
              </div>
            </div>
          )
        })}
      </div>
      {/* ---------------------------------------- */}
    </>
  )
}

export default Offer