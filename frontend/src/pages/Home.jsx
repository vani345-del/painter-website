import React from 'react'
import Hero from '../components/Layouts/Hero'
import Reviews from '../components/Layouts/Reviews'
import ContactForm from '../components/Common/ContactForm'
import ServicesHome from '../components/Layouts/ServicesHome'


const Home = () => {
  return (
    <div>
      <Hero/>
      <ServicesHome/>

      <section id="about-brief" className="px-4 py-12 text-center bg-white">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">About Us</h2>
  <p className="text-gray-600 max-w-xl mx-auto mb-6">
    We’re a trusted painting contractor offering expert interior and exterior painting services. With years of experience, we bring color and life to your space.
  </p>
  <a href="/about" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    Learn More
  </a>
</section>


    <Reviews/>

    <ContactForm/>
      
      
    </div>
  )
}

export default Home