// src/screens/TermsAndConditions.js
import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="text-left mb-[30px]">
            <div className='bg-secondary text-3xl text-center h-[40vh] flex justify-center items-center text-white'>Terms and Conditions</div>

            <h1 className="text-2xl font-bold mb-4 mt-[30px]">Terms and Conditions</h1>

            <p>Last updated: 09-09-2024</p>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>
                    Welcome to [Your Company Name]! These terms and conditions outline the rules and regulations for the use of our website, located at [website URL].
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">2. Acceptance of Terms</h2>
                <p>
                    By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined here. If you disagree with any part of the terms, you may not access the service.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
                <p>
                    All content, including text, images, graphics, and code, is the property of R D CONSTRUCTION and is protected by copyright laws. You may not modify, reproduce, or distribute any content without prior written consent.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">4. User Responsibilities</h2>
                <p>
                    You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party. Prohibited behavior includes harassing, causing distress, or inconvenience to any other user.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
                <p>
                R D CONSTRUCTION will not be held liable for any damages arising from the use of or inability to use the website. We do not guarantee that the site will always be available or that it will be free of errors or viruses.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
                <p>
                    We reserve the right to modify or replace these terms at any time. Changes will be effective immediately upon being posted on this page. It is your responsibility to review these terms regularly to ensure you are aware of any updates.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">7. Governing Law</h2>
                <p>
                    These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">8. Contact Information</h2>
                <p>
                    If you have any questions about these Terms and Conditions, please contact us at [Your Email Address].
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
