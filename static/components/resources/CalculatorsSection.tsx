'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CalculatorsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Calculators
        </motion.h2>

        {/* Calculator Card */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Calculator Image */}
          <div className="relative h-80 w-full">
            <Image
              src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/6520f449b12918e814014501_IMG_2737-p-2000.jpg"
              alt="Hands using calculator with pen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          
          {/* Card Content */}
          <div className="p-8">
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Cost Savings Calculator
            </motion.h3>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Know how much you save with Red Road as your trusted partner
            </motion.p>
            
            {/* Calculator Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Revenue Analysis",
                  description: "Calculate potential revenue improvements"
                },
                {
                  title: "Cost Reduction",
                  description: "Estimate operational cost savings"
                },
                {
                  title: "ROI Calculator",
                  description: "Determine return on investment metrics"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            

          </div>
        </motion.div>

        {/* Additional Calculator Tools */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Billing Efficiency Calculator",
              description: "Calculate your billing efficiency improvements",
              icon: "📊"
            },
            {
              title: "Claim Denial Rate Calculator",
              description: "Estimate reduction in claim denials",
              icon: "📈"
            },
            {
              title: "Compliance Score Calculator",
              description: "Measure your compliance improvement potential",
              icon: "✅"
            }
          ].map((tool, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h4>
                <p className="text-gray-700 text-sm">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CalculatorsSection 