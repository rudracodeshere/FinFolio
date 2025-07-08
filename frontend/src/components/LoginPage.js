import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, ArrowRight, TrendingUp, Shield, Star, Users, BarChart3, Target, CheckCircle, Sparkles, Award, Clock, Lock, Mail, KeyRound } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPromise, setCurrentPromise] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const promises = [
    { icon: Shield, text: "Bank-level security for your data", color: "from-blue-600 to-indigo-600", subtext: "256-bit encryption" },
    { icon: TrendingUp, text: "Real-time market insights", color: "from-indigo-600 to-purple-600", subtext: "Live data updates" },
    { icon: Users, text: "Join 10,000+ successful investors", color: "from-purple-600 to-pink-600", subtext: "Growing community" },
    { icon: BarChart3, text: "Track your portfolio performance", color: "from-emerald-500 to-green-600", subtext: "Advanced analytics" },
    { icon: Target, text: "Achieve your financial goals", color: "from-green-600 to-emerald-500", subtext: "Goal tracking" },
    { icon: Star, text: "Rated #1 by beginners", color: "from-blue-700 to-purple-700", subtext: "5-star reviews" }
  ];

  const stats = [
    { value: "$2.4B+", label: "Assets Managed", icon: BarChart3 },
    { value: "99.9%", label: "Uptime", icon: Clock },
    { value: "10K+", label: "Active Users", icon: Users },
    { value: "4.9★", label: "User Rating", icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromise((prev) => (prev + 1) % promises.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login submitted:', { email, password });
    }, 2000);
  };

  const WavePattern = () => (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#EC4899" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,400 C360,300 720,500 1440,400 L1440,800 L0,800 Z"
          fill="url(#wave1)"
          className="animate-pulse"
        />
        <path
          d="M0,500 C360,400 720,600 1440,500 L1440,800 L0,800 Z"
          fill="url(#wave2)"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M0,600 C360,500 720,700 1440,600 L1440,800 L0,800 Z"
          fill="url(#wave3)"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-indigo-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-emerald-400/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <WavePattern />
      
      {/* Additional background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative flex min-h-screen">
        {/* Left Side - Enhanced Branding */}
        <div className="hidden lg:flex lg:flex-1 flex-col justify-center px-20 py-5 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm relative">
          {/* Logo Section */}
          <div className="relative max-w-xl mb-16">
            <div className="flex items-center mb-12">
              <div className="relative">
                <img src="/images/Logo1.png" alt="FinFolio Logo" className="h-30 w-30 rounded-full shadow-lg" />
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="ml-8">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  FinFolio
                </h1>
                <p className="text-gray-600 text-xl font-medium">Investment made simple</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Welcome back to your
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                  Investment Journey
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Continue building your wealth with our intuitive portfolio tracker and smart investment tools designed for modern investors.
              </p>
              
              {/* Trust badges */}
              <div className="flex items-center gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span className="text-base font-medium text-gray-700">SEC Registered</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <span className="text-base font-medium text-gray-700">SIPC Protected</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <span className="text-base font-medium text-gray-700">Award Winning</span>
                </div>
              </div>
            </div>

            {/* Animated Promises */}
            <div className="relative h-28 overflow-hidden mb-16">
              {promises.map((promise, index) => {
                const Icon = promise.icon;
                const isActive = index === currentPromise;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center gap-6 transition-all duration-1000 transform ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r ${promise.color} rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">{promise.text}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        <span className="text-base text-gray-600">{promise.subtext}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Dots */}
            <div className="flex gap-3 mb-16">
              {promises.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentPromise ? 'bg-blue-600 w-12' : 'bg-gray-300 w-3'
                  }`}
                />
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Enhanced Login Form */}
        <div className="flex-1 flex items-center justify-center px-8 py-0 sm:px-16 lg:px-20">
          <div className="w-full max-w-lg">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl shadow-blue-900/10 border border-gray-200/50 relative overflow-hidden">
              {/* Form background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Sign in to your account</h3>
                  <p className="text-lg text-gray-600">Welcome back! Please enter your details.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-6 w-6 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-3">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <KeyRound className="h-6 w-6 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-14 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 rounded-r-2xl transition-colors duration-200"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-6 w-6 text-gray-400" />
                        ) : (
                          <Eye className="h-6 w-6 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-3 block text-base text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-base text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-2xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center justify-center gap-3">
                      {isLoading ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign in
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>
                </form>

                <div className="mt-10 text-center">
                  <p className="text-base text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">
                      Sign up for free
                    </a>
                  </p>
                </div>

                {/* Social proof */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Trusted by 10,000+ investors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>99.9% uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;