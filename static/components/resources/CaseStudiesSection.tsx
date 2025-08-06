'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>

        {/* Case Study Card */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            {/* Background Image */}
            <div className="relative h-80 w-full">
              <Image
                src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65606/651ee246767b9c7370769cbc_case%20study%20image-p-800.png"
                alt="Person drawing rising bar chart"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top Section - Logo and Metrics */}
                <div className="flex justify-between items-start">
                  {/* Logo */}
                  <div className="text-white">
                    <h3 className="text-2xl font-bold text-red-600">RED-ROAD</h3>
                    <p className="text-sm text-gray-300">HEALTHCARE BUSINESS SOLUTIONS</p>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="text-right text-white">
                    <p className="text-sm mb-1">How we achieved</p>
                    <p className="text-sm mb-1">Claim Approval Rate from</p>
                    <div className="text-4xl font-bold text-red-500 mb-2">
                      85% ➡️ 98%
                    </div>
                    <p className="text-sm">Under Review Choice Demonstration (RCD)</p>
                  </div>
                </div>
                
                {/* Bottom Section - Case Study Button */}
                <div className="flex justify-start">
                  <motion.button
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Case Study
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card Footer */}
          <div className="p-8">
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Review Choice Demonstration (RCD)
            </motion.h3>
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
                Review Choice Demonstration (RCD) Case Study | TEXTAS Healthcare Client Overview This client is home health provider that was struggling with claim approval rates. Through our comprehensive review and optimization process, we helped them achieve a remarkable improvement from 85% to 98% approval rate, demonstrating the effectiveness of our healthcare business solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* Additional Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Revenue Cycle Optimization",
              description: "Improved billing efficiency by 40%",
              metric: "40%",
              improvement: "Efficiency Gain"
            },
            {
              title: "Clinical Documentation",
              description: "Enhanced accuracy and compliance",
              metric: "95%",
              improvement: "Accuracy Rate"
            },
            {
              title: "Coding Accuracy",
              description: "Reduced claim denials significantly",
              metric: "60%",
              improvement: "Denial Reduction"
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{study.metric}</div>
                <div className="text-sm text-gray-600 mb-4">{study.improvement}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h4>
                <p className="text-gray-700 text-sm">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection 