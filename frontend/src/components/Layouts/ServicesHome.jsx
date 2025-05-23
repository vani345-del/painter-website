import React from 'react'
import Exterior from "../../assets/Exterior.jpg"
import interior from "../../assets/interior.jpg"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const services = [
  {
    title: "Exterior Painting",
    description: "Give your home's exterior a fresh, long-lasting finish.",
    image: Exterior // replace with your actual image path
  },
  {
    title: "Interior Painting",
    description: "Transform your living spaces with vibrant, smooth finishes.",
    image: interior, // replace with your actual image path
  },
];

const ServicesHome = () => {
     const navigate = useNavigate();


  
    
  return (
    <>
   <section className='py-12 px-4 text-center'>
     <div className="conatiner mx-auto text-center relative">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        Our Services
</h2>
   </div>
   </section>

    <section className=" bg-white">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-2 ">{service.description}</p>
              <a href="/services" className="inline-block px-6 py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    View More Details
  </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    


   </>
  )
}

export default ServicesHome