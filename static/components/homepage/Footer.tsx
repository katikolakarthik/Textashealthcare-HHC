'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Coding & OASIS Review", href: "/services/coding-oasis-review" },
        { name: "Clinical Documentation Review", href: "/services/clinical-documentation-review" },
        { name: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
        { name: "Data Insights", href: "/services/data-insights" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Data Security", href: "/security" },
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Calculators", href: "/calculators" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact us", href: "/contact" }
      ]
    },
    {
      title: "Details",
      contact: {
        email: "info@textashealthcare.in",
        phone: {
          india: "+91 6281802796"
        }
      }
    }
  ]

  return (
    <footer className="relative py-20 bg-gradient-to-br from-neutral-900 via-primary-900 to-secondary-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-8 blur-3xl"
          animate={{ 
            scale: [1, 0.7, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

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
                className="text-xl font-bold gradient-text mb-4"
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
                  className="space-y-3"
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
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-primary-300 transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Email */}
                  <motion.div
                    className="flex items-center space-x-3 group"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <EnvelopeIcon className="w-5 h-5 text-white" />
                    </div>
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="text-white/70 hover:text-primary-300 transition-colors duration-300 text-sm"
                    >
                      {section.contact.email}
                    </a>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="flex items-center space-x-3 group"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PhoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <a
                      href={`tel:${section.contact.phone.india}`}
                      className="text-white/70 hover:text-primary-300 transition-colors duration-300 text-sm"
                    >
                      {section.contact.phone.india}
                    </a>
                  </motion.div>

                  {/* Website */}
                  <motion.div
                    className="flex items-center space-x-3 group"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GlobeAltIcon className="w-5 h-5 text-white" />
                    </div>
                    <a
                      href="https://textashealthcare.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-primary-300 transition-colors duration-300 text-sm"
                    >
                      textashealthcare.in
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-white/60 text-sm"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 TEXTAS Healthcare. All rights reserved.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 