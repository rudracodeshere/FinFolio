

import React from 'react';
// Import specific Lucide icons to be used
import { BarChart, FileText, DollarSign, Bell, Edit, Lock, Sparkles } from 'lucide-react';

// Data for the features, including dummy image paths, and specific colors
// IMPORTANT: Replace 'path/to/your/image.jpg' with your actual image paths
const featuresData = [
    {
        id: 'easy-portfolio',
        icon: <BarChart />, // Using Lucide BarChart icon
        title: "Effortless Portfolio Setup",
        description: "Easily build and organize your first investment portfolio with our step-by-step guided tools.",
        overlayImage: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Portfolio',
        hoverBorderColor: 'border-blue-500',
        overlayBgColor: 'bg-blue-300', // Softer blue
        overlayTextColor: 'text-blue-800' // Darker text for contrast
    },
    {
        id: 'live-tracking',
        icon: <FileText />, // Using Lucide FileText icon
        title: "Real-Time Stock Insights",
        description: "Get instant access to live stock prices, market data, and essential company information.",
        overlayImage: 'https://placehold.co/600x400/4C1D95/FFFFFF?text=Real-time+Data',
        hoverBorderColor: 'border-purple-500',
        overlayBgColor: 'bg-purple-300', // Softer purple
        overlayTextColor: 'text-purple-800' // Darker text for contrast
    },
    {
        id: 'performance-insights',
        icon: <DollarSign />, // Using Lucide DollarSign icon
        title: "Transparent Profit/Loss",
        description: "Clearly understand your investment performance with detailed profit/loss calculations and ROI reports.",
        overlayImage: 'https://placehold.co/600x400/10B981/FFFFFF?text=Performance',
        hoverBorderColor: 'border-green-500',
        overlayBgColor: 'bg-green-300', // Softer green
        overlayTextColor: 'text-green-800' // Darker text for contrast
    },
    {
        id: 'watchlists-alerts',
        icon: <Bell />, // Using Lucide Bell icon
        title: "Smart Watchlists & Alerts",
        description: "Track your favorite stocks with personalized watchlists and receive timely alerts on price changes.",
        overlayImage: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Watchlist',
        hoverBorderColor: 'border-yellow-500',
        overlayBgColor: 'bg-yellow-300', // Softer yellow
        overlayTextColor: 'text-yellow-800' // Darker text for contrast
    },
    {
        id: 'market-entry',
        icon: <Edit />, // Using Lucide Edit icon
        title: "Guided Market Entry",
        description: "Seamlessly open your free Demat account through our platform and start investing with confidence.",
        overlayImage: 'https://placehold.co/600x400/EF4444/FFFFFF?text=Market+Entry',
        hoverBorderColor: 'border-red-500',
        overlayBgColor: 'bg-red-300', // Softer red
        overlayTextColor: 'text-red-800' // Darker text for contrast
    },
    {
        id: 'secure-simple',
        icon: <Lock />, // Using Lucide Lock icon
        title: "Secure & User-Friendly",
        description: "Your data is safe with us. Enjoy a highly secure yet incredibly simple and intuitive platform.",
        overlayImage: 'https://placehold.co/600x400/0D9488/FFFFFF?text=Security',
        hoverBorderColor: 'border-teal-500',
        overlayBgColor: 'bg-teal-300', // Softer teal
        overlayTextColor: 'text-teal-800' // Darker text for contrast
    }
];

const FeatureCard = ({ icon, title, description, hoverBorderColor, overlayBgColor, overlayTextColor }) => (
    <div
        className={`
            group relative overflow-hidden rounded-2xl shadow-xl border border-[#E5E7EB]
            text-center cursor-pointer
            transform transition-all duration-300 ease-in-out
            hover:scale-[1.02] hover:shadow-2xl ${hoverBorderColor}
        `}
    >
        {/* Overlay with text - visible on hover */}
        <div
            className={`
                absolute inset-0 z-10 flex flex-col items-center justify-center p-4
                transition-all duration-300 opacity-0 group-hover:opacity-100
                ${overlayBgColor}
            `}
        >
            {/* Display original title and description */}
            <h3 className={`
                text-3xl font-extrabold mb-3
                transition-colors duration-300 ${overlayTextColor}
            `}>{title}</h3>
            <p className={`text-lg ${overlayTextColor}`}>{description}</p>
        </div>

        {/* Original content - completely hidden on hover */}
        <div className="
            relative z-20 p-8 flex flex-col items-center text-center
            transition-opacity duration-300 group-hover:opacity-0
        ">
            <div className="
                flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#5B21B6]
                rounded-full flex items-center justify-center mb-6 shadow-lg
                transform transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110
            ">
                {icon} {/* Render the Lucide icon component */}
            </div>
            <h3 className="
                text-3xl font-extrabold text-[#1F2937] mb-3
                transition-colors duration-300
            ">{title}</h3>
            <p className="text-lg text-[#6B7280]">{description}</p>
        </div>
    </div>
);

const Features = () => {
    return (
        <section className="
            pb-2 sm:pb-32 pt-2 sm:pt-16
            bg-gradient-to-br from-[#F8FAFC] via-[#EEF2FF] to-[#F5F3FF]
            overflow-hidden
            font-inter
        ">
            <div className="max-w-7xl mx-auto py-1 justify-center px-6 lg:px-8 text-center">
                <h2 className="
                    text-4xl sm:text-5xl lg:text-6xl
                    font-extrabold bg-clip-text text-transparent
                    bg-gradient-to-r from-[#1E3A8A] to-[#4C1D95]
                    mb-6 sm:mb-8 lg:mb-12
                    drop-shadow-md
                    transform translate-y-0 opacity-100 transition-all duration-700 ease-out
                ">
                    Start Your Investment Journey Confidently
                </h2>
                <p className="
                    text-lg sm:text-xl text-[#4B5563]
                    mb-16 sm:mb-20 lg:mb-24
                    max-w-3xl mx-auto
                    transform translate-y-0 opacity-100 transition-all duration-700 ease-out delay-100
                ">
                    FinFolio provides intuitive tools and guidance, making stock market investing accessible and rewarding for every beginner.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    {featuresData.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            hoverBorderColor={feature.hoverBorderColor}
                            overlayBgColor={feature.overlayBgColor}
                            overlayTextColor={feature.overlayTextColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
