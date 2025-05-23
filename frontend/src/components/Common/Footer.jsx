import React from 'react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";


const Footer = () => {
  return (
    <footer className='md:bg-gray-50 py-12 border-t-2 border-gray-600'>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Contact Section */}
        <div className="text-black">
          <div className="text-sm md:text-xl tracking-wide uppercase drop-shadow-sm mb-4">
            Contact
          </div>
          <div className="text-sm md:text-base mb-1">
            <p className="flex items-center gap-2 hover:underline"><MdLocationPin /> Machilipatnam, Andhra pradesh</p>
          </div>
          <p className="text-sm md:text-base mb-1">
             <a href="mailto:vanibodasingu@gmail.com" className=" flex items-center gap-2 hover:underline"><IoMdMail />vanibodasingu@gmail.com</a>
          </p>
          <p className="text-sm md:text-base">
            <a href="tel:+918712376357" className="flex items-center gap-2 hover:underline">
                  <FiPhoneCall />
                +91 8712376357
                </a>
          </p>
        </div>

        {/* Follow Section */}
        <div className="text-black">
          <div className="text-sm md:text-xl tracking-wide uppercase drop-shadow-sm mb-4">
            Follow
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">
              <IoLogoFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <IoLogoInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
      <div className='text-center mt-5'>
            <p>© {new Date().getFullYear()} parameshwaran painting works. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer