'use client'
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../homepage/Header'
import Footer from '../homepage/Footer'
import ThreeColumnSection from '../homepage/ThreeColumnSection'
import BlogPostsSection from './BlogPostsSection'
import CaseStudiesSection from './CaseStudiesSection'
import CalculatorsSection from './CalculatorsSection'

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-dark-blue">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://tse3.mm.bing.net/th/id/OIP.kTK1v54ZcWQkS16syTuKLwHaEK?pid=Api&P=0&h=180"
            alt="Hands typing on laptop"
            fill
            className="object-cover blur-sm opacity-30"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-dark-blue/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Unlock the gateway to
                <br />
                knowledge and
                <br />
                <span className="text-blue-400">expertise</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore our blogs, case studies, webinars, infographics, and news to know
                <br />
                the latest in the industry
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Resources
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Background Image Elements */}
            <motion.div
              className="relative h-96 lg:h-[500px] flex items-center justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Laptop with hands typing */}
              {/* <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Hands typing on laptop with stethoscope"
                  fill
                  className="object-cover rounded-lg opacity-60"
                />
               
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-lg" />
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <BlogPostsSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Calculators Section */}
      <CalculatorsSection />

      {/* Resources Categories Section */}
      

      {/* Three Column Section */}
      <ThreeColumnSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ResourcesPage 