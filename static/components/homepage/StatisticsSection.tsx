'use client'

import { motion } from 'framer-motion'

const StatisticsSection = () => {
  const stats = [
    {
      number: "98%",
      label: "Consistent Accuracy Rate"
    },
    {
      number: "1.2 Million",
      label: "Charts Reviewed"
    },
    {
      number: "1.5 Million",
      label: "Charts Coded"
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Smooth Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-red-900" />

      {/* Decorative Curved Lines */}
      <div className="absolute inset-0">
        {/* Large arc in bottom-left */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 opacity-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,80 Q25,60 50,80 T100,80 L100,100 L0,100 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        {/* Subtle arc in upper-right */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 opacity-5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,20 Q25,40 50,20 T100,20 L100,100 L0,100 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              More reasons to count on us
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              These numbers may not be able to represent our care and passion but they are a good indicator of what we can do for you.
            </motion.p>
          </motion.div>

          {/* Right Side - Statistics */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center lg:text-left"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection 