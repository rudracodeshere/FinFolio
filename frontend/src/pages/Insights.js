import React, { useState, useEffect, useRef } from 'react';
import { Zap, TrendingUp, Shield, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Insights = () => {
  const [showBlur, setShowBlur] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const contentRef = useRef(null); // Ref for the main content area
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the bottom half of the content is intersecting (visible)
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setShowBlur(true);
            setIsModalVisible(true);
            observer.disconnect(); // Stop observing once triggered
          }
        });
      },
      {
        threshold: [0.5], // Trigger when 50% of the target is visible
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const handleJoinNow = () => {
    navigate('/login'); // Redirect to the /login route
  };

  const handleCloseModal = () => {
    setShowBlur(false);
    setIsModalVisible(false);
  };

  const insightCards = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Market Predictions",
      description: "Our advanced algorithms analyze thousands of market indicators to predict trends with unprecedented accuracy.",
      value: "94.7%",
      label: "Prediction Accuracy",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Portfolio Optimization Insights",
      description: "Get personalized recommendations to maximize returns while minimizing risk through intelligent diversification.",
      value: "+31.2%",
      label: "Average Return Boost",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment Matrix",
      description: "Real-time risk analysis across all your investments with actionable insights to protect your capital.",
      value: "98.5%",
      label: "Risk Detection Rate",
      gradient: "from-purple-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"></div>
        <nav className="relative z-10 max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
            FinFolio
          </a>
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Live Market Insights</span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div 
        ref={contentRef} 
        className={`max-w-6xl mx-auto px-6 py-16 ${showBlur ? 'relative' : ''}`}
      >
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-slide-up">
            Market Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Unlock the power of AI-driven market analysis and make informed investment decisions with our advanced insights
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group animate-slide-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-1"></div>
              </div>
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {card.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                    {card.value}
                  </div>
                  <small className="text-gray-500 text-sm">{card.label}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blur effect for the lower half */}
        {showBlur && (
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-500 animate-fade-in"></div>
        )}
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div 
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl max-w-md w-full text-center border border-white/30 shadow-2xl transform animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Lock className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent mb-4">
              Unlock All Insights
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Become a trading master with unlimited access to our premium market insights, AI predictions, and portfolio optimization tools
            </p>
            
            <button
              onClick={handleJoinNow}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full"
            >
              Join FinFolio Today
            </button>
            
            <button
              onClick={handleCloseModal}
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors duration-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Insights;