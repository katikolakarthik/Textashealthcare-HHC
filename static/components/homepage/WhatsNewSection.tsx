'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WhatsNewSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
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
            What's New
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Watch this space for insights and updates - blogs, webinars by industry experts, 
            and our presence at home health care related industry events.
          </motion.p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left Column - Blog Post Preview */}
            <motion.div
              className="bg-gray-50 p-8 lg:p-12 relative"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Tag */}
              <motion.div
                className="inline-block bg-white border border-gray-300 rounded-md px-3 py-1 mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-gray-800">Blog</span>
              </motion.div>

              {/* Blog Title */}
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Strategies for Reducing Billing Errors in Medical Coding
              </motion.h3>

              {/* CTA Button */}
              <motion.button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </motion.div>

            {/* Right Column - Abstract Image */}
            <motion.div
              className="bg-indigo-900 relative overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Abstract Image */}
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcd69309c1d7f5937b89a_65d735ac9fdcfa83ba2fcc5a_Untitle.webp"
                  alt="Abstract image of three women in a professional collaborative setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Decorative Geometric Shapes */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 border border-white/30 rounded-sm"></div>
                  <div className="w-3 h-3 border border-white/30 rounded-sm"></div>
                  <div className="w-3 h-3 border border-white/30 rounded-sm"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Overlay - Mailing List Signup */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-lg shadow-xl p-6 lg:p-8 max-w-md w-full mx-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="text-lg font-bold text-accent-red mb-4">
                Stay connected with us through our mailing list
              </h4>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatsNewSection 