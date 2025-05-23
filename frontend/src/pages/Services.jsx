import React, { useState } from 'react'
import hro from '../assets/hro.jpg';
import ele from '../assets/elevation design.jpeg'
import sta from '../assets/statue.jpeg'
import ceiling from '../assets/ceiling.jpeg'
import wood from '../assets/wood.jpeg';
import { ChevronDown, ChevronUp } from "lucide-react"; 
import wall from '../assets/wall paintinguu.jpeg'
import wallA from '../assets/wall painting.jpeg'
import wallD from '../assets/wall black.jpeg'
import door from '../assets/door.jpeg'
import rayol from '../assets/rayol.jpeg'
import temple from '../assets/temple.jpeg'
import woodd from '../assets/woodd.jpeg'
import tv from '../assets/tv unit.jpeg'
import ceilingu from '../assets/ceiling design.jpeg'
import ContactForm from '../components/Common/ContactForm';


const services = [
  {
    title: "Interior Painting",
    description: "We provide professional interior wall painting with high-quality finishes.",
    image: ceilingu,
  },
  {
    title: "Exterior Painting",
    description: "Our exterior painting services are weather-resistant and durable.",
    image: ele,
  },
  {
    title: "Wall Painting",
    description: "We provide smooth and vibrant wall painting solutions using premium paints and expert techniques, ensuring a clean and refreshing look for your interiors.",
    image:wall,
  },
  {
    title: "Wood Painting",
    description: "Our wood painting service enhances the natural beauty of wood while offering protection from wear, moisture, and termites, perfect for doors, furniture, and trims.",
    image: woodd,
  },
  {
    title: "Ceiling Painting and Designs",
    description: "We deliver neat and flawless ceiling painting with attention to detail, giving your room a polished and cohesive appearance from top to bottom.",
    image: ceiling,
  },
  {
    title: "Wall Designs",
    description: "Add character to your space with custom wall designs, including patterns, textures, and modern finishes tailored to match your décor and style.",
    image: wallD,
  },
  {
    title: "Wall Arts",
    description: "Our hand-painted and stencil-based wall art brings creativity and personality to your interiors, perfect for accent walls, kids’ rooms, and feature areas.",
    image: wallA,
  },
  {
    title: "Wood Polishing",
    description: "We offer professional wood polishing using high-quality materials that restore shine, enhance grain visibility, and extend the life of wooden surfaces.",
    image:wood,
  },
  {
    title: "Tv Units",
    description: "Transform your floors with decorative painting and coating solutions, including 3D effects, patterns, and artistic finishes that make a statement.",
    image: tv,
  },
  {
    title: "Door Painting",
    description: "Give your doors a stylish makeover with smooth, long-lasting paint jobs that offer protection from daily use while boosting curb appeal.",
    image: woodd,
  },
  {
    title: "Temple Painting",
    description: "We specialize in traditional and devotional temple paintings, using culturally appropriate colors and motifs that preserve sacred aesthetics and values.",
    image: temple,
  },
  {
    title: "Statues Painting",
    description: "Enhance statues with detailed paintwork that highlights textures and features, suitable for decorative, religious, or artistic purposes.",
    image: sta,
  },
  {
    title: "Royal play designs",
    description: "Revamp your old or new cupboards with durable and elegant paint finishes that complement your interior and resist scratches, stains, and moisture.",
    image: rayol,
  },
  // Add more services here
];

const Services = () => {
   const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 text-center px-4">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          We offer a wide range of painting services tailored to meet your needs with precision and care
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {services.map((service, index) => (
          <div key={index} className="mb-4 border rounded-xl shadow">
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 rounded-t-xl"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <button>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>

            {openIndex === index && (
              <div className="p-4 bg-white rounded-b-xl border-t">
                <p className="mb-4 text-gray-700">{service.description}</p>
                {service.image && (
                  <div className="relative w-full pt-[56.25%]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <ContactForm/>
    </section>

    
  );
}

export default Services