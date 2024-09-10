import React from 'react'
import Masonry from 'react-masonry-css'
import p1img from "../../assets/image/p1.jpg"
import p2img from "../../assets/image/p2.jpg"
import p3img from "../../assets/image/p3.jpg"
import p4img from "../../assets/image/p4.jpg"

const ProjectCard = ({ project }) => {
  return (
    <div className='text-left flex flex-col gap-4'>
      <div className='h-[400px] md:h-[500px] w-full overflow-hidden'>
      <img src={project.img} className='h-[400px] md:h-[500px] w-full hover:scale-110 transition-transform ease-in-out delay-300 ' alt={project?.title} />
      </div>
      <h2 className='text-primary text-3xl font-bold'>{project.title}</h2>
      <p className=' text-xl text-white'>{project.desc}</p>
    </div>
  )
}
const Projects = ({ sectionRefs }) => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1
  };
  const projects = [{
    img: p1img,
    title: "Architectural Mastery",
    desc: "With each brick we lay, we're not just constructing buildings; we're building the foundations of aspirations, possibilities, and futures.",
  }, {
    img: p2img,
    title: "Inspiring Architecture",
    desc: "Every line drawn and every material chosen is a deliberate step in the creation of environments that inspire and uplift.",
  }, {
    img: p3img,
    title: "Artistry in Architecture",
    desc: "Our architects, designers, and craftsmen collaborate seamlessly, driven by a shared commitment to elevate construction into a form of art.",
  }, {
    img: p4img,
    title: "Constructing Artistry",
    desc: `Ex dolorum aut quae necessitatibus.
Reprehenderit itaque sit distinctio.
Voluptatibus quia eum illum autem quia.
At eveniet qui consectetur.
Recusandae distinctio recusanda`,
  }]
  return (
    <section id="projects" ref={sectionRefs.projects} className="min-h-screen  relative">
      <div className=' projectBG top-0 left-0 h-[80vh] w-full text-white flex flex-col gap-5 justify-center items-center'>
      </div>
      <div className='absolute projectGradCr top-0 left-0 h-[80vh] w-full text-white flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-4xl md:text-6xl font-bold'>Unveiling Remarkable Residential Projects</h1>
        <p>With each brick we lay, we're not just constructing buildings; we're building the foundations of <br /> aspirations, possibilities, and futures.</p>
      </div>
      <div className='!max-w-[1200px] mx-auto my-10  px-2 sm:px-0'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projects?.map((project, index) => (
            <ProjectCard project={project} key={`pro${index}`} />
          ))
          }
        </Masonry>
      </div>
    </section>
  )
}

export default Projects
