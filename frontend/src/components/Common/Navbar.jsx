import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { HiBars3BottomRight } from 'react-icons/hi2'
import {HiOutlineUser } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
 const [toggle3bar,setToggle3bar]=useState(false);

  const handletogglebar3=()=>{
          setToggle3bar(!toggle3bar);
     }

  return (
    <>
   <nav className='flex justify-between items-center p-1'>
   <div className="flex items-center space-x-2">
  <img
    src={logo}
    alt="Parameshwaran Painting Works Logo"
    className="w-10 h-8 md:w-18 md:h-12 object-contain"
  />
  <div className="flex flex-col justify-center leading-none">
  <div className="text-[#183329] text-base md:text-xl font-bold uppercase tracking-wide drop-shadow m-0 p-0">
    Parameshwaran
  </div>
  <div className="text-gray-700 text-sm md:text-base font-semibold tracking-wide m-0 p-0 -mt-1">
    Painting Works
  </div>
</div>
</div>





    
  {/* Center: Nav Links (visible on md+) */}
  <div className='hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2'>
    <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
      Home
    </Link>
    <Link to="services" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
      Services
    </Link>
    <Link to="gallery" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
      Gallery
    </Link>
    <Link to="about" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
      About
    </Link>
    <Link to="contact" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
      Contact
    </Link>
  </div>


     {/* right icons */}

     <div className="flex items-center space-x-4">
      

      {/* bars */}
      <button onClick={handletogglebar3} className='md:hidden'>
      <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
      </button>
      

     </div>
   </nav>
   <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${toggle3bar ? "translate-x-0":"-translate-x-full"}`}>
     <div className='flex justify-end p-4'>
      <button onClick={handletogglebar3}>
        <IoMdClose className='h-6 w-6 text-gray-600'/>
      </button>
     </div>
     <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>Menu</h2>
      <nav className='space-y-4'>
        <Link
        to="/"
        onClick={ handletogglebar3}
        className='block text-gray-600 hover:text-black'
        >
          Home
        </Link>

        <Link
        to="services"
        onClick={ handletogglebar3}
        className='block text-gray-600 hover:text-black'
        >
          Services
        </Link>

        <Link
        to="gallery"
        onClick={ handletogglebar3}
        className='block text-gray-600 hover:text-black'
        >
        Gallery
        </Link>

        <Link
        to="about"
        onClick={ handletogglebar3}
        className='block text-gray-600 hover:text-black'
        >
          About
        </Link>

        <Link
        to="contact"
        onClick={ handletogglebar3}
        className='block text-gray-600 hover:text-black'
        >
        Contact
        </Link>


      </nav>

     </div>
     </div>

     </>
  )
}

export default Navbar