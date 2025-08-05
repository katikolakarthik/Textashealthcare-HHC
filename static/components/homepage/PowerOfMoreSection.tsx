'use client'

import { motion } from 'framer-motion'

const PowerOfMoreSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-red-900" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Power of More
          </motion.h1>

          {/* First Sub-paragraph */}
          <motion.div
            className="space-y-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-white">
              We are not partners, we are not associates.
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold">
              We are your HIGH-PERFORMING EXTENDED TEAM.
            </p>
          </motion.div>

          {/* Second Sub-paragraph */}
          <motion.div
            className="space-y-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-white">
              We know that what you do is significant for those whose lives you touch.
            </p>
            <p className="text-xl md:text-2xl text-white">
              That's why we don't just partner with you – we share your responsibilities.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="pt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PowerOfMoreSection 