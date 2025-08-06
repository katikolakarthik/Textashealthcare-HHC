'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Footer from '@/homepage/Footer';
import ThreeColumnSection from '@/homepage/ThreeColumnSection';
import Header from '@/homepage/Header';

export default function CodingOasisReview() {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollbar-hide');
    const dots = document.querySelectorAll('[id^="dot-"]');
    const lines = document.querySelectorAll('[id^="line-"]');

    const updateDots = () => {
      if (!scrollContainer) return;
      
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
      
      // Calculate which section is currently visible
      const sectionHeight = 400; // min-h-[400px]
      const currentSection = Math.floor(scrollTop / sectionHeight);
      
      // Reset all dots and lines
      dots.forEach((dot, index) => {
        dot.classList.add('opacity-50');
        dot.classList.remove('opacity-100');
      });
      
      lines.forEach(line => {
        line.classList.add('opacity-50');
        line.classList.remove('opacity-100');
      });
      
      // Highlight current section
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

    // Auto-scroll through sections
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
        
        // Continue auto-scroll
        autoScroll();
      }, 2000); // Wait 2 seconds before next section
    };
    
    const handleScroll = () => {
      if (!scrollContainer) return;
      
      const currentScrollTop = scrollContainer.scrollTop;
      const sectionHeight = 400;
      const currentVisibleSection = Math.floor(currentScrollTop / sectionHeight);
      
      updateDots();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      updateDots(); // Initial call
      
      // Start auto-scroll
      autoScroll();
      
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
    <main className="min-h-screen bg-gradient-to-br from-[#232347] via-[#2d1b3d] to-red-900 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Red radial glow from bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
      
      {/* Additional red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent"></div>
      
      {/* Main content */}
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
                <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-[18px] px-6 py-3 w-fit border border-white/20 shadow-lg">
                  <span className="text-sm font-semibold text-white/90">Coding & OASIS Review</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Fast, accurate, and expert coding catered to your advantage
                </h1>
                
                {/* Description Paragraph */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  When you are backed by our extensively trained medical coders, with a strong focus on quality and compliance, you get the results you want without the unnecessary costs or headache of managing a large in-house team.
                </p>
                
                {/* Call-to-Action Button */}
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 rounded-[40px] py-4 px-8 text-white font-semibold text-lg w-fit shadow-lg hover:shadow-xl transform hover:scale-105 border border-blue-400/30">
                  Let's Connect
                </button>
              </div>
              
              {/* Right side - Circular image centered */}
              <div className="relative h-[300px] md:h-[380px] lg:h-[440px] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Circular image positioned in the center */}
                  <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden mt-20 mb-16 md:mt-40 md:mb-0 lg:mt-60 lg:mb-0">
                    <Image
                      src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/652fdac0fcf49af95692f2f4_ydrty-p-1080.png"
                      alt="Professional working at desk with computer and office setup"
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

      {/* Statistics Banner - Full Width */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Statistics banner with gradient background - full width */}
        <div className="relative bg-gradient-to-r from-red-500/80 via-purple-500/80 to-blue-800/80 p-8 md:p-12 lg:p-16 overflow-hidden w-full shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-white/40 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-20 w-12 h-12 md:w-18 md:h-18 lg:w-24 lg:h-24 border border-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-8 left-20 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 border border-white/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-4 right-10 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border border-white/40 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          {/* Statistics content */}
          <div className="relative z-5 flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 lg:space-y-0 lg:space-x-20 max-w-5xl mx-auto">
            {/* Left Statistic */}
            <motion.div 
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">98%</div>
              <div className="text-lg lg:text-xl font-medium text-white/90">
                <div>Consistent</div>
                <div>Accuracy Rate</div>
              </div>
            </motion.div>
            
            {/* Separator */}
            <div className="hidden md:block w-px h-20 bg-white/30"></div>
            
                          {/* Right Statistic */}
            <motion.div 
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">1.5 Million</div>
              <div className="text-lg lg:text-xl font-medium text-white/90">
                <div>Charts</div>
                <div>Coded</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* How Can We Help You Section - Full Width */}
      <motion.div 
        className="relative z-10 w-full "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      > 
        <div className="bg-gradient-to-br from-gray-50 to-white w-full shadow-xl rounded-l-[50px] md:rounded-l-[75px] lg:rounded-l-[100px] rounded-r-[50px] md:rounded-r-[75px] lg:rounded-r-[100px]">
          <div className="grid md:grid-cols-2 gap-0 h-full">
            
            {/* Left side - Healthcare professional and elderly patient */}
            <div className="relative h-full min-h-[300px] md:min-h-[450px] lg:min-h-[600px] bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="absolute inset-0">
                <img 
                  src="https://media.gettyimages.com/id/1392605538/photo/visiting-grandmother-at-hospital.jpg?s=612x612&w=0&k=20&c=CikimzCPx259xzX_5s3o5Qn2jDgVM8WNd75dUK2hMSc=" 
                  alt="Healthcare Professional & Patient" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Right side - Services */}
            <div className="p-6 md:p-10 lg:p-16 bg-white">
              {/* Main Heading */}
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-10 lg:mb-12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                How can we <span className="text-red-600">help</span> you?
              </motion.h2>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8">
                {/* Service 1 - Home Health Coding */}
                <motion.div 
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <div className="relative p-5 space-y-2">
                    {/* Icon placeholder */}
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Home Health Coding
                    </h3>
                    
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Accurate and precise coding by experienced home health certified coders to ensure proper reimbursements, better quality and compliance adherence. Expert coders play a significant role in maintaining provider service integrity and efficiency.
                    </p>
                    
                    {/* Hover arrow */}
                    <motion.div 
                      className="absolute bottom-2 right-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Service 2 - Home Health OASIS Review */}
                <motion.div 
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <div className="relative p-5 space-y-2">
                    {/* Icon placeholder */}
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Home Health OASIS Review
                    </h3>
                    
                    <p className="text-gray-600 text-xs leading-relaxed">
                      OASIS reviewers audit the documentation and ensure OASIS accuracy. They advise clinicians on their recommendations with explanations. Accuracy in OASIS ensures better clinical outcomes and reimbursement.
                    </p>
                    
                    {/* Hover arrow */}
                    <motion.div 
                      className="absolute bottom-2 right-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Service 3 - Hospice Coding */}
                <motion.div 
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <div className="relative p-5 space-y-2">
                    {/* Icon placeholder */}
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Hospice Coding
                    </h3>
                    
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Specialized and experienced hospice coders are crucial for accurate billing and reimbursement, better quality assessments and in helping maintain the highest standards of compassionate end-of-life care. Hospice coders are vital in ensuring care for a highly sensitive and challenging phase of life.
                    </p>
                    
                    {/* Hover arrow */}
                    <motion.div 
                      className="absolute bottom-2 right-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Service 4 - Outpatient Coding */}
                <motion.div 
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <div className="relative p-5 space-y-2">
                    {/* Icon placeholder */}
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Outpatient Coding
                    </h3>
                    
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Specialized outpatient coders to help healthcare facilities receive appropriate payment, maintain compliance with regulations, and track patient care outcomes. They are crucial in streamlining administrative processes and facilitating quality patient care in outpatient settings.
                    </p>
                    
                    {/* Hover arrow */}
                    <motion.div 
                      className="absolute bottom-2 right-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
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
          <div className="grid lg:grid-cols-2 gap-0">
            
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
                {/* Section 1: Comprehensive Solutions */}
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
                    We take a flexible, client-centric approach that helps us focus on the clinical back-end problems you face and develop solutions customized to your business and your ethos.
                  </motion.p>
                </div>

                {/* Section 2: Specialist Team */}
                <div className="min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-4xl lg:text-5xl font-bold text-white mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Specialist Team
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    The team you gain is a group of highly experienced ICD-10 & home health-certified coders who are proficient in medical coding and boast consistent 98% accuracy rates.
                  </motion.p>
                </div>

                {/* Section 3: Collaborative Approach */}
                <div className="min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-4xl lg:text-5xl font-bold text-white mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Collaborative Approach
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We are not the typical third-party vendor or partner. Rather, we are an extended arm of your company who knows that working together and building relationships is critical to our shared success.
                  </motion.p>
                </div>

                {/* Section 4: Transparent, Goal Driven */}
                <div className="min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-4xl lg:text-5xl font-bold text-white mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Transparent,<br />
                    Goal Driven
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Your success matters to us, which is why we keep our processes transparent, direct, reliable and affordable. That way you can continue to focus on enriching your client experiences, all while improving quality and optimizing operational costs.
                  </motion.p>
                </div>

                {/* Section 5: Quality Above All */}
                <div className="min-h-[400px] flex flex-col justify-center">
                  <motion.h3 
                    className="text-4xl lg:text-5xl font-bold text-white mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Quality<br />
                    Above All
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We follow a meticulous multilevel process and thorough internal quality assurance checks to maximize accuracy in the work we do. Our coders are quality-checked on a daily basis and policies are in place to address concerns, should they arise.
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
                  Division Director, Clinical Support - Large
                </h3>
                <p className="text-lg font-semibold text-gray-700 font-sans">
                  Home Health Care Provider
                </p>
              </div>
              
              {/* Separator Line */}
              <div className="w-full h-px bg-gray-200 mb-8"></div>
              
              {/* Testimonial Text */}
              <blockquote className="text-base lg:text-lg text-gray-600 leading-relaxed font-normal font-sans">
                "Over the last several years, we established a working relationship with Red Road on projects that included Face to Face (F2F) readiness, Pre-bill Chart Audits, New Clinician Documentation Review and Commercial Insurance, Managed Care, and Medicare ICD 10 coding. The initial results have been promising, so we have expanded our collaboration with Red Road. This has helped with improving the quality of the documentation significantly. Our regular meetings with the Red Road leadership team helps in open communication, sharing feedback and improving the project outcomes."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <ThreeColumnSection />
      <Footer />
    </main>
  );
} 