'use client'

import { motion } from 'framer-motion'

const TrustSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue to-accent-red" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trust is our code
          </motion.h1>

          {/* Sub Text */}
          <motion.div
            className="space-y-4 text-white/90"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl font-normal leading-relaxed">
              With us there are no middlemen, no intermediaries, and no barriers.
            </p>
            <p className="text-xl md:text-2xl font-normal leading-relaxed">
              Trust is a direct path.
            </p>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default TrustSection 