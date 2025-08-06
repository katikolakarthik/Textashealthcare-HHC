'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const MailingListSignup = () => {
  return (
    <section className="py-20 bg-lavender-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Woman Illustration */}
          <motion.div
            className="relative h-96 lg:h-[500px] flex items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/650d2b1de39a1fce58d75bb0_gfyutgu.png"
              alt="Woman writing on document"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Right Side - Mailing List Signup */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Stay connected with us through our{' '}
              <span className="text-accent-red">mailing list</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Get the latest updates on healthcare solutions, industry insights, and exclusive offers delivered directly to your inbox.
            </motion.p>

            {/* Signup Form */}
            <motion.form
              className="space-y-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Privacy Notice */}
              <motion.p
                className="text-sm text-gray-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                By subscribing, you agree to receive marketing emails from TEXTAS Healthcare. 
                You can unsubscribe at any time. View our{' '}
                <a href="/privacy-policy" className="text-accent-red hover:underline">
                  Privacy Policy
                </a>{' '}
                for more information.
              </motion.p>
            </motion.form>

            {/* Benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {[
                "Latest healthcare insights",
                "Exclusive industry updates",
                "Special offers and promotions",
                "Expert tips and best practices"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MailingListSignup 