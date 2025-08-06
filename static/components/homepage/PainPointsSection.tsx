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
    <section className="relative py-20 bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-20 blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-15 blur-3xl"
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What's weighing you{' '}
              <span className="gradient-text">down?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed"
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
                      className="modern-card rounded-2xl p-6 hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -8 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-neutral-900 group-hover:text-white transition-colors duration-300">
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ')[0]}
                          </h3>
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ').slice(1).join(' ')}
                          </h3>
                        </div>
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                          whileHover={{ rotate: 12 }}
                        >
                          <ArrowRightIcon className="w-6 h-6 text-white" />
                        </motion.div>
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
                      className="modern-card rounded-2xl p-6 hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -8 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-neutral-900 group-hover:text-white transition-colors duration-300">
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ')[0]}
                          </h3>
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ').slice(1).join(' ')}
                          </h3>
                        </div>
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                          whileHover={{ rotate: 12 }}
                        >
                          <ArrowRightIcon className="w-6 h-6 text-white" />
                        </motion.div>
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
                      className="modern-card rounded-2xl p-6 hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -8 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-neutral-900 group-hover:text-white transition-colors duration-300">
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ')[0]}
                          </h3>
                          <h3 className="text-lg font-bold leading-tight">
                            {point.split(' ').slice(1).join(' ')}
                          </h3>
                        </div>
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                          whileHover={{ rotate: 12 }}
                        >
                          <ArrowRightIcon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                )
              }
              
              // Default case - first two buttons redirect to coding-oasis-review
              return (
                <Link key={index} href="/services/coding-oasis-review">
                  <motion.div
                    className="modern-card rounded-2xl p-6 hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -8 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-neutral-900 group-hover:text-white transition-colors duration-300">
                        <h3 className="text-lg font-bold leading-tight">
                          {point.split(' ')[0]}
                        </h3>
                        <h3 className="text-lg font-bold leading-tight">
                          {point.split(' ').slice(1).join(' ')}
                        </h3>
                      </div>
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                        whileHover={{ rotate: 12 }}
                      >
                        <ArrowRightIcon className="w-6 h-6 text-white" />
                      </motion.div>
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