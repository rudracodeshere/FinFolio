import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const [isInvestDropdownOpen, setIsInvestDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null); // To manage the dropdown close timeout

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current); // Clear any pending close
    setIsInvestDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a short delay
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsInvestDropdownOpen(false);
    }, 150); // 150ms delay
  };

  // Handler for the Log In button click
  const handleLoginClick = () => {
    navigate('/login'); // Redirects to the /login path
  };

  // Handler for the Logo click
  const handleLogoClick = () => {
    navigate('/'); // Redirects to the home page
  };

  // Handler for the Open Demat Account button click
  const handleOpenDematClick = () => {
    navigate('/demat-account'); // Redirects to the /demat-account path
  };

  // NEW: Handler for the Insights button click
  const handleInsightsClick = () => {
    navigate('/insights'); // Redirects to the /insights path
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6 flex items-center justify-between">
        {/* Logo - Now Clickable */}
        <div
          className="flex items-center cursor-pointer" // Added cursor-pointer for visual feedback
          onClick={handleLogoClick} // NEW: Add onClick handler here
        >
          <div className="flex rounded-2xl items-center group">
            {/* Logo Image */}
            <div className="h-20 w-20 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/images/Logo1.png"
                alt="FinFolio Logo"
                className="h-full w-full object-contain"
              />
            </div>
            {/* FinFolio Text (assuming this was previously omitted) */}
            {/* If you have text next to your logo image and it's also part of the clickable area, include it here: */}
            {/* <span className="ml-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-[#6D28D9] drop-shadow-md">FinFolio</span> */}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8 hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search stocks, funds, or strategies..."
              className="w-full pl-12 pr-4 py-3 text-sm bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
              aria-haspopup="true"
              aria-expanded={isInvestDropdownOpen}
            >
              Invest
              <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isInvestDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 transform transition-all duration-300 origin-top-left
${isInvestDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">Mutual Funds</a>
              <a href="#" className="block px-4 py-2 text-sm text-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">Stocks</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">ETFs</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">SIPs</a>
            </div>
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200">Features</a>
          {/* Insights Link - Modified to use onClick for navigation */}
          <button
            onClick={handleInsightsClick} // NEW: Add onClick handler here
            className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
          >
            Insights
          </button>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200">Pricing</a>
        </nav>

        {/* Right Side Icons and Buttons */}
        <div className="flex items-center space-x-3 ml-8">
          {/* Support/Help Icon */}
          <button className="p-3 text-gray-600 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>

          {/* Log In Button - Now with onClick handler */}
          <button
            onClick={handleLoginClick} // Re-added onClick handler
            className="px-6 py-2.5 text-gray-700 font-medium border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm transition-all duration-200 hidden md:block"
          >
            Log In
          </button>

          {/* Open Demat Account Button - Now with onClick handler */}
          <button
            onClick={handleOpenDematClick} // NEW: Add onClick handler here
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105 hidden md:block"
          >
            Open Demat Account
          </button>
        </div>

        {/* Mobile Menu Button - always visible on smaller screens */}
        <div className="lg:hidden">
          <button className="p-3 text-gray-600 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
