 'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../homepage/Header'
import Footer from '../homepage/Footer'
import ThreeColumnSection from '../homepage/ThreeColumnSection'
import ComplianceSection from '../homepage/ComplianceSection'
import TeamSection from '../homepage/TeamSection'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-dark-blue">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About <span className="text-accent-red">US</span>
              </motion.h1>

              {/* First Paragraph */}
              <motion.p
                className="text-lg md:text-xl text-white/90 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                While leading one of India's first organized home health providers which went on to partner with one of the largest home health companies in the U.S., the founding team noticed an acute and unmet need in clinical support services for home-based care providers and, in 2018, Red Road was born.
              </motion.p>

              {/* Second Paragraph */}
              <motion.p
                className="text-lg md:text-xl text-white/90 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                The combined wealth of clinical expertise and home care operating experience empowers Red Road to specialize in crafting cost-effective, custom solutions for the complex challenges faced by home-based care providers.
              </motion.p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
                             <Image
                 src="https://i.pinimg.com/736x/26/45/bf/2645bff0709e4cf23bcaff6690965816--nurse-cartoon-nurses-week.jpg"
                 alt="Nurse cartoon illustration"
                 fill
                 className="object-cover"
                 priority
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-accent-red">Mission</span> & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering healthcare providers with innovative solutions and exceptional support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize home-based healthcare by providing comprehensive clinical support services that enhance patient care quality while reducing operational costs for healthcare providers.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading partner for home-based care providers, setting industry standards for clinical excellence, operational efficiency, and patient outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-accent-red">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our services, maintaining the highest standards of quality and professionalism."
              },
              {
                title: "Innovation",
                description: "We continuously innovate and adapt to meet the evolving needs of healthcare providers and their patients."
              },
              {
                title: "Integrity",
                description: "We operate with complete transparency, honesty, and ethical practices in all our business relationships."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Three Column Section */}
      <ThreeColumnSection />

      {/* Compliance Section */}
      {/* <ComplianceSection /> */}


      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AboutPage