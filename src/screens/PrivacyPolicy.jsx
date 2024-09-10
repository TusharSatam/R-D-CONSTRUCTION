import React from 'react'

const PrivacyPolicy = () => {
    //TODO : add client  and company email
    return (
        <div className='text-black text-left pb-[30px] bg-white'>
            <div className='bg-secondary text-3xl text-center h-[40vh] flex justify-center items-center text-white'>Privacy Policy</div>
            <div className='bg-white max-w-[1200px] mx-auto'>
                <h1 className="text-3xl font-bold mb-4 mt-[30px]">Privacy Policy</h1>
                <p><strong>Effective Date</strong>: 09-09-2024</p>

                <p>
                    At  R D CONSTRUCTION, we respect your privacy and are committed to protecting the personal information you share with us.
                    This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website.
                    By using our website, you agree to the collection and use of your information in accordance with this policy.
                </p>

                <h2 className="text-2xl font-semibold mt-4">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc ml-6">
                    <li><strong>Personal Information</strong>: Name, email address, phone number, postal address, and other contact details you provide through forms on our website.</li>
                    <li><strong>Technical Information</strong>: IP address, browser type, device type, operating system, and other information automatically collected through cookies and similar technologies when you visit our website.</li>
                    <li><strong>Project Information</strong>: Details of inquiries or project requests you submit through our website.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">2. How We Use Your Information</h2>
                <p>We may use the information collected to:</p>
                <ul className="list-disc ml-6">
                    <li>Provide and improve our services.</li>
                    <li>Respond to your inquiries, project requests, and customer support.</li>
                    <li>Send you updates and information related to our services.</li>
                    <li>Comply with legal obligations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">3. Cookies</h2>
                <p>
                    We use cookies and similar tracking technologies to track activity on our website. Cookies help us analyze website traffic,
                    customize content, and enhance user experience. You can control the use of cookies through your browser settings.
                </p>

                <h2 className="text-2xl font-semibold mt-4">4. How We Share Your Information</h2>
                <p>We do not sell or share your personal information with third parties, except in the following circumstances:</p>
                <ul className="list-disc ml-6">
                    <li><strong>Service Providers</strong>: We may share your information with trusted third-party service providers to perform functions such as website hosting, analytics, and marketing.</li>
                    <li><strong>Legal Requirements</strong>: We may disclose your information if required by law or in response to valid legal requests.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">5. Data Security</h2>
                <p>We take the protection of your personal data seriously and implement reasonable security measures to safeguard your information from unauthorized access, alteration, or disclosure.</p>

                <h2 className="text-2xl font-semibold mt-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc ml-6">
                    <li>Access, update, or delete your personal information.</li>
                    <li>Opt-out of marketing communications.</li>
                    <li>Request a copy of the information we hold about you.</li>
                </ul>
                <p>If you wish to exercise any of these rights, please contact us at [email address].</p>

                <h2 className="text-2xl font-semibold mt-4">7. Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
                    Please review the privacy policies of those websites before providing your personal information.
                </p>

                <h2 className="text-2xl font-semibold mt-4">8. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
                    We encourage you to review this policy periodically.
                </p>

                <h2 className="text-2xl font-semibold mt-4">9. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p>
                    R D CONSTRUCTION <br />
                    Khata 20 Plot No 4999, Qadirganj, Nawada, Bihar <br />
                    Phone: +012 345 67890 <br />
                    Email: [Company Email Address]
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy
