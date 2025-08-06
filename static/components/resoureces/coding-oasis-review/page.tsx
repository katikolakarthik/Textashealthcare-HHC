'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from '@/homepage/Header'
import Footer from '@/homepage/Footer'
import ThreeColumnSection from '@/homepage/ThreeColumnSection'

export default function CodingOasisReview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-900 via-secondary-800 to-accent-700 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-15 blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
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
          <div className="modern-card rounded-[24px] md:rounded-[36px] lg:rounded-[48px] shadow-2xl overflow-hidden relative min-h-[300px] md:min-h-[380px] lg:min-h-[440px] border border-white/10">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12 space-y-6 md:space-y-7 lg:space-y-8 text-white">
                {/* Service Badge */}
                <div className="inline-block bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-[18px] px-6 py-3 w-fit border border-white/20 shadow-lg">
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
                <motion.button
                  className="btn-modern text-lg px-8 py-4 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </div>
              
              {/* Right side - Image */}
              <div className="relative h-full min-h-[300px] md:min-h-[380px] lg:min-h-[440px] flex items-center justify-center p-6 md:p-10 lg:p-12">
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/652fdac0fcf49af95692f2f4_ydrty-p-1080.png"
                    alt="Coding & OASIS Review"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Statistics banner with gradient background - full width */}
        <div className="relative bg-gradient-to-r from-primary-600/80 via-secondary-600/80 to-accent-600/80 p-8 md:p-12 lg:p-16 overflow-hidden w-full shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              className="absolute top-4 left-10 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-white/40 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute top-8 right-20 w-12 h-12 md:w-18 md:h-18 lg:w-24 lg:h-24 border border-white/40 rounded-full"
              animate={{ 
                scale: [1, 0.8, 1],
                rotate: [360, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute bottom-8 left-20 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 border border-white/40 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
            />
            <motion.div 
              className="absolute bottom-4 right-10 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border border-white/40 rounded-full"
              animate={{ 
                scale: [1, 0.9, 1],
                rotate: [360, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: 3
              }}
            />
          </div>
          
          {/* Statistics content */}
          <div className="relative z-5 flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 lg:space-y-0 lg:space-x-20 max-w-5xl mx-auto">
            {/* Left Statistic */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="relative z-10 w-full "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      > 
        <div className="bg-gradient-to-br from-neutral-50 to-white w-full shadow-xl rounded-l-[50px] md:rounded-l-[75px] lg:rounded-l-[100px] rounded-r-[50px] md:rounded-r-[75px] lg:rounded-r-[100px]">
          <div className="grid md:grid-cols-2 gap-0 h-full">
            
            {/* Left side - Healthcare professional and elderly patient */}
            <div className="relative h-full min-h-[300px] md:min-h-[450px] lg:min-h-[600px] bg-gradient-to-br from-primary-50 to-secondary-50">
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
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8">
              {/* Section Title */}
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our{' '}
                <span className="gradient-text">Services</span>
              </motion.h2>
              
              {/* Services List */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Service 1 */}
                <motion.div 
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Medical Coding</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Expert medical coding services ensuring accuracy and compliance with the latest coding standards.
                    </p>
                  </div>
                </motion.div>
                
                {/* Service 2 */}
                <motion.div 
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">OASIS Review</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Comprehensive OASIS assessment reviews to ensure quality and compliance in home health care.
                    </p>
                  </div>
                </motion.div>
                
                {/* Service 3 */}
                <motion.div 
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Quality Assurance</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Rigorous quality checks and audits to maintain the highest standards of accuracy and compliance.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
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
        <div className="bg-gradient-to-br from-neutral-50 to-white w-full py-8 md:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Section Title */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10 lg:mb-12 font-sans tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-neutral-900">What our</span> <span className="gradient-text">clients say</span>
            </motion.h2>
            
            {/* Testimonial Card */}
            <motion.div 
              className="modern-card rounded-3xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </motion.div>
              
              {/* Testimonial Text */}
              <blockquote className="text-base lg:text-lg text-neutral-600 leading-relaxed font-normal font-sans">
                "Over the last several years, we established a working relationship with TEXTAS Healthcare on projects that included Face to Face (F2F) readiness, Pre-bill Chart Audits, New Clinician Documentation Review and Commercial Insurance, Managed Care, and Medicare ICD 10 coding. The initial results have been promising, so we have expanded our collaboration with TEXTAS Healthcare. This has helped with improving the quality of the documentation significantly. Our regular meetings with the TEXTAS Healthcare leadership team helps in open communication, sharing feedback and improving the project outcomes."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Three Column Section */}
      <ThreeColumnSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
} 