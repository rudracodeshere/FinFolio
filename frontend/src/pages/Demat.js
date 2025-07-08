import React, { useState } from 'react';
import {
  User, Mail, Phone, MapPin, Calendar, Building, FileText,
  Shield, TrendingUp, DollarSign, Upload, CheckCircle,
  Star, CreditCard, Briefcase, ChevronRight
} from 'lucide-react';

const DematAccountForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
    address: '', city: '', state: '', pincode: '',
    occupation: '', income: '', experience: '',
    panCard: null, aadharCard: null,
    accountType: 'individual', tradingSegment: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Address", icon: MapPin },
    { number: 3, title: "Financial", icon: Briefcase },
    { number: 4, title: "Documents", icon: FileText },
    { number: 5, title: "Account Setup", icon: CreditCard }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setSubmissionMessage('');
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionMessage('Form submitted successfully!');
      // Optionally reset form or redirect
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Enter first name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="dateOfBirth"
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Full Address *</label>
              <textarea
                id="address"
                required
                rows={3}
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
                placeholder="Enter complete address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                <input
                  id="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Enter city"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                <input
                  id="state"
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Enter state"
                />
              </div>

              <div>
                <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">PIN Code *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="pincode"
                    type="text"
                    required
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Enter PIN code"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">Occupation *</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="occupation"
                    required
                    value={formData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select Occupation</option>
                    <option value="salaried">Salaried Employee</option>
                    <option value="business">Business Owner</option>
                    <option value="professional">Professional</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="income" className="block text-sm font-semibold text-gray-700 mb-2">Annual Income *</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="income"
                    required
                    value={formData.income}
                    onChange={(e) => handleInputChange('income', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select Income Range</option>
                    <option value="below-2L">Below ₹2 Lakhs</option>
                    <option value="2L-5L">₹2 - 5 Lakhs</option>
                    <option value="5L-10L">₹5 - 10 Lakhs</option>
                    <option value="10L-25L">₹10 - 25 Lakhs</option>
                    <option value="25L-50L">₹25 - 50 Lakhs</option>
                    <option value="above-50L">Above ₹50 Lakhs</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">Trading Experience *</label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="experience"
                    required
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select Experience</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="experienced">Experienced (3+ years)</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: 'panCard', label: 'PAN Card', required: true },
                { key: 'aadharCard', label: 'Aadhar Card', required: true }
              ].map((doc) => (
                <div key={doc.key} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">{doc.label}</h4>
                    {doc.required && <span className="text-red-500 text-sm">*Required</span>}
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      {formData[doc.key] ? formData[doc.key].name : 'Click to upload'}
                    </p>
                    <p className="text-sm text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(doc.key, e.target.files[0])}
                      className="hidden"
                      id={doc.key}
                    />
                    <label
                      htmlFor={doc.key}
                      className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">Account Type *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'individual', label: 'Individual', desc: 'Personal trading account' },
                  { value: 'joint', label: 'Joint Account', desc: 'Shared with family member' }
                ].map((type) => (
                  <div
                    key={type.value}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.accountType === type.value
                        ? 'border-green-500 bg-green-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('accountType', type.value)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-800 font-semibold">{type.label}</h4>
                        <p className="text-gray-600 text-sm">{type.desc}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        formData.accountType === type.value
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">Trading Segments *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'equity', label: 'Equity', desc: 'Buy & sell stocks' },
                  { value: 'derivatives', label: 'Derivatives', desc: 'Futures & Options' },
                  { value: 'commodities', label: 'Commodities', desc: 'Trade in raw materials' },
                  { value: 'currency', label: 'Currency', desc: 'Exchange foreign currencies' }
                ].map((segment) => (
                  <div
                    key={segment.value}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.tradingSegment.includes(segment.value)
                        ? 'border-green-500 bg-green-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => {
                      const segments = formData.tradingSegment.includes(segment.value)
                        ? formData.tradingSegment.filter(s => s !== segment.value)
                        : [...formData.tradingSegment, segment.value];
                      handleInputChange('tradingSegment', segments);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-800 font-semibold">{segment.label}</h4>
                        <p className="text-gray-600 text-sm">{segment.desc}</p>
                      </div>
                      <div className={`w-4 h-4 rounded border-2 ${
                        formData.tradingSegment.includes(segment.value)
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative font-inter">
      {/* Background with Dark Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/dematbg.mp4')`
        }}
      />
      <div className="absolute inset-0 bg-black opacity-80" />

     

      <div className="relative flex min-h-screen items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white/30 border-white/50 shadow-2xl">
          {/* Left Side - Branding and Features */}
          <div className="flex flex-col justify-center space-y-8 p-8 lg:p-12 text-white">
            <div className="flex items-center space-x-4">
              {/* Replaced the Lucide TrendingUp icon with your logo image */}
              <div className="w-32 h-32 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/images/Logo.png" alt="FinFolio Logo" className="w-36 h-36 object-contain" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-white">FinFolio</h1>
                <p className="text-green-200 text-lg">Your Smart Trading Platform</p>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight mb-6">
                Open Your <span className="text-green-400">Demat Account</span> Today!
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join millions of smart investors and start your journey with zero brokerage on equity delivery trades. Fast, secure, and intuitive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Shield className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-white font-semibold">SEBI Registered</p>
                  <p className="text-gray-300 text-sm">100% Safe & Secure Transactions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Star className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-white font-semibold">5M+ Users</p>
                  <p className="text-gray-300 text-sm">Trusted by a Growing Community</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <DollarSign className="w-8 h-8 text-indigo-400" />
                <div>
                  <p className="text-white font-semibold">Zero Brokerage</p>
                  <p className="text-gray-300 text-sm">On Equity Delivery Trades</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Quick Setup</p>
                  <p className="text-gray-300 text-sm">Account Ready in Minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                  <React.Fragment key={step.number}>
                    <div className="flex items-center flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform ${
                        isActive ? 'bg-green-600 text-white scale-110 shadow-lg' :
                        isCompleted ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`flex-grow h-1 mx-2 rounded-full ${
                          isCompleted ? 'bg-green-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            <div className="flex-grow">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-gray-600 text-lg">Step {currentStep} of {steps.length}</p>
              </div>

              {renderStepContent()}
            </div>

            {/* Submission Message */}
            {submissionMessage && (
              <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-xl flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>{submissionMessage}</span>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md"
                >
                  Previous
                </button>
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center space-x-2 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DematAccountForm;