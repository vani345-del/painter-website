import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response=await axios.post('https://painter-website-1.onrender.com/',formData);
      alert(response.data);
    } catch (error) {
      console.error(error)
      
    }



    // You can send this data to your backend here



    setFormData({
      name: '',
      phoneNumber: '',
      address: '',
    });


  };




  return (
    <div>
          <section className="py-10 bg-gray-50 text-center px-4">
          <p className="text-base sm:text-xl text-gray-600 mb-12 max-w-xl mx-auto">
               Fill the below form, our team will contact you!
          </p>

            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-start font-medium text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm text-start font-medium text-black">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm text-start font-medium text-black">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            rows="3"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#12372A] text-white font-semibold rounded-md hover:bg-black transition"
        >
          Submit
        </button>
      </form>
    </div>
          </section>
    </div>
  )
}

export default ContactForm