'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/homepage/Header';
import Footer from '@/homepage/Footer';
import ThreeColumnSection from '@/homepage/ThreeColumnSection';

export default function ClinicalDocumentationReview() {
  const [activeProvider, setActiveProvider] = useState('hospice');

  const providerOptions = [
    { id: 'home-health', label: 'Home Health Providers' },
    { id: 'hospice', label: 'Hospice Providers' },
    { id: 'skilled-nursing', label: 'Skilled Nursing Providers' }
  ];

  const contentData = {
    'home-health': {
      title: 'Home Health Review',
      content: 'We provide comprehensive home health documentation reviews to ensure compliance with CMS guidelines and improve patient care quality. Our reviews focus on OASIS assessments, care plans, and clinical documentation to help providers maintain high standards and avoid compliance issues.'
    },
    'hospice': {
      title: 'Hospice Review',
      content: 'We determine appropriateness of services and provide summary reports that highlight presence of all CMS specific documentation and information. Reviews can be customized to suit your needs - SoC, Recertification, and Level of Care Documentation reviews. Our reports help providers gain valuable feedback on the support and training that their clinicians need to improve compliance.'
    },
    'skilled-nursing': {
      title: 'Skilled Nursing Review',
      content: 'Our skilled nursing documentation reviews ensure compliance with federal regulations and help providers maintain high standards of care. We review clinical documentation, care plans, and assessments to identify opportunities for improvement and ensure proper reimbursement.'
    }
  };

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
        if (scrollContainer && currentSection < 4) { // 5 sections total (0-4)
          currentSection++;
          scrollContainer.scrollTo({
            top: currentSection * sectionHeight,
            behavior: 'smooth'
          });
        } else if (currentSection >= 4) {
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
                  <span className="text-sm font-medium text-gray-900">Clinical Documentation Review & Compliance Support</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Reduce risk, meet Medicare compliance while prioritizing the care you provide
                </h1>
                
                {/* Description Paragraph */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Our comprehensive document reviews are only done by Registered Nurses to ensure the highest standards of quality. We review cases remotely and perform all our reviews using our Quality Review Tool software.
                </p>
                

              </div>
              
              {/* Right side - Circular image centered */}
              <div className="relative h-[300px] md:h-[380px] lg:h-[440px] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Circular image positioned in the center */}
                  <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden mt-20 mb-16 md:mt-40 md:mb-0 lg:mt-60 lg:mb-0">
                                         <Image
                       src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                       alt="Healthcare Professionals Meeting"
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

      {/* Statistics Banner Section */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Top Section - Statistics Banner */}
        <div className="relative bg-gradient-to-r from-red-600 to-blue-900 p-8 md:p-12 lg:p-16 overflow-hidden w-full shadow-2xl">
          {/* Statistics content */}
          <div className="relative z-5 flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 lg:space-y-0 lg:space-x-20 max-w-5xl mx-auto">
            {/* Left Statistic */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl lg:text-8xl font-bold mb-4 text-white">
                98%
              </div>
              <div className="text-lg lg:text-xl text-white font-medium">
                Consistent Accuracy Rate
              </div>
            </motion.div>
            
            {/* Separator */}
            <div className="hidden md:block w-px h-20 bg-white/30"></div>
            
            {/* Right Statistic */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl lg:text-8xl font-bold mb-4 text-white">
                8000+
              </div>
              <div className="text-lg lg:text-xl text-white font-medium">
                Charts Reviewed
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - CHAP Verified Information */}
        <div className="relative bg-[#1a1a2e] w-full p-8 md:p-12 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left Text Block */}
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Our Skilled
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-2">
                  Nursing Clinical
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500">
                  Audit Tool is now
                </div>
              </motion.div>
              
              {/* Middle Badge */}
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white border-2 border-gray-300 rounded-lg px-8 py-6 text-center shadow-lg">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">
                    CHAP
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-gray-900">
                    VERIFIED
                  </div>
                </div>
              </motion.div>
              
              {/* Right Text Block */}
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  TEXTAS Healthcare's Audit tool assists clients in effectively communicating opportunities for improvement regarding clinical care, documentation, and compliance with CHAP Standards.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>



      {/* How Can We Help You Section */}
      <motion.div 
        className="relative z-10 w-full bg-gray-50 py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How can we <span className="text-red-600">help</span> you?
          </motion.h2>

          {/* Provider Navigation Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {providerOptions.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setActiveProvider(provider.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeProvider === provider.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {provider.label}
              </button>
            ))}
          </motion.div>

          {/* Content Cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            key={activeProvider}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {contentData[activeProvider as keyof typeof contentData].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {contentData[activeProvider as keyof typeof contentData].content}
              </p>
            </motion.div>

            {/* Right Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ADR Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure compliance standards are met in an ever-changing regulatory environment and help you with documentation reviews to ensure that the conditions of participation and payment are met, when you receive Additional Documentation Requests (ADR).
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
                <div className="w-4 h-4 bg-red-500 rounded-full transition-all duration-300" id="dot-1"></div>
                <div className="w-8 h-0.5 bg-red-500 transition-all duration-300" id="line-1"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-2"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-3"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-4"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-5"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-50 transition-all duration-300" id="dot-6"></div>
              </motion.div>
            </div>
            {/* Right side - Comprehensive Solutions */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white h-full">
              <div className="overflow-y-auto max-h-[300px] md:max-h-[350px] lg:max-h-[400px] scrollbar-hide scroll-smooth">
                {/* Section 1: Comprehensive Clinical Documentation Review */}
                <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Comprehensive Clinical<br />
                    Documentation Review
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Our specialized clinical documentation review process ensures accuracy, completeness, and compliance with healthcare standards while optimizing patient care outcomes and reducing risk.
                  </motion.p>
                </div>
                
                {/* Section 2: Registered Nurse Team */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4 mb-8"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Registered Nurse Team
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                    All our clinical documentation reviews are conducted exclusively by Registered Nurses to ensure the highest standards of quality and clinical expertise in every review.
                  </p>
                </motion.div>
                
                {/* Section 3: Quality Review Tool */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Quality Review Tool
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                    We perform all our reviews using our proprietary Quality Review Tool software, ensuring consistent, thorough, and efficient documentation review processes.
                  </p>
                </motion.div>
                
                {/* Section 4: Medicare Compliance */}
                <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Medicare<br />
                    Compliance Focus
                  </motion.h3>
                  
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Our clinical documentation reviews specifically focus on Medicare compliance requirements, helping you reduce risk and meet regulatory standards while prioritizing the care you provide to patients.
                  </motion.p>
                </div>
                
                {/* Section 5: Risk Reduction */}
                <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-7 lg:mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Risk Reduction<br />
                    & Quality Assurance
                  </motion.h3>
                  
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Our comprehensive review process helps identify potential compliance issues, documentation gaps, and opportunities for improvement, ultimately reducing risk and enhancing the quality of patient care delivery.
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
                "The TEXTAS Healthcare consulting team is committed to quality assurance and excellence. They utilize a team of experts who focus on the careful review of clinical documentation to assure necessary regulatory criteria are met and the records reflects quality patient care services. The TEXTAS Healthcare reviewers provide prompt service with timely feedback and maintain a close working relationship with our quality assurance team."
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
