import React from 'react'
import { FaShieldAlt, FaTools, FaMoneyBillWave } from 'react-icons/fa';
import about from '../assets/about.jpg'
import staff from '../assets/staff.jpg'
import ContactForm from '../components/Common/ContactForm';
import boy from '../assets/boy.jpg'


const values = [
    {
      title: "Safety",
      description: "We prioritize safety in every project to ensure a secure environment for our team and your family.",
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    },
    {
      title: "Quality",
      description: "We deliver top-notch painting services with attention to detail and premium materials.",
      icon: <FaTools className="text-4xl text-green-600" />,
    },
    {
      title: "Budget",
      description: "We offer transparent pricing and work within your budget without compromising quality.",
      icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    },
  ];

const About = () => {
  return (
    <>
  <section className="py-16 bg-gray-50 px-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    
    {/* Left: Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        About Us
      </h2>
      <p className="text-gray-600 leading-relaxed">
        <span className="block mb-4">
          Parameshwaran Painting Works is a trusted name in professional painting services, known for quality craftsmanship and a commitment to customer satisfaction.
        </span>
        <span className="block mb-4">
          With years of hands-on experience, we specialize in transforming homes and commercial spaces with vibrant colors, smooth finishes, and attention to detail.
        </span>
        <span className="block">
          Whether it’s interior or exterior painting, we bring precision, reliability, and care to every project. At Parameshwaran Painting Works, we don’t just paint walls — we create lasting impressions.
        </span>
      </p>
    </div>

    {/* Right: Image */}
    <div className="md:w-1/2 w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
      <img
        src={about} // Replace with your image
        alt="Painting work"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>



<section className="py-16 px-4 bg-white">
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left: Image */}
    <div className="md:w-1/2 w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
      <img
        src={staff} // Replace with your actual image
        alt="Design staff"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right: Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Our Design Staff</h2>
      <p className="text-gray-600 mt-2">
        Our talented design staff works closely with each client to bring their vision to life. With creativity, precision, and a keen eye for detail, they ensure every space reflects your personal style while maintaining the highest standards of functionality and finish. From choosing the perfect color palette to the final stroke, they make the transformation seamless and enjoyable.
      </p>
    </div>

  </div>
</section>



<section className="py-16 bg-gray-50 px-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    
    {/* Left: Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        We adapt to you
      </h2>
      <p className="text-gray-600 leading-relaxed">
       
      Whether you're working around a busy schedule, specific design preferences, or unique space requirements — our team is flexible, professional, and committed to making your painting project convenient and stress-free. We tailor our process to your needs, so you get a seamless experience with results you'll love.
      </p>
    </div>

    {/* Right: Image */}
    <div className="md:w-1/2 w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
      <img
        src={boy} // Replace with your image
        alt="Painting work"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>








   <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
        <p className="text-gray-600 mt-2">What makes us stand out in the painting business.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex justify-center">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>

    <ContactForm/>
   </>
  )
}

export default About