import React from 'react'

const Hero = ({sectionRefs}) => {
  return (
    <section id="hero" ref={sectionRefs.hero} className="min-h-screen bg-gray-200 text-black">
      Hero
    </section>
  )
}

export default Hero
