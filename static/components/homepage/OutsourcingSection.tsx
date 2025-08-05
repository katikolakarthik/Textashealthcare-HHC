'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const OutsourcingSection = () => {
  const leftBenefits = [
    "Reduced Administrative Burdens",
    "Access to Specialized Talent",
    "High-quality Work Done by Experts and Delivered More Quickly",
    "Scalability and Flexibility Benefits",
    "Cost Savings - No In-House Teams to Manage"
  ]

  const rightBenefits = [
    "Minimized Technology Infrastructure Expenses",
    "Assured Compliance",
    "Timely Reimbursements",
    "Improved Revenue Collection",
    "Increased Focus on Patient Care and Service"
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" 
             style={{
               backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)'
             }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Outsourcing is becoming an essential strategy,{' '}
            <span className="text-accent-red">here's why</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The benefits of outsourcing your back-end health care services are multi-faceted — 
            allowing you to save time, effort, and money, as well as redirect the focus of your 
            team to the important work of patient care.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          
          {/* Left Column - Benefits */}
          <motion.div
            className="space-y-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {leftBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <p className="text-gray-800 font-medium leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Hands Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-48 lg:w-80 lg:h-64">
              <Image
                src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcd460970ea2a07eff2f8_651ee6d2e790fe181727065f_IMG_272.webp"
                alt="Two hands shaking in partnership agreement"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            className="space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {rightBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <p className="text-gray-800 font-medium leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OutsourcingSection 