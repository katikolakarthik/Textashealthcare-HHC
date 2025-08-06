'use client'

import { motion } from 'framer-motion'

const WhoWeAreSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Wavy Lines */}
      <div className="absolute inset-0">
        {/* Left side wavy lines */}
        <motion.div
          className="absolute left-0 top-0 w-1/3 h-full opacity-30"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,20 Q25,10 50,20 T100,20 L100,100 L0,100 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M0,40 Q25,30 50,40 T100,40 L100,100 L0,100 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <path
              d="M0,60 Q25,50 50,60 T100,60 L100,100 L0,100 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.1"
            />
          </svg>
        </motion.div>

        {/* Right side wavy lines */}
        <motion.div
          className="absolute right-0 top-0 w-1/3 h-full opacity-30"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,30 Q25,20 50,30 T100,30 L100,100 L0,100 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M0,50 Q25,40 50,50 T100,50 L100,100 L0,100 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <path
              d="M0,70 Q25,60 50,70 T100,70 L100,100 L0,100 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.1"
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          
          {/* Section Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
              WHO WE ARE
            </h2>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="space-y-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-dark-blue leading-tight">
              Partners? Associates? No, We Are
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-accent-red leading-tight">
              Your Ultimate Extended Team
            </h1>
          </motion.div>

          {/* Video Container */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Video Frame */}
              <div className="relative bg-gray-100 rounded-lg shadow-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dnomrmyzh&public_id=WhatsApp_Video_2025-08-05_at_22.06.50_d82aed84_nna9ds&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    className="w-full h-full"
                  />
                </div>
                
                {/* Video Overlay Elements */}
                <motion.div
                  className="absolute top-4 left-4 flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <span className="text-white text-sm font-medium">TEXTAS Healthcare services</span>
                </motion.div>

                <motion.div
                  className="absolute top-12 left-4"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-accent-red text-white px-3 py-1 rounded text-xs font-medium flex items-center space-x-1">
                    <span>Revenue Cycle Management</span>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>

                {/* Watch Video Button */}
                <motion.button
                  className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                >
                  Watch Video
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection 