import React from 'react'
import s1 from "../../assets/image/s1.webp"
import s2 from "../../assets/image/s2.webp"
import s3 from "../../assets/image/s3.webp"
import s4 from "../../assets/image/s4.webp"
import s5 from "../../assets/image/s5.webp"
import s6 from "../../assets/image/s6.webp"
import s7 from "../../assets/image/s7.webp"
import s8 from "../../assets/image/s8.webp"
import s9 from "../../assets/image/s9.webp"
import s10 from "../../assets/image/s10.webp"
const Services = ({ sectionRefs }) => {
  return (
    <section id="services" ref={sectionRefs.services} className="min-h-screen bg-gray-300 relative">
      <div className=' serviceBG top-0 left-0 h-[80vh] w-full text-white flex flex-col gap-5 justify-center items-center'>
      </div>
      <div className='absolute projectGradCr top-0 left-0 h-[80vh] w-full text-white flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-4xl md:text-6xl font-bold md:w-[70%]'>Elevate your experience our services</h1>
        <p className='text-white md:w-[70%]'>With each brick we lay, we're not just constructing buildings; we're building the foundations of aspirations, possibilities, and futures.</p>
      </div>

      <div className='flex flex-col gap-6 py-5 mx-auto bg-white justify-center items-center'>
        <h1 className='text-black text-3xl md:text-5xl font-semibold  md:w-[60%]'>
          From Concept to Completion Our Services
        </h1>
        <p className='text-secondary  md:w-[80%]'>
          Throughout our journey, we have not only constructed buildings but also fostered lasting relationships.
        </p>
      </div>
      <div className='max-w-[1200px] mx-auto services flex flex-col gap-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center py-6 px-4'>
          <div className='infos text-left gap-4 flex flex-col'>
            <h2 className='text-primary text-3xl font-semibold'>Project Management</h2>
            <p className='text-secondary text-sm'>At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle. The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals.At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle.</p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <img src={s1} alt="s1img" className='h-full w-full object-cover ' />
            <img src={s2} alt="s2img" className='h-full w-full object-cover ' />
            <img src={s3} alt="s3img" className='h-full w-full object-cover ' />
            <img src={s4} alt="s4img" className='h-full w-full object-cover ' />

          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center py-6 px-4'>
          <div className='grid grid-cols-1 gap-4'>
            <img src={s9} alt="s9img" className='h-full w-full object-cover ' />
          </div>
          <div className='infos text-left gap-4 flex flex-col'>
            <h2 className='text-primary text-3xl font-semibold'>Renovation & Remodeling</h2>
            <p className='text-secondary text-sm'>At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle. The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals.At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center py-6 px-4'>
          <div className='infos text-left gap-4 flex flex-col'>
            <h2 className='text-primary text-3xl font-semibold'>Architectural Design</h2>
            <p className='text-secondary text-sm'>At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle. The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals.At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle.</p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <img src={s5} alt="s1img" className='h-full w-full object-cover ' />
            <img src={s6} alt="s2img" className='h-full w-full object-cover ' />
            <img src={s7} alt="s3img" className='h-full w-full object-cover ' />
            <img src={s8} alt="s4img" className='h-full w-full object-cover ' />

          </div>

        </div>

        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center py-6 px-4'>
          <div className='grid grid-cols-1 gap-4'>
            <img src={s10} alt="s10img" className='h-full w-full object-cover ' />
          </div>
          <div className='infos text-left gap-4 flex flex-col'>
            <h2 className='text-primary text-3xl font-semibold'>Residential Construction</h2>
            <p className='text-secondary text-sm'>At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle. The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals.At Doha, we understand that every homeowner dreams of a unique space that reflects their personality and lifestyle.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
