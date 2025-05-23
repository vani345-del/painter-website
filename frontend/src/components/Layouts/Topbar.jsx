import React from 'react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'



const Topbar = () => {
  return (
   <div className='p-2 bg-[#12372A] text-white'>
        <div className="conainer mx-auto flex  justify-between items-center ">
             <div className=" hidden md:flex items-center space-x-4">
                <a href='#'className='hover:text-gray-300'>
                    <IoLogoFacebook className='h-5 w-5'/>
                </a>
                <a href='#'className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href='#'className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-4 w-4'/>
                </a>
             </div>
             <div className="text-center flex-grow">
          <span className="text-sm md:text-xl font-bold tracking-wide text-white uppercase drop-shadow-sm">
            "We fill your dream with colors"
          </span>
        </div>

             <div className="text-sm hidden md:block">
                <a href='tel:+91 8712325423' className='hover:text-gray-300'>
                    +91 8712325423
                </a>
             </div>
        </div>

    </div>
  )
}

export default Topbar