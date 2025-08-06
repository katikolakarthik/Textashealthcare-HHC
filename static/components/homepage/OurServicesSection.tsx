'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const OurServicesSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Our <span className="text-accent-red">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
              The spectrum of services and expertise we offer for home health care providers, big and small.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Service Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Service Number */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-gray-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              01
            </motion.div>

            {/* Service Title */}
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Coding & OASIS Review
            </motion.h3>

            {/* Service Description */}
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Our Coding & OASIS Review service ensures precise coding for Medicare and non-Medicare payors, 
              as well as compliance, software integration, and timely reimbursement. What you get is enhanced business credibility.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/services/coding-oasis-review">
                <motion.button
                  className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Graphic */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px] w-full">
                <Image
                  src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcb9ac85e6fc8bdc400d3_6516c272cc50eedaef56e409_Graphic%201.webp"
                  alt="3D Abstract Graphic with Coding & OASIS Review visualization"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection 