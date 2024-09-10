import React, { useEffect, useRef, useState } from 'react'
import Hero from "../sections/Hero/Hero"
import About from "../sections/About/About"
import Projects from "../sections/Projects/Projects"
import Services from "../sections/Services/Services"
import Contact from "../sections/Contact/Contact"
const Home = ({ activeSection, setActiveSection }) => {
//Todo: add footer and project 

    const sectionRefs = {
        hero: useRef(null),
        about: useRef(null),
        services: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    };

useEffect(() => {
console.log('====================================');
console.log(sectionRefs);
console.log('====================================');
}, [sectionRefs])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);
    return (
        <div className='w-full'>
            {/* Sections */}
            <Hero sectionRefs={sectionRefs} />
            <About sectionRefs={sectionRefs} />
            <Services sectionRefs={sectionRefs} />
            <Projects sectionRefs={sectionRefs} />
            <Contact sectionRefs={sectionRefs} />
        </div>
    )
}

export default Home
