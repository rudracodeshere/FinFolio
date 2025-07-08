import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const FinfolioCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-7xl bg-whit/50 mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className={`relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 shadow-2xl shadow-blue-900/20 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 rounded-full blur-2xl"></div>

        <div className="relative text-center">
          {/* Main Heading */}
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Start Your Investment Journey
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Confidently
            </span>
          </h2>

          {/* Description */}
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            FinFolio provides intuitive tools and guidance, making stock market investing accessible and rewarding for every beginner.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 bg-gray-800/50 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          {/* Trust Signal */}
          <div className={`mt-8 flex items-center justify-center gap-4 text-gray-400 text-sm transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>10,000+ investors</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Free to start</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinfolioCTA;