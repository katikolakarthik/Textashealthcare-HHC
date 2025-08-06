'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/homepage/Header';
import Footer from '@/homepage/Footer';
import ThreeColumnSection from '@/homepage/ThreeColumnSection';

export default function DataInsights() {
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
      }, 3000); // Wait 3 seconds before next section
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
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-red-600 rounded-[24px] md:rounded-[36px] lg:rounded-[48px] shadow-2xl overflow-hidden relative min-h-[300px] md:min-h-[380px] lg:min-h-[440px] border border-white/10">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12 space-y-6 md:space-y-7 lg:space-y-8 text-white">
                {/* Service Badge */}
                <div className="inline-block bg-white rounded-[18px] px-6 py-3 w-fit shadow-lg">
                  <span className="text-sm font-medium text-gray-900">Data Insights</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Predictive modeling solutions for a resilient and future ready you
                </h1>
                
                {/* Description Paragraph */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  With a team of data scientists offering insights to lead in the digital world, high investment costs and complexities in evolving analytics technologies don't have to prevent your organization from reaping the benefits of data.
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
                      src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/652fdabffec70bd4d55a92f7_fghtygu.png"
                      alt="Business professionals collaborating in office setting - woman with dark brown hair and glasses pointing/writing on board, man with light red/blonde hair in blue shirt listening attentively"
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

      {/* Our Services Driven by Predictive Analytics Section */}
      <motion.div 
        className="relative z-10 w-full bg-white py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Our line of services driven by{' '}
              <span className="text-red-600">predictive analytics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage advanced data science to transform your business operations and decision-making processes.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Service 1: Predictive Modeling for Business Readiness */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Predictive Modeling for Business Readiness
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced modeling techniques to prepare your business for future challenges and opportunities.
                </p>
              </div>
            </motion.div>

            {/* Service 2: Employee Attrition Analysis */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Employee Attrition Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Identify patterns and predict employee turnover to improve retention strategies.
                </p>
              </div>
            </motion.div>

            {/* Service 3: Clinician Notes Analysis */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Clinician Notes Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Extract insights from clinical documentation to improve patient care and outcomes.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* How Can We Help You Section */}
      <motion.div 
        className="relative z-10 w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How can we <span className="text-red-600">help</span> you?
          </motion.h2>

          {/* Service Cards Grid - 2x2 Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Top-Left Box: Analyzing patient outcomes */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-2xl hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Analyzing patient outcomes
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Comprehensive analysis of patient data to identify trends, predict outcomes, and improve care quality through advanced analytics.
                </p>
              </div>
            </motion.div>

            {/* Top-Right Box: Understanding drivers behind financial impact */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-2xl hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Understanding drivers behind financial impact
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Deep dive into financial data to identify key drivers, optimize revenue cycles, and improve financial performance.
                </p>
              </div>
            </motion.div>

            {/* Bottom-Left Box: Attrition analysis to increase employee retention */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-2xl hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Attrition analysis to increase employee retention
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Predictive analysis of employee data to identify retention risks and develop strategies to improve employee satisfaction and retention.
                </p>
              </div>
            </motion.div>

            {/* Bottom-Right Box: Assessing service quality and efficiency */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-2xl hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Assessing service quality and efficiency
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Comprehensive evaluation of service delivery processes to identify improvement opportunities and optimize operational efficiency.
                </p>
              </div>
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
                <div className="w-4 h-4 bg-red-500 rounded-full transition-all duration-300" id="dot-1"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-2"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-3"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-4"></div>
              </motion.div>
            </div>
            {/* Right side - Data Insights Solutions */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white h-full">
              <div className="overflow-y-auto max-h-[300px] md:max-h-[350px] lg:max-h-[400px] scrollbar-hide scroll-smooth">
                {/* Section 1: Data Driven Team */}
                <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Data Driven<br />
                    Team
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We recruit and manage a team of data scientists to work exclusively on your data in the most secure environment and provide you with relevant, actionable, ready-to-implement insights.
                  </motion.p>
                </div>
                
                {/* Section 2: Comprehensive, Tailored Solutions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4 mb-8"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Comprehensive, Tailored Solutions
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                    We take a flexible, client-centric approach that helps us focus on the problems you face and develop solutions customized to your business and your ethos.
                  </p>
                </motion.div>
                
                {/* Section 3: Technology Driven Workflows */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Technology Driven Workflows
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                    We are equipped with digital technologies to align with your software platform for seamless workflow, comprehensive data analysis and detailed reporting.
                  </p>
                </motion.div>
                
                {/* Section 4: Collaborative Approach */}
                <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Collaborative<br />
                    Approach
                  </motion.h3>
                  
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We are not the typical third-party vendor or partner. Rather, we are an extended arm of your company who knows that working together and building relationships is critical to our shared success.
                  </motion.p>
                </div>
              </div>
            </div>
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