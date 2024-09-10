import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // React icons for social links

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 text-left ">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-[1200px]">

                {/* Office Info Section */}
                <div>
                    <h2 className="text-lg font-bold mb-4 text-primary">Office Address</h2>
                    <p>Khata 20 Plot No 4999</p>
                    <p>Qadirganj, Nawada, Bihar</p>
                    <p>India</p>

                    <p className="mt-4">
                        <span className="font-bold">Phone:</span> +91 1234567890
                    </p>
                    <p>
                        <span className="font-bold">Email:</span> contact@constructioncompany.com
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4 text-primary">Navigation</h2>
                    <ul className="space-y-2">
                        <li><a href="#hero" className="hover:text-primary">Home</a></li>
                        <li><a href="#services" className="hover:text-primary">Services</a></li>
                        <li><a href="#projects" className="hover:text-primary">Projects</a></li>
                        <li><a href="#about" className="hover:text-primary">About</a></li>
                    </ul>
                </div>

                {/* Other Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4 text-primary">Other</h2>
                    <ul className="space-y-2">
                        <li><a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</a></li>
                    </ul>
                </div>

            </div>

            {/* Social Links Section */}
            <div className="mt-10 flex justify-center space-x-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                    <FaFacebookF size={20} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                    <FaTwitter size={20} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                    <FaLinkedinIn size={20} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                    <FaInstagram size={20} />
                </a>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                <p>&copy; {new Date().getFullYear()} Construction Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
