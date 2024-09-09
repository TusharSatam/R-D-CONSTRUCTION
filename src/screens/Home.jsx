import React, { useEffect, useRef, useState } from 'react'
import Hero from "../sections/Hero/Hero"
import About from "../sections/About/About"
import Projects from "../sections/Projects/Projects"
import Services from "../sections/Services/Services"
import Contact from "../sections/Contact/Contact"
const Home = ({ activeSection, setActiveSection }) => {


    const sectionRefs = {
        hero: useRef(null),
        services: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 }
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
