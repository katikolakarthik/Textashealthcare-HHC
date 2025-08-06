'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navItems = [
    { name: 'Services', hasDropdown: true },
    { name: 'Data Security', hasDropdown: false },
    { name: 'Resources', hasDropdown: false },
    { name: 'About', hasDropdown: false },
    { name: 'Contact us', hasDropdown: false },
  ]

  const services = [
    { name: 'Coding & OASIS Review', href: '/services/coding-oasis-review' },
    { name: 'Clinical Documentation Review', href: '/services/clinical-documentation-review' },
    { name: 'Revenue Cycle Management', href: '/services/revenue-cycle-management' },
    { name: 'Data Insights', href: '/services/data-insights' }
  ]

  return (
    <motion.header 
      className="relative z-50 bg-dark-blue/90 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex flex-col cursor-pointer"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="text-2xl font-bold text-white tracking-wider">Textas</h1>
              <p className="text-xs text-white/80 tracking-wide">Healthcare</p>
            </motion.div>
          </Link>

          {/* Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <motion.div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="relative"
                  >
                    <motion.button
                      className="text-white hover:text-white/80 transition-colors duration-200 flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </motion.button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-dark-blue border border-gray-700 rounded-lg shadow-lg py-2 z-50"
                        >
                          {services.map((service, serviceIndex) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: serviceIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <Link
                                href={service.href}
                                className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors duration-200 text-sm"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <Link
                    href={item.name === "Data Security" ? "/security" : item.name === "Resources" ? "/resources" : item.name === "About" ? "/about" : item.name === "Contact us" ? "/contact" : "#"}
                    className="text-white hover:text-white/80 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <motion.span
                      className="text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                )}
              </div>
            ))}
          </motion.nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 