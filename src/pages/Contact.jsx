import React, { useState } from 'react';

const Contact = () => {
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
 const formSubmit=(data)=>{
 const inputData= Object.fromEntries(data.entries())
 console.log(inputData);}
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormData({
  //     name: '',
  //   email: '',
  //   message: '',
  //   })

  //   console.log('Form submitted:', formData);
  //   setIsSubmitted(true);
  // };

  return (
    <div className="bg-gray-100 py-3 mt-16">
      <div className="max-w-xl h-[660px] mx-auto px-6 ">
        <div className="text-center mb-8 ">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We would love to hear from you! Please fill out the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className='flex items-center justify-center'>
        <form action="https://getform.io/f/bollpqja" method="POST"  className=" p-5 w-[490px]  rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4  resize-none py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
        {/* Success Message
        {isSubmitted && (
        
          <div className="mt-6 text-center text-green-600 font-semibold">
            <p>Thank you for reaching out! We will get back to you soon.</p>
          
          </div>
        )}  */}
      </div>
    </div>
  );
};

export default Contact;

