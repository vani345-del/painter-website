import React from 'react'
import hro from '../../assets/hro.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
     <section className='relative'>
    <img src={hro} alt="hero image" className='w-full h-[400px] md:h[600px] lg:h-[750px] object-cover bg-opacity-3'/>
    <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
            <h1 className='text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4'>
                    “Painting Done Right.<br/>
                     Every Time.”
            </h1>
             <p className='text-sm tracking-tight md:text-2xl mb-6'>Reliable service, premium materials, and total satisfaction..</p>
             <Link to="contact" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>Get a Free Quote
             </Link>

        </div>
    </div>
   </section>
  )
}

export default Hero