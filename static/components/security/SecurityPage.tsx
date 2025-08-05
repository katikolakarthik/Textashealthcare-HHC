'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, UserGroupIcon, DocumentTextIcon, ServerIcon, EyeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Header from '@/components/homepage/Header'
import Footer from '@/components/homepage/Footer'
import ThreeColumnSection from '@/components/homepage/ThreeColumnSection'
import ComplianceSection from '@/components/homepage/ComplianceSection'
import DataSecurityPractices from '@/components/security/DataSecurityPractices'

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: ShieldCheckIcon,
      title: "HIPAA Compliance",
      description: "Full compliance with Health Insurance Portability and Accountability Act standards"
    },
    {
      icon: LockClosedIcon,
      title: "End-to-End Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard protocols"
    },
    {
      icon: UserGroupIcon,
      title: "Background Checks",
      description: "Comprehensive background verification for all team members handling sensitive data"
    },
    {
      icon: DocumentTextIcon,
      title: "Data Security Policies",
      description: "Strict protocols and procedures for handling patient health information"
    },
    {
      icon: ServerIcon,
      title: "Secure Infrastructure",
      description: "Enterprise-grade servers with multiple layers of security protection"
    },
    {
      icon: EyeIcon,
      title: "24/7 Monitoring",
      description: "Continuous surveillance and threat detection systems"
    }
  ]

  const securityStats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "256-bit", label: "Encryption" },
    { number: "24/7", label: "Security Monitoring" },
    { number: "100%", label: "HIPAA Compliant" }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.shutterstock.com/image-photo/businessman-holds-glowing-security-shield-260nw-2514694015.jpg"
            alt="Security Shield Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-blue-400">Protecting</span> Patient Data
              <br />
              <span className="text-red-400">Is Our Priority</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With robust security measures, data security policies, employee training, 
              and stringent background checks, we deploy the best practices to prioritize 
              safe handling of your patient health data.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Our Security
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
                           </section>

          {/* Data Security Practices Section */}
          

          {/* Compliance Section */}
          <ComplianceSection />
       {/* Data Security Practices Section */}
          <DataSecurityPractices />


       {/* Three Column Section */}
       <ThreeColumnSection />

       
      

       {/* Footer */}
       <Footer />
     </div>
   )
 }

export default SecurityPage 