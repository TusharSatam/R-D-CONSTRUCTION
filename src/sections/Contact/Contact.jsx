import React, { useState } from 'react';
import ContactBG from "../../assets/image/ContactusBG.webp";
import { toast } from 'react-toastify';

const Contact = ({ sectionRefs }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Simple validation
    if (formData.name && formData.email && formData.message) {
      // Construct the mailto link
      const mailtoLink = `mailto:tsatam91@gmail.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
      
      // Open mail client with pre-populated email fields
      window.location.href = mailtoLink;
  
      // Optionally, reset form after user interaction
      // setSubmitted(true);
      toast.success("Thank you! Your message has been sent.")
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <section id="contact" ref={sectionRefs.contact} className="relative min-h-screen w-full contactGradCr">
      <div className='z-[1] absolute top-0 left-0 contactGradCr h-screen w-full'></div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto text-white flex justify-center items-center flex-wrap min-h-screen w-full text-left px-4 md:px-10">
        <div className='lg:w-1/2 h-full z-10'>
          <h1 className="text-4xl md:text-6xl font-bold">Let's Build Something Great.</h1>
          <p className="mb-8">Take the first step towards your inspiring residential space today! Click below to get a personalized quote for your dream build.</p>
        </div>

        {/* Contact Form */}
        <div className='lg:w-1/2 h-full z-10 w-full'>
            <form onSubmit={handleSubmit} className="bg-black bg-opacity-50 p-8 rounded-md space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 rounded-md text-black"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 rounded-md text-black"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full mt-1 p-2 rounded-md text-black"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-opacity-80 transition">
                Submit
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
