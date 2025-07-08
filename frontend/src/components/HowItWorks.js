import React, { useState } from 'react';
import { UserPlus, CreditCard, TrendingUp, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

// StepCard component for displaying individual steps
const StepCard = ({ step, index, isActive, onHover, onLeave }) => {
  const { number, title, description, icon: Icon, color, bgColor, features } = step;
  
  return (
    <div 
      className={`
        relative group cursor-pointer transition-all duration-700 transform
        ${isActive ? 'scale-105 -translate-y-2' : 'scale-100'}
        ${index % 2 === 1 ? 'lg:mt-12' : ''}
      `}
      onMouseEnter={() => onHover(number)} // Set active step on hover
      onMouseLeave={onLeave} // Clear active step on mouse leave
    >
      {/* Glow Effect for the card */}
      <div className={`absolute inset-0 rounded-3xl ${bgColor} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-110`}></div>
      
      {/* Main Card Container */}
      <div className={`
        relative overflow-hidden rounded-3xl border-2 border-white shadow-xl
        bg-gradient-to-br from-white to-gray-50
        backdrop-blur-sm transition-all duration-500
        ${isActive ? 'shadow-2xl border-gray-100' : ''}
        group-hover:shadow-2xl group-hover:border-gray-100
      `}>
        
        {/* Decorative Top Bar */}
        <div className={`h-2 w-full ${bgColor}`}></div>
        
        {/* Floating Step Number */}
        <div className={`
          absolute -top-6 -right-6 w-16 h-16 ${bgColor} text-white rounded-full 
          flex items-center justify-center text-xl font-bold shadow-lg z-10
          transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
        `}>
          {number}
          {/* Ping animation on hover for the number */}
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
        </div>
        
        {/* Background Pattern within the card */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className={`w-full h-full ${color} rounded-full transform rotate-45 scale-150`}></div>
        </div>
        
        {/* Card Content Area */}
        <div className="relative p-8 lg:p-10">
          {/* Icon Section */}
          <div className="flex items-center justify-center mb-8">
            <div className={`
              w-24 h-24 ${bgColor} rounded-2xl flex items-center justify-center
              shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500
            `}>
              <Icon className="w-12 h-12 text-white" /> {/* Lucide icon */}
            </div>
          </div>
          
          {/* Title */}
          <h3 className={`text-2xl lg:text-3xl font-bold ${color} mb-4 text-center group-hover:scale-105 transition-transform duration-300`}>
            {title}
          </h3>
          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed text-center mb-6">
            {description}
          </p>
          
          {/* Features List */}
          <div className="space-y-3">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                style={{transitionDelay: `${idx * 100}ms`}} // Staggered animation
              >
                <CheckCircle className={`w-5 h-5 ${color} flex-shrink-0`} /> {/* Checkmark icon */}
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Accent Bar */}
        <div className={`absolute bottom-0 left-0 w-0 h-1 ${bgColor} group-hover:w-full transition-all duration-700`}></div>
      </div>
    </div>
  );
};

// FloatingShape component for background decorative elements
const FloatingShape = ({ className, delay = 0 }) => (
  <div 
    className={`absolute rounded-full opacity-20 animate-pulse ${className}`}
    style={{animationDelay: `${delay}s`, animationDuration: '4s'}}
  ></div>
);

// Main HowItWorks component
const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null); // State to manage active step for hover effects
  
  // Data for each step
  const steps = [
    {
      number: "1",
      title: "Create Account",
      description: "Sign up in minutes with our streamlined process. Bank-level security protects your information from the start.",
      icon: UserPlus,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      features: [
        "Secure email verification",
        "Identity protection",
        "Instant account setup"
      ]
    },
    {
      number: "2", 
      title: "Add Funds",
      description: "Deposit money using your preferred method. Multiple payment options make funding simple and convenient.",
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      features: [
        "Bank transfer & cards",
        "Flexible deposit amounts",
        "Instant fund availability"
      ]
    },
    {
      number: "3",
      title: "Start Growing",
      description: "Choose your investment strategy and let our AI optimize your portfolio for maximum returns.",
      icon: TrendingUp,
      color: "text-emerald-600", 
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      features: [
        "AI-powered recommendations",
        "Automated rebalancing",
        "Real-time portfolio tracking"
      ]
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      
      {/* Background Decorations (Floating Shapes) */}
      <FloatingShape className="top-20 left-10 w-32 h-32 bg-blue-300" delay={0} />
      <FloatingShape className="top-40 right-20 w-24 h-24 bg-purple-300" delay={1} />
      <FloatingShape className="bottom-32 left-20 w-28 h-28 bg-emerald-300" delay={2} />
      <FloatingShape className="bottom-20 right-10 w-36 h-36 bg-pink-300" delay={0.5} />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section for How It Works */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold text-sm">Simple Process</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Your Journey to
            </span>
            <br />
            <span className="text-gray-900">Financial Success</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Start investing with confidence in just three simple steps. 
            Our platform makes growing your wealth straightforward and secure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Lines (for visual flow between steps) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <svg className="w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path 
                d="M100,50 Q400,20 600,50 Q800,80 1100,50" 
                fill="none" 
                stroke="url(#connectionGradient)" 
                strokeWidth="2"
                strokeDasharray="8,8"
                className="animate-pulse"
              />
            </svg>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="opacity-0 animate-fade-in-up" // Animation class
                style={{
                  animationDelay: `${index * 0.3}s`, // Staggered animation delay
                  animationFillMode: 'forwards'
                }}
              >
                <StepCard 
                  step={step} 
                  index={index}
                  isActive={activeStep === step.number}
                  onHover={setActiveStep}
                  onLeave={() => setActiveStep(null)}
                />
              </div>
            ))}
          </div>
        </div>

        xx
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;