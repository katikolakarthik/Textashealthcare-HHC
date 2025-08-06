'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/homepage/Header';
import Footer from '@/homepage/Footer';
import ThreeColumnSection from '@/homepage/ThreeColumnSection';

export default function RevenueCycleManagement() {
  const [activeProvider, setActiveProvider] = useState('hospice');

  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollbar-hide');
    const dots = document.querySelectorAll('[id^="dot-"]');
    const lines = document.querySelectorAll('[id^="line-"]');
  
    const updateDots = () => {
      if (!scrollContainer) return;
      const scrollTop = scrollContainer.scrollTop;
      const sectionHeight = 400; // min-h-[400px]
      const currentSection = Math.floor(scrollTop / sectionHeight);
      
      dots.forEach((dot) => {
        dot.classList.add('opacity-50');
        dot.classList.remove('opacity-100');
      });
      lines.forEach(line => {
        line.classList.add('opacity-50');
        line.classList.remove('opacity-100');
      });
      
      if (currentSection >= 0 && currentSection < dots.length) {
        if (currentSection === 0) {
          dots[0].classList.remove('opacity-50');
          dots[0].classList.add('opacity-100');
          if (lines[0]) {
            lines[0].classList.remove('opacity-50');
            lines[0].classList.add('opacity-100');
          }
        } else {
          dots[currentSection].classList.remove('opacity-50');
          dots[currentSection].classList.add('opacity-100');
        }
      }
    };
  
    let currentSection = 0;
    let sectionTimer: NodeJS.Timeout | null = null;
    
    const autoScroll = () => {
      if (!scrollContainer) return;
      const sectionHeight = 400;
      
      sectionTimer = setTimeout(() => {
        if (scrollContainer && currentSection < 3) { // 4 sections total (0-3)
          currentSection++;
          scrollContainer.scrollTo({
            top: currentSection * sectionHeight,
            behavior: 'smooth'
          });
        } else if (currentSection >= 3) {
          // Reset to first section after viewing all
          currentSection = 0;
          scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        updateDots(); // Update dots after scrolling
        autoScroll(); // Continue auto-scroll
      }, 2000); // Wait 2 seconds before next section
    };
    
    const handleScroll = () => {
      if (!scrollContainer) return;
      updateDots();
    };
  
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      updateDots(); // Initial call
      autoScroll(); // Start auto-scroll
      
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', handleScroll);
        }
        if (sectionTimer) {
          clearTimeout(sectionTimer);
        }
      };
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-900">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 md:py-12 lg:py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1200px] mx-auto w-full px-4">
          {/* Main card with rounded corners */}
          <div className="bg-gradient-to-br from-[#2d2d54] to-[#1a1a2e] rounded-[24px] md:rounded-[36px] lg:rounded-[48px] shadow-2xl overflow-hidden relative min-h-[300px] md:min-h-[380px] lg:min-h-[440px] border border-white/10">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12 space-y-6 md:space-y-7 lg:space-y-8 text-white">
                {/* Service Badge */}
                <div className="inline-block bg-white rounded-[18px] px-6 py-3 w-fit shadow-lg">
                  <span className="text-sm font-medium text-gray-900">Revenue Cycle Management</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Customized RCM<br />
                  solutions with one<br />
                  goal in mind, your<br />
                  bottom line
                </h1>
                
                {/* Description Paragraph */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  From insurance eligibility & verification to preauthorization to denial management, we offer an array of solutions to accelerate revenue collection and improve your bottom line.
                </p>
                
                {/* Call-to-Action Button */}
                <motion.button 
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </div>
              
              {/* Right side - Circular image centered */}
              <div className="relative h-[300px] md:h-[380px] lg:h-[440px] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Circular image positioned in the center */}
                  <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden mt-20 mb-16 md:mt-40 md:mb-0 lg:mt-60 lg:mb-0">
                    <Image
                      src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/652fdac027d5ec24d9fc688d_fuyi.png"
                      alt="Person typing on laptop with financial data"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RCM Benefits Section */}
      <motion.div 
        className="relative z-10 w-full bg-[#1a1a2e] py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            RCM benefits
          </motion.h2>

          {/* Modern RCM Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Benefit 1: Improved Compliance */}
            <motion.div 
              className="group relative bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Improved Compliance
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Enhanced regulatory adherence and audit readiness
                </p>
              </div>
            </motion.div>

            {/* Benefit 2: Timely Reimbursements */}
            <motion.div 
              className="group relative bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Timely Reimbursements
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Faster payment processing and cash flow optimization
                </p>
              </div>
            </motion.div>

            {/* Benefit 3: Fewer Interruptions To Cash Flow */}
            <motion.div 
              className="group relative bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Fewer Interruptions To Cash Flow
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Consistent revenue streams and reduced payment delays
                </p>
              </div>
            </motion.div>

            {/* Benefit 4: Reduced Billing Errors */}
            <motion.div 
              className="group relative bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Reduced Billing Errors
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Minimized claim denials and improved accuracy
                </p>
              </div>
            </motion.div>

            {/* Benefit 5: Less Staff Management */}
            <motion.div 
              className="group relative bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Less Staff Management
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Streamlined processes and reduced administrative burden
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Cost Saving Calculator Section */}
      <motion.div 
        className="relative z-10 w-full bg-gradient-to-r from-red-900/80 via-purple-900/90 to-indigo-900/80 py-16 md:py-20 lg:py-24 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-purple-900/40 to-indigo-900/40"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 transform translate-x-20 translate-y-20">
            <svg className="w-full h-full text-white/10" viewBox="0 0 200 200" fill="currentColor">
              {/* Calculator shape */}
              <rect x="20" y="40" width="160" height="120" rx="8" fill="currentColor"/>
              {/* Calculator screen */}
              <rect x="30" y="50" width="140" height="20" rx="2" fill="white"/>
              {/* Calculator buttons */}
              <rect x="30" y="80" width="25" height="15" rx="2" fill="white"/>
              <rect x="65" y="80" width="25" height="15" rx="2" fill="white"/>
              <rect x="100" y="80" width="25" height="15" rx="2" fill="white"/>
              <rect x="135" y="80" width="25" height="15" rx="2" fill="white"/>
              <rect x="30" y="105" width="25" height="15" rx="2" fill="white"/>
              <rect x="65" y="105" width="25" height="15" rx="2" fill="white"/>
              <rect x="100" y="105" width="25" height="15" rx="2" fill="white"/>
              <rect x="135" y="105" width="25" height="15" rx="2" fill="white"/>
              <rect x="30" y="130" width="25" height="15" rx="2" fill="white"/>
              <rect x="65" y="130" width="25" height="15" rx="2" fill="white"/>
              <rect x="100" y="130" width="25" height="15" rx="2" fill="white"/>
              <rect x="135" y="130" width="25" height="15" rx="2" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cost Saving Calculator
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Know how much you save with Red Road as your trusted partner
          </motion.p>
          
          <motion.button 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Calculator
          </motion.button>
        </div>
      </motion.div>

      {/* How can we help you? Section */}
      <motion.div 
        className="relative z-10 w-full bg-gray-50 py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-600">How can we</span> <span className="text-black">help you?</span>
          </motion.h2>

          {/* Service Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Card 1: Credentialing */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Credentialing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ensure providers meet qualifications for patient care.
              </p>
            </motion.div>

            {/* Card 2: Eligibility & Benefit Verification */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Eligibility & Benefit Verification
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Verify eligibility and insurance coverage for patient services.
              </p>
            </motion.div>

            {/* Card 3: Charge Entry */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Charge Entry
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Record medical charges for billing purposes.
              </p>
            </motion.div>

            {/* Card 4: Payment Posting */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Payment Posting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Log received payments from insurers and patients.
              </p>
            </motion.div>

            {/* Card 5: Preauthorization */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Preauthorization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Obtain approval for medical procedures or treatments.
              </p>
            </motion.div>

            {/* Card 6: Patient Demographic Entry */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Patient Demographic Entry
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Capture essential patient information for records.
              </p>
            </motion.div>

            {/* Card 7: Claims Rejection Management */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Claims Rejection Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Resolve issues causing insurance claim denials.
              </p>
            </motion.div>

            {/* Card 8: Correspondence & Denial Management */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Correspondence & Denial Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Handle insurer communications and claim denials.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* What You Get Section - Dark Blue Background */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#1a1a2e] w-full">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - What You Get */}
            <div className="flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 text-white">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                What you get
              </motion.h2>
              {/* Dynamic Progress indicator dots */}
              <motion.div 
                className="flex items-center space-x-4 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-4 h-4 bg-red-500 rounded-full transition-all duration-300 opacity-100" id="dot-1"></div>
                <div className="w-8 h-0.5 bg-red-500 transition-all duration-300 opacity-100" id="line-1"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-2"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-3"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-4"></div>
              </motion.div>
            </div>
            {/* Right side - Comprehensive Solutions */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white h-full">
              <div className="overflow-y-auto max-h-[300px] md:max-h-[350px] lg:max-h-[400px] scrollbar-hide scroll-smooth">
                {/* Section 1: Comprehensive, Tailored Solutions */}
                <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Comprehensive,<br />
                    Tailored Solutions
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We take a flexible, client-centric approach that helps us focus on the problems you face and develop solutions customized to your business and your ethos.
                  </motion.p>
                </div>
                
                {/* Section 2: Improved Billing Accuracy */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4 mb-8"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Improved Billing Accuracy
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                    With a team of RCM experts we take care of billing, claim submission, follow-ups and timely payment collection.
                  </p>
                </motion.div>
                
                {/* Section 3: Collaborative Approach */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Collaborative Approach
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                    We are not the typical third-party vendor or partner. Rather, we are an extended arm of your company who knows that working together and building relationships is critical to our shared success.
                  </p>
                </motion.div>
                
                {/* Section 4: Quality Above All */}
                <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Quality<br />
                    Above All
                  </motion.h3>
                  
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We follow a meticulous multilevel RCM QA process to maximize accuracy and ensure quick turnaround.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-gray-50 to-white w-full py-8 md:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Section Title */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10 lg:mb-12 font-sans tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-black">What our</span> <span className="text-red-600">clients say</span>
            </motion.h2>
            
            {/* Testimonial Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Client Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 font-sans tracking-tight">
                  Chief Compliance Officer - Mid-Sized Home Health Provider
                </h3>
              </div>
              
              {/* Separator Line */}
              <div className="w-full h-px bg-gray-200 mb-8"></div>
              
              {/* Testimonial Text */}
              <blockquote className="text-base lg:text-lg text-gray-600 leading-relaxed font-normal font-sans">
                "The Red Road consulting team is committed to quality assurance and excellence. They utilize a team of experts who focus on the careful review of clinical documentation to assure necessary regulatory criteria are met and the records reflects quality patient care services. The Red Road reviewers provide prompt service with timely feedback and maintain a close working relationship with our quality assurance team."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Three Column Section */}
      <ThreeColumnSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 