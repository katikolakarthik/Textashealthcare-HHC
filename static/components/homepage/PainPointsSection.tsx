'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const PainPointsSection = () => {
  const painPoints = [
    "Decreasing Reimbursements?",
    "Increased Operational Costs?",
    "Cash Flow Issues?",
    "Ever-changing Compliance Challenges?",
    "Recruiting & Retention Challenges?",
    "Increased Support Staff Turnover"
  ]

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What's weighing you down?
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We understand your pain points and know that there are numerous challenges you face. 
              Fortunately, help is just a chat away.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {painPoints.map((point, index) => {
              // Cash Flow Issues button redirects to revenue cycle management
              if (index === 2) {
                return (
                  <Link key={index} href="/services/revenue-cycle-management">
                    <motion.div
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-dark-blue hover:border-dark-blue hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-gray-900 group-hover:text-white transition-colors duration-200">
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ')[0]}
                          </h3>
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ').slice(1).join(' ')}
                          </h3>
                        </div>
                        <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center group-hover:bg-accent-red group-hover:border-white group-hover:scale-110 transition-all duration-200">
                          <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              }
              
              // Ever-changing Compliance Challenges button redirects to clinical documentation review
              if (index === 3) {
                return (
                  <Link key={index} href="/services/clinical-documentation-review">
                    <motion.div
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-dark-blue hover:border-dark-blue hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-gray-900 group-hover:text-white transition-colors duration-200">
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ')[0]}
                          </h3>
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ').slice(1).join(' ')}
                          </h3>
                        </div>
                        <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center group-hover:bg-accent-red group-hover:border-white group-hover:scale-110 transition-all duration-200">
                          <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              }
              
              // Recruiting & Retention Challenges button redirects to data insights
              if (index === 4) {
                return (
                  <Link key={index} href="/services/data-insights">
                    <motion.div
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-dark-blue hover:border-dark-blue hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-gray-900 group-hover:text-white transition-colors duration-200">
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ')[0]}
                          </h3>
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ').slice(1).join(' ')}
                          </h3>
                        </div>
                        <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center group-hover:bg-accent-red group-hover:border-white group-hover:scale-110 transition-all duration-200">
                          <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              }
              
              // All other buttons redirect to coding-oasis-review
              return (
                <Link key={index} href="/services/coding-oasis-review">
              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-dark-blue hover:border-dark-blue hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-gray-900 group-hover:text-white transition-colors duration-200">
                    <h3 className="text-lg font-bold leading-tight">
                      {point.split(' ')[0]}
                    </h3>
                    <h3 className="text-lg font-bold leading-tight">
                      {point.split(' ').slice(1).join(' ')}
                    </h3>
                  </div>
                  <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center group-hover:bg-accent-red group-hover:border-white group-hover:scale-110 transition-all duration-200">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </motion.div>
                </Link>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PainPointsSection 