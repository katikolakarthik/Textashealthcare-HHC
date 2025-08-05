'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WhoWeServeSection = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                WHO WE SERVE
              </h2>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dark-blue leading-tight"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Home Health, Hospice, & Home Care Providers
            </motion.h1>

            {/* Body Text */}
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                Home health care is a crucial service for seniors, individuals with acute health challenges, 
                and those recovering from illness or surgery. Our care is provided in the comfort of their 
                homes, with the objective to enhance quality of life and promote independence.
              </p>
              
              <p className="text-lg">
                With years of experience in the home health care industry, we position ourselves as an 
                integrated part of your team, sharing your commitment, compassion, and goals—not just a 
                clinical back-office support service.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Curved Image Container */}
            <div className="relative">
              {/* Curved Clip Path Container */}
              <div className="relative overflow-hidden rounded-r-[100px] lg:rounded-r-[150px]">
                <div className="relative h-[500px] lg:h-[600px] w-full">
                  <Image
                    src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcade5e3337b9cf3a63b8_650994828fa84a0a37a3be03_granny.webp"
                    alt="Healthcare professional with elderly patient"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Gradient Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-accent-red rounded-full opacity-80"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-600 rounded-full opacity-80"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-accent-red/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-blue-600/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      />
    </section>
  )
}

export default WhoWeServeSection 