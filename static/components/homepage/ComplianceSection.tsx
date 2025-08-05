'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ComplianceSection = () => {
  const certifications = [
    {
      name: "HIPAA",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/650daf070e8e31e1f8d1467e_eres.png",
      alt: "HIPAA Compliance Logo"
    },
    {
      name: "GDPR Ready",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/650daf07fb9529eb0da9b95b_sdsef.png",
      alt: "GDPR Ready Logo"
    },
    {
      name: "AICPA SOC 2",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65144cfffd2b242b840bdad4_hju.png",
      alt: "AICPA SOC 2 Logo"
    },
    {
      name: "ISO 27001:2013",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65144cfea967a0ba4044e909_jkj.png",
      alt: "ISO 27001:2013 Certified Logo"
    },
    {
      name: "ISO 9001:2015",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65144cfea967a0ba4044e909_jkj.png",
      alt: "ISO 9001:2015 Certified Logo"
    }
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-dark-blue rounded-br-full opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-red">Compliance</span> is key.
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We take data security seriously. We are GDPR and HIPAA-compliant, 
              as well as ISO 27001, ISO 9001, and SOC 2 Type 2 certified.
            </motion.p>
          </motion.div>

          {/* Right Side - Certification Logos */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-24 h-24 mb-3">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center font-medium">
                  {cert.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ComplianceSection 