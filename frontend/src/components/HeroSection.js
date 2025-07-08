import React, { useState, useEffect } from 'react';
// Import specific Lucide icons to be used for the feature points
import { BarChart2, Zap, Play } from 'lucide-react';

const HeroSection = () => {
    const [currentStat, setCurrentStat] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Data for the rotating stats in the left column
    const stats = [
        { value: "₹2.5M+", label: "Assets Under Management" },
        { value: "50K+", label: "Active Investors" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Real-time Monitoring" }
    ];

    // Data for the live market overview in the right column
    const marketData = [
        { symbol: "NIFTY 50", value: "19,674.25", change: "+0.85%", positive: true },
        { symbol: "SENSEX", value: "66,023.69", change: "+1.12%", positive: true },
        { symbol: "BANKNIFTY", value: "44,523.15", change: "-0.23%", positive: false }
    ];

    // Effect for fading in the content and cycling through stats
    useEffect(() => {
        // Set content to visible after component mounts for initial animation
        setIsVisible(true);

        // Set up interval to cycle through the 'stats' array every 3 seconds
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length);
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once on mount

    // Handle click animation for buttons (example: ripple effect)
    const handleButtonClick = (e) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${e.clientX - (button.getBoundingClientRect().left + radius)}px`;
        ripple.style.top = `${e.clientY - (button.getBoundingClientRect().top + radius)}px`;
        ripple.classList.add('ripple-effect');

        button.appendChild(ripple);

        ripple.onanimationend = () => {
            ripple.remove();
        };
    };

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 h-[90vh] flex items-center justify-center overflow-hidden">

            {/* Main Content Container */}
            <div className="relative max-w-fit  mx-auto px-6 z-10">
                <div className="grid lg:grid-cols-12 items-center">
                    {/* Left Column - Content (Spanning more columns for emphasis) */}
                    <div className={`lg:col-span-7 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        {/* Badge: Live Market Data indicator */}
                        <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full text-sm font-semibold text-green-800 border border-green-200 shadow-sm animate-fade-in-up delay-200">
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse-light"></span>
                            Live Market Insights
                        </div>

                        {/* Main Heading & Tagline */}
                        <div className="space-y-5">
                            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-fade-in-up delay-300">
                                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                                    Intelligent Investing,
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Simplified for You.
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in-up delay-400">
                                Harness the power of AI to optimize your portfolio, gain real-time market insights,
                                and make data-driven decisions with confidence.
                            </p>
                        </div>

                        {/* Feature Points - More compact and visually distinct */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 animate-fade-in-up delay-500">
                            <div className="group flex items-start space-x-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-300 cursor-pointer active:scale-[0.98]">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-1 shadow-lg transition-transform duration-300 group-hover:rotate-12">
                                    <BarChart2 className="w-5 h-5 text-white" /> {/* Using Lucide BarChart2 icon */}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Advanced Portfolio Tracking</h3>
                                    <p className="text-gray-600 text-sm">Monitor your investments with deep analytics.</p>
                                </div>
                            </div>

                            <div className="group flex items-start space-x-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-purple-300 cursor-pointer active:scale-[0.98]">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-1 shadow-lg transition-transform duration-300 group-hover:rotate-12">
                                    <Zap className="w-5 h-5 text-white" /> {/* Using Lucide Zap icon */}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">AI-Powered Insights & Alerts</h3>
                                    <p className="text-gray-600 text-sm">Get smart rebalancing suggestions and timely alerts.</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 pt-2 animate-fade-in-up delay-600">
                            <button
                                className="relative px-9 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden
                                        hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/30
                                        transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                                        active:scale-[0.98] active:shadow-none group"
                                onClick={handleButtonClick}
                            >
                                Get Started Today
                                <svg className="w-5 h-5 ml-2 inline -rotate-45 transition-transform duration-300 group-hover:rotate-0 group-active:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                            <button
                                className="relative px-9 py-4 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-full border border-gray-300 overflow-hidden
                                        hover:bg-gray-100 hover:shadow-md
                                        transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] group"
                                onClick={handleButtonClick}
                            >
                                Watch Demo
                                <Play className="w-5 h-5 ml-2 inline transition-transform duration-300 group-hover:scale-110 group-active:scale-90" /> {/* Using Lucide Play icon */}
                            </button>
                        </div>

                        {/* Dynamic Stats Counter - Integrated more smoothly */}
                        <div className="flex items-center gap-8 pt-8 border-t border-gray-200 animate-fade-in-up delay-700">
                            <div className="flex-1 text-center transform transition-transform duration-300 hover:scale-105 active:scale-100 cursor-pointer">
                                <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md transition-opacity duration-700">
                                    {stats[currentStat].value}
                                </div>
                                <div className="text-md text-gray-600 mt-2">{stats[currentStat].label}</div>
                            </div>
                            <div className="flex-1 text-center transform transition-transform duration-300 hover:scale-105 active:scale-100 cursor-pointer">
                                <div className="text-4xl font-extrabold text-green-600 drop-shadow-md">+23.5%</div>
                                <div className="text-md text-gray-600 mt-2">Annualized Average Returns</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Elements (Dashboard Mockup) - Now perfectly aligned */}
                    <div className={`lg:col-span-5 relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        {/* Main Dashboard Card - Removed 'rotate-3' and 'hover:rotate-0' */}
                        <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-3xl border border-gray-200/60 z-20 transition-transform duration-500 hover:scale-[1.01] hover:shadow-4xl active:scale-[0.99] cursor-pointer">
                            {/* Market Data Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Live Market Dashboard</h3>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping-light"></div>
                                    <span className="text-sm text-gray-600">Real-time</span>
                                </div>
                            </div>

                            {/* Market Cards: Displays NIFTY, SENSEX, BANKNIFTY data */}
                            <div className="space-y-4 mb-8">
                                {marketData.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-5 bg-gray-50/70 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:bg-blue-50 active:scale-[0.99] cursor-pointer">
                                        <div>
                                            <div className="font-semibold text-gray-800 text-lg">{item.symbol}</div>
                                            <div className="text-3xl font-extrabold text-gray-900 mt-1">{item.value}</div>
                                        </div>
                                        {/* Displays change with color-coded positive/negative indicator */}
                                        <div className={`text-right ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                                            <div className="flex items-center text-lg font-bold">
                                                <svg className={`w-5 h-5 mr-1 ${item.positive ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                </svg>
                                                <span>{item.change}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chart Placeholder: Animated bars to simulate performance */}
                            <div className="bg-gradient-to-tr from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-100 shadow-inner">
                                <div className="flex items-end justify-between h-36">
                                    {[...Array(9)].map((_, i) => ( // More bars for a richer chart
                                        <div
                                            key={i}
                                            className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg animate-bar-grow-dynamic"
                                            style={{
                                                height: `${Math.random() * 70 + 30}%`, // Varied heights
                                                width: '9%',
                                                animationDelay: `${i * 0.1}s` // Staggered animation
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="text-center mt-5 text-sm font-medium text-gray-700">Historical Performance Overview</div>
                            </div>
                        </div>

                        {/* Floating Elements - More integrated and visually distinct */}
                        <div className="absolute -top-8 left-1/4 -translate-x-1/2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-5 shadow-xl animate-float-subtle-2 z-30 transform transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                            <div className="text-white font-extrabold text-xl">+₹1,24,500</div>
                            <div className="text-emerald-100 text-sm mt-1">Today's Profit</div>
                        </div>

                        <div className="absolute bottom-1/4 -right-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-5 shadow-xl animate-float-subtle-3 z-30 transform transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                            <div className="text-white font-extrabold text-xl">Smart Rebalance!</div>
                            <div className="text-purple-100 text-sm mt-1">AI-Powered Recommendation</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave SVG - Adjusted for better integration */}
            <div className="absolute bottom-0 left-0 right-0 z-0 opacity-20"> {/* Reduced opacity for subtlety */}
                <svg viewBox="0 0 1440 120" className="w-full h-auto">
                    <path
                        d="M0,0 C480,80 960,80 1440,0 L1440,120 L0,120 Z"
                        fill="url(#waveGradient)" // Use a gradient for the wave
                    />
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366F1" /> {/* Indigo */}
                            <stop offset="50%" stopColor="#8B5CF6" /> {/* Purple */}
                            <stop offset="100%" stopColor="#EC4899" /> {/* Pink */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Custom Keyframes for more organic and appealing animations */}
            <style>{`
                /* Floating elements */
                @keyframes float-subtle-2 {
                0%, 100% { transform: translate(-50%, 0); }
                50% { transform: translate(-50%, -10px); }
                }
                @keyframes float-subtle-3 {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(0, -10px); }
                }

                /* Blob animations - slightly faster and more varied */
                @keyframes blob-slow {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(40px, -60px) scale(1.06); }
                66% { transform: translate(-30px, 30px) scale(0.97); }
                }
                @keyframes blob-medium {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(-50px, 40px) scale(0.96); }
                66% { transform: translate(60px, -50px) scale(1.04); }
                }
                @keyframes blob-fast {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(35px, 35px) scale(1.03); }
                66% { transform: translate(-25px, -25px) scale(0.98); }
                }

                /* Bar chart grow animation with a bounce */
                @keyframes bar-grow-dynamic {
                0% { transform: scaleY(0); opacity: 0; }
                70% { transform: scaleY(1.05); opacity: 1; } /* Slightly overshoot */
                100% { transform: scaleY(1); opacity: 1; }
                }

                /* Fade in and slide up */
                @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
                }

                /* Light pulse for live indicators */
                @keyframes pulse-light {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.6; }
                }
                @keyframes ping-light {
                0% { transform: scale(0.8); opacity: 1; }
                100% { transform: scale(1.5); opacity: 0; }
                }

                /* Ripple Effect for Buttons */
                .ripple-effect {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.7); /* White ripple */
                animation: ripple-animation 0.6s linear forwards;
                transform: scale(0);
                opacity: 1;
                }

                @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;