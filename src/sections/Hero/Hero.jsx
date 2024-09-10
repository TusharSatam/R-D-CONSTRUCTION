import React from 'react'

const Hero = ({ sectionRefs }) => {
  return (
    <section id="hero" ref={sectionRefs.hero} className="relative min-h-screen bg-gray-200 text-black herBG">
        <div className='absolute h-screen contactGradCr top-0 left-0 w-full z-10'></div>
      <div className='max-w-[1200px] mx-auto text-white z-20 relative text-left flex flex-col gap-6  justify-center items-start min-h-screen px-2 md:px-4'>
        <h1 className='text-5xl  md:text-7xl md:w-1/2 font-semibold '>Building <br/> Dreams, One <br/> Brick at a Time</h1>
        <p className='md:w-1/2'>Every line drawn and every material chosen is a deliberate step in the creation of environments that inspire and uplift.</p>
      </div>
    </section>
  )
}

export default Hero
