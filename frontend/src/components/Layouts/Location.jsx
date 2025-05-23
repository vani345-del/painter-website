import React from 'react'

const Location = () => {
  return (
       <section className="px-4 py-10 bg-gray-100 rounded-2xl shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Our Location
      </h2>
      
      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-gray-700">House painting services</p>
        <p className="text-gray-600">Temple Colony, Machilipatnam, Andhra Pradesh</p>
      </div>

      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15589.33820849343!2d81.11059646071577!3d16.190167317304855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49e7ecd542854d%3A0xc73dd0eb560a5667!2sHouse%20painting%20service!5e0!3m2!1sen!2sin!4v1747492206274!5m2!1sen!2sin" // Replace with your actual embed URL
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="House Painting Services Location"
        ></iframe>
      </div>

        <a
  href="https://www.google.com/maps/place/Temple+Colony,+Machilipatnam,+Andhra+Pradesh+521126"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-center text-blue-600 underline mt-4"
>
  Open in Google Maps
</a>
    </section>
  )
}

export default Location