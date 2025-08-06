'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Header from '../homepage/Header'
import Footer from '../homepage/Footer'
import ThreeColumnSection from '../homepage/ThreeColumnSection'
import ComplianceSection from '../homepage/ComplianceSection'
import MailingListSignup from './MailingListSignup'
// import MeetingScheduler from './MeetingScheduler'
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-dark-blue relative overflow-hidden">
      {/* Background Wavy Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 600 Q300 500 600 600 T1200 600 L1200 800 L0 800 Z" fill="#ef4444" opacity="0.3"/>
          <path d="M0 650 Q400 550 800 650 T1200 650 L1200 800 L0 800 Z" fill="#dc2626" opacity="0.2"/>
          <path d="M0 700 Q200 600 600 700 T1200 700 L1200 800 L0 800 Z" fill="#b91c1c" opacity="0.1"/>
        </svg>
      </div>

      {/* Header */}
      <Header />
      
      {/* Main Contact Form Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-dark-blue/80 backdrop-blur-sm rounded-lg p-8 lg:p-12 border border-gray-700"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Form Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact <span className="text-accent-red">us</span>
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Thank you for your interest in TEXTAS Healthcare Business Solutions. Leave us your details here and we'll get in touch soon.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="space-y-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent resize-none"
                  placeholder="Enter your message"
                />
              </div>



              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      {/* <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Phone Numbers */}
            {/* <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">IND: +91 70220 03311</p>
                <p className="text-white font-semibold">US: +1 201 778 9240</p>
              </div>
            </motion.div> */}

            {/* Headquarters */}
            {/* <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Headquarters</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                                 TEXTAS Healthcare Solutions Pvt Ltd<br />
                No.224/215, 2nd floor, Hosur road,<br />
                Rupena Agrahara, Bengaluru,<br />
                Karnataka, 560068
              </p>
            </motion.div> */}

            {/* Email */}
            {/* <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-semibold">info@textashealthcare.in</p>
            </motion.div> */}

            {/* Registered Office */}
            {/* <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Registered Office</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                473, Embassy Pristine,<br />
                Jblur, Bangalore - 560 103
              </p>
            </motion.div> */}
          {/* </motion.div> */}
        {/* </div> */}
      {/* </section> */}
      {/* Mailing List Signup */}
      <MailingListSignup /> 
      
      {/* Meeting Scheduler */}
      {/* <MeetingScheduler /> */}
      
      {/* Three Column Section */}
      <ThreeColumnSection />

      {/* Compliance Section */}
      

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage 