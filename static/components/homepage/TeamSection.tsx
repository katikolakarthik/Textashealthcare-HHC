'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Anitha Arockiasamy",
      title: "Founder & President",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65254ef1d88867d9c5d0ac87_2.png"
    },
    {
      name: "Alexandra Augustin",
      title: "Head of International Partnerships",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/655aea9952e85fb00043638e_Untitled%20design%20(11).png"
    },
    {
      name: "Vineeth Jose K",
      title: "Head of Operations",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65254ef001c0c827c6d29e79_4.png"
    },
    {
      name: "Anil Mathew",
      title: "Senior Manager, Clinical Compliance Review",
      image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65254ef0742a03817cab43da_3.png"
    }
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The team
          </motion.h2>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              {/* Member Image */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 192px, 192px"
                />
              </div>

              {/* Member Info */}
              <div>
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {member.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection 