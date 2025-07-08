import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="
      bg-gradient-to-br from-[#E0F2FE] via-[#E2E8F0] to-[#EAEAEA]
      pt-16 pb-10  rounded-t-3xl shadow-2xl overflow-hidden
      border-t border-[#D1D5DB]
      font-inter text-[#4B5563]
    ">
      <div className="max-w-8xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Left Section: Logo and Newsletter */}
        <div className="col-span-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-6">
            {/* FinFolio Logo - Using an image */}
            <img
              src="/images/Logo1.png" // Path to your logo image in the public folder
              alt="FinFolio Logo"
              className="
                h-40 w-40 rounded-2xl flex items-center justify-center shadow-lg
                transform hover:scale-105 transition-all duration-300 ease-in-out
              "
            />
            
          </div>
          <p className="text-[#5A677D] text-lg mb-8 leading-relaxed">
            Unlock your financial potential. <br /> Get the latest market insights and updates directly to your inbox.
          </p>
          <div className="
            flex items-center rounded-full pr-2 py-2 shadow-lg
            bg-[#FFFFFF] border border-[#CBD5E1]
            transition-all duration-300 ease-in-out 
            hover:shadow-xl hover:border-[#A7C0E4] 
          ">
            <input
              type="email"
              placeholder="Your email address"
              className="
                flex-grow px-6 py-3 bg-transparent border-none focus:outline-none
                text-base text-[#334155] placeholder-[#94A3B8]
              "
            />
            <button className="
              h-12 w-12 flex-shrink-0 text-white rounded-full flex items-center justify-center
              bg-gradient-to-r from-[#2563EB] to-[#5B21B6]
              hover:from-[#1E40AF] hover:to-[#6D28D9] transition-all duration-300 ease-in-out /* Smooth gradient change */
              transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2
            ">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-12 text-center md:text-left">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-[#1F2937] mb-6 relative pb-2">
              Company
              <span className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0
                w-16 h-1 rounded-full
                bg-gradient-to-r from-[#2563EB] to-[#5B21B6]
              "></span>
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out 
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full /* Underline effect */
              ">About Us</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Careers</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Blog & News</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-[#1F2937] mb-6 relative pb-2">
              Resources
              <span className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0
                w-16 h-1 rounded-full
                bg-gradient-to-r from-[#2563EB] to-[#5B21B6]
              "></span>
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Features Overview</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Pricing Plans</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Investor Education</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Help Center</a></li>
            </ul>
          </div>

          {/* Invest */}
          <div>
            <h3 className="text-xl font-bold text-[#1F2937] mb-6 relative pb-2">
              Invest
              <span className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0
                w-16 h-1 rounded-full
                bg-gradient-to-r from-[#2563EB] to-[#5B21B6]
              "></span>
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Mutual Funds</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">Stocks & Equities</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">ETFs</a></li>
              <li><a href="#" className="
                text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
              ">SIPs & Lumpsum</a></li>
            </ul>
          </div>

          {/* Social Media (New Section) */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xl font-bold text-[#1F2937] mb-6 relative pb-2">
              Connect
              <span className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0
                w-16 h-1 rounded-full
                bg-gradient-to-r from-[#2563EB] to-[#5B21B6]
              "></span>
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" aria-label="Facebook" className="text-[#6B7280] hover:text-[#2563EB] transition-all duration-300 ease-in-out transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#6B7280] hover:text-[#2563EB] transition-all duration-300 ease-in-out transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.417-4.293 4.106 4.106 0 001.27 5.477A4.072 4.072 0 014 9.40c0 .028 0 .056 0 .085a4.105 4.105 0 003.3 4.032 4.12 4.12 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#6B7280] hover:text-[#2563EB] transition-all duration-300 ease-in-out transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright and Legal */}
      <div className="
        max-w-8xl mx-auto px-8 mt-20 pt-10
        border-t border-[#CBD5E1]
        flex flex-col sm:flex-row items-center justify-between
        text-base text-[#6B7280]
      ">
        <p className="mb-4 sm:mb-0 text-center sm:text-left">&copy; {currentYear} FinFolio. All rights reserved.</p>
        <div className="flex flex-wrap justify-center sm:justify-start space-x-6 text-center sm:text-left">
          <a href="#" className="
            text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
            relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
          ">Privacy Policy</a>
          <a href="#" className="
            text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
            relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
          ">Terms of Service</a>
          <a href="#" className="
            text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300 ease-in-out
            relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
          ">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;