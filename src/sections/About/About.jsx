import React from 'react'
import { Link } from 'react-router-dom'
import { FaHardHat, FaSmile, FaBuilding, FaTools } from 'react-icons/fa'
import w1 from "../../assets/image/worker1.webp"
import w2 from "../../assets/image/worker2.webp"
import w3 from "../../assets/image/worker3.webp"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
const About = ({ sectionRefs }) => {
  return (
    <section id="about" ref={sectionRefs.about} className="min-h-screen   w-full projectGradCr ">
      <div className='flex w-full z-20 relative justify-center items-center min-h-screen flex-col md:flex-row py-10 md:py-0 projectGradCr'>
        <div className='absolute h-screen aboutBG top-0 left-0 w-full'></div>
        <div className='absolute h-screen grayLayer top-0 left-0 w-full z-10'></div>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center '>
        <div className=' flex flex-col gap-3 text-left  px-2 md:px-10 relative z-20 '>
          <h2 className='text-primary text-xl md:text-3xl font-bold'>Welcome to R D CONSTRUCTION</h2>
          <h1 className='text-white  text-4xl md:text-6xl font-semibold'>25 Years Experience</h1>
          <p className='text-white mt-6'>With each brick we lay, we're not just constructing buildings; we're building the foundations of aspirations, possibilities, and futures.</p>
          <a href={"/#contact"} className='hover:border-primary hover:text-primary hover:bg-transparent border-1 border-transparent   transition-all ease-linear delay-100 bg-primary text-white w-fit py-2 px-4'>Contact Us</a>
        </div>
        <div className=' grid grid-cols-2 gap-x-2 px-2 md:px-0 relative z-20'>
          <img src={w1} className='h-[300px] md:h-[500px] mt-10' alt='w2' />
          <img src={w2} className='h-[300px] md:h-[500px]' alt='w1' />
        </div>
        </div>
      </div>
      <div className='flex flex-wrap bg-primary text-white z-30 relative justify-center items-center gap-10 py-10 '>
        <div className='flex gap-2 items-center !z-20 flex-wrap'>
          <FaHardHat size={40} />
          <div>
            <h4>109</h4>
            <p>Expert Workers</p>
          </div>
        </div>
        <div className='flex gap-2 items-center !z-20 flex-wrap'>
          <FaSmile size={40} />
          <div>
            <h4>485</h4>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className='flex gap-2 items-center !z-20 flex-wrap'>
          <FaBuilding size={40} />
          <div>
            <h4>789</h4>
            <p>Completed Projects</p>
          </div>
        </div>
        <div className='flex gap-2 items-center !z-20 flex-wrap'>
          <FaTools size={40} />
          <div>
            <h4>890</h4>
            <p>Running Projects</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-white relative py-10 projectGradCr px-2 md:px-0">
        {/* Location */}
        <div className="flex items-center gap-2">

          <div className='flex justify-center items-center bg-primary p-5 rounded-full'>
            <FaMapMarkerAlt size={20} />
          </div>
          <p>Khata 20 Plot No 4999, Qadirganj, Nawada, Bihar</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <div className='flex justify-center items-center bg-primary p-5 rounded-full'>
            <FaPhoneAlt size={20} />
          </div>

          <p>+012 345 67890</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <div className='flex justify-center items-center bg-primary p-5 rounded-full'>
            <FaEnvelope size={20} />
          </div>
          <p>info@rdconstruction.com</p>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-2 '>
        <div className=''>
          <img src={w3} alt="worker3img" className='h-full'/>
        </div>
        <div className='text-white flex flex-col gap-3 justify-center items-center text-left p-4'>
          <h2 className='text-primary text-4xl  font-bold text-left'>Our Mission and Values</h2>
          <p>Behind every successful project is a team of dedicated professionals. Our architects, engineers, project managers, and skilled craftsmen are the heart and soul of Doha. Their collective passion and expertise drive our success.</p>
        </div>
      </div>
        <div className=' mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-3 py-4 px-4 bg-white gap-y-3'>
          <div className='flex flex-col justify-center gap-4 items-center bg-gray-200 py-4 px-5 rounded-xl'>
            <h4 className='text-2xl font-semibold text-primary'>Quality</h4>
            <p className='text-secondary text-sm'>We never compromise on the quality of materialsOur commitment to excellence is evident in every brick we lay and every beam we raise.</p>
          </div>
          <div className='flex flex-col justify-center gap-4 items-center bg-gray-200 py-4 px-5 rounded-xl'>
            <h4 className='text-2xl font-semibold text-primary'>Integrity</h4>
            <p className='text-secondary text-sm'>Honesty and transparency are the foundation of our relationships with clients, partners, and employees. We deliver on our promises, every time.</p>
          </div>
          <div className='flex flex-col justify-center gap-4 items-center bg-gray-200 py-4 px-5 rounded-xl'>
            <h4 className='text-2xl font-semibold text-primary'>Innovation</h4>
            <p className='text-secondary text-sm'>We embrace the latest construction technologies and methodologies, pushing the boundaries of what's possible in the industry.</p>
          </div>
        </div>
    </section>
  )
}

export default About
