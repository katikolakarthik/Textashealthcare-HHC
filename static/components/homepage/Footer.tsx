'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Coding & OASIS Review",
        "Clinical Documentation Review",
        "Revenue Cycle Management",
        "Data Insights"
      ]
    },
    {
      title: "Resources",
      links: [
        "Data Security",
        "Blog",
        "Case Studies",
        "Calculators"
      ]
    },
    {
      title: "Company",
      links: [
        "About us",
        "Careers",
        "Contact us"
      ]
    },
    {
      title: "Details",
      contact: {
        email: "info@textashealthcare.in",
        phone: {
          india: "+91 6281802796",
          us: "+1 201 778 9240"
        }
      }
    }
  ]

  return (
    <footer className="relative py-20 bg-dark-blue overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <motion.h3
                className="text-xl font-bold text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h3>

              {/* Links or Contact Info */}
              {section.links ? (
                <motion.ul
                  className="space-y-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                                             <a
                         href={link === "Data Security" ? "/security" : "#"}
                         className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                       >
                         {link}
                       </a>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div
                  className="space-y-3"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Email */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {section.contact.email}
                    </a>
                  </motion.div>

                  {/* Phone Numbers */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <PhoneIcon className="w-5 h-5 text-white" />
                    <div className="space-y-1">
                      <a
                        href={`tel:${section.contact.phone.india}`}
                        className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        IND: {section.contact.phone.india}
                      </a>
                      <a
                        href={`tel:${section.contact.phone.us}`}
                        className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        US: {section.contact.phone.us}
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center border-t border-gray-700 pt-12">
          {/* Company Branding */}
          <motion.div
            className="mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-pink-400">Textas</span>{' '}
              <span className="text-purple-400">Healthcare</span>
            </motion.h2>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-pink-400">Get In</span>
              <br />
              <span className="text-purple-400">Touch</span>
            </motion.h1>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Phone Contact */}
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center">
                <PhoneIcon className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-left">
                <p className="text-gray-300">
                  Call Us{' '}
                  <span className="font-bold text-white">+91 6281802796</span>
                </p>
              </div>
            </motion.div>

            {/* Website Contact */}
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center">
                <GlobeAltIcon className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-left">
                <p className="text-gray-300">
                  For More Information at{' '}
                  <span className="font-bold text-white">
                    www.textashealthcare.in
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700 pt-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left - Policy Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="/privacy-policy"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/csr-statement"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                CSR Statement
              </a>
            </motion.div>

            {/* Center - Copyright */}
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-sm">
                Copyright © 2023 Textas Healthcare. Enabled by{' '}
                <a
                  href="https://tier2digital.com"
                  className="underline hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tier2 Digital
                </a>
              </p>
            </motion.div>

            {/* Right - Social Media */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="https://linkedin.com/company/textas-healthcare"
                className="w-8 h-8 bg-red-600 flex items-center justify-center rounded hover:bg-red-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white font-bold text-xs">in</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 