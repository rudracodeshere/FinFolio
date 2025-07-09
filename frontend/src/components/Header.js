import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const Header = () => {
  const [isInvestDropdownOpen, setIsInvestDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsInvestDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsInvestDropdownOpen(false);
    }, 150);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleOpenDematClick = () => {
    navigate('/demat-account');
  };

  // This handler is no longer needed if we use <Link>
  // const handleInsightsClick = () => { ... };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <div className="flex rounded-2xl items-center group">
            <div className="h-20 w-20 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/images/Logo1.png"
                alt="FinFolio Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-lg mx-8 hidden md:block">{/* Search Bar */}</div>

        {/* Navigation Links - CORRECTED SECTION */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200">
              Invest
              <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isInvestDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 transform transition-all duration-300 origin-top-left ${isInvestDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Mutual Funds</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Stocks</a>
            </div>
          </div>

          {/* Using <Link> for proper navigation */}
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200">Features</Link>
          <Link to="/insights" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200">Insights</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200">Pricing</Link>
        </nav>

        {/* Right Side Icons and Buttons */}
        <div className="flex items-center space-x-3 ml-8">
          <button className="p-3 text-gray-600 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 group">{/* Support Icon */}</button>
          <button onClick={handleLoginClick} className="px-6 py-2.5 text-gray-700 font-medium border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 hidden md:block">
            Log In
          </button>
          <button onClick={handleOpenDematClick} className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hidden md:block">
            Open Demat Account
          </button>
        </div>

        <div className="lg:hidden">{/* Mobile Menu Button */}</div>
      </div>
    </header>
  );
};

export default Header;
