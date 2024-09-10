import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`w-full sticky top-0 left-0 z-50 justify-between transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-black/60' : 'bg-black'
                }`}
        >
            <div className="max-w-7xl mx-auto flex  flex-wrap justify-between items-center py-4 px-6 w-full h-full">
                {/* Logo */}
                <a href='/' className="text-white text-xl font-bold text-left">RD CONSTRUCTION</a>

                {/* Nav Links */}
                <div className="flex gap-x-3  md:space-x-6 text-white flex-wrap">
                    <a href="/" className={`cursor-pointer hover:text-primary transition-colors duration-300 ${activeSection === 'hero' ? 'text-primary' : ''}`}>
                        Home
                    </a>
                    <a href="/#about" className={`cursor-pointer hover:text-primary transition-colors duration-300 ${activeSection === 'about' ? 'text-primary' : ''}`}>
                        About
                    </a>
                    <a href="/#services" className={`cursor-pointer hover:text-primary transition-colors duration-300 ${activeSection === 'services' ? 'text-primary' : ''}`}>
                        Services
                    </a>
                    <a href="/#projects" className={`cursor-pointer hover:text-primary transition-colors duration-300 ${activeSection === 'projects' ? 'text-primary' : ''}`}>
                        Projects
                    </a>
                    <a href="/#contact" className={`cursor-pointer hover:text-primary transition-colors duration-300 ${activeSection === 'contact' ? 'text-primary' : ''}`}>
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
