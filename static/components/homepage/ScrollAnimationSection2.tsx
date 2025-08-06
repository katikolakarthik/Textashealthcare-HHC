'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const ScrollAnimationSection2 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section 
      ref={ref}
      className="relative h-screen bg-white overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            {/* Service Number */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-gray-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              03
            </motion.div>

            {/* Service Title */}
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Revenue Cycle Management
            </motion.h3>

            {/* Service Description */}
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We provide end-to-end RCM solutions that are designed to enhance efficiency, reduce claim denial, 
              and maximize your revenue. We work to reduce the burden of your everyday challenges.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Image */}
          <motion.div
            className="relative h-full flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeInOut",
              delay: 0.4
            }}
          >
            <div className="relative h-[500px] lg:h-[600px] w-full">
              <Image
                src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcb9a73365696412ddd69_6516c2d2cb29002bb1cd5b39_Graphic%203.webp"
                alt="3D Revenue Cycle Management Graphic with financial cycle visualization"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ScrollAnimationSection2 