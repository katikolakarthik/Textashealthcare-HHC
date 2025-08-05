'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const ExperienceCarouselSection = () => {
  const [currentSet, setCurrentSet] = useState(0)

  const cardSets = [
    // Set 1: Initial 3 cards
    [
      {
        title: "Team With an Edge",
        description: "Our team consists of experienced health care industry professionals and experts in their respective fields. Commitment and Collaboration is what defines and helps us provide top-notch services to our clients.",
        image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65144426f8496ff36f324f6d_trut.png"
      },
      {
        title: "Dedicated Project Management",
        description: "We approach each client's pain points and requirements differently, with dedicated project managers who hold an unwavering track record of exceptional responsiveness. We craft solutions that are most suited to your needs, priorities, and ethos.",
        image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/6514442524a41c9d960a9f84_dfrt.png"
      },
      {
        title: "Knowledge Repository",
        description: "Highly qualified and certified experts comprise our coding and clinical documentation improvement departments. In addition, the senior management team has extensive experience working in and knowledge of the U.S. home health care system.",
        image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65144426395407392931aaa5_dgdf.png"
      }
    ],
    // Set 2: Cards 2 and 3
    [
      {
        title: "Quality Without Compromise",
        description: "We've integrated thorough quality checkpoints at every level, to serve our clients with consistent excellence. Each of our staff are required to maintain a minimum level of quality and accuracy on a daily basis.",
        image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65144426f8496ff36f324f6d_trut.png"
      },
      {
        title: "More Achievement for You",
        description: "When you choose us, you're choosing more of everything - from excellence in service delivery to reduced costs to better returns to improved quality. All this by eliminating unnecessary intermediaries and giving your business the power of more through our extended team.",
        image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/6514442524a41c9d960a9f84_dfrt.png"
      }
    ],
    // Set 3: Cards 4 and 5
    [
      {
        title: "Frame 23118",
        description: "Comprehensive Back-End Clinical Support for Home Health Care Providers with advanced solutions and expert guidance.",
        image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65150dd0fc104bb9fc00f635_Frame%2023118.png"
      },
      {
        title: "Frame 23118-1",
        description: "Advanced clinical documentation and coding expertise for optimal healthcare outcomes and compliance.",
        image: "https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/65150dd3c5d12ff4b9cd5ab6_Frame%2023118-1.png"
      }
    ]
  ]

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % cardSets.length)
  }

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + cardSets.length) % cardSets.length)
  }

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
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
            <span className="text-accent-red">Experience</span> Meets Experts
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive Back-End Clinical Support for Home Health Care Providers
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSet}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {cardSets[currentSet].map((card, index) => (
                  <motion.div
                    key={`${currentSet}-${index}`}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Card Image */}
                    <div className="mb-6 relative h-48">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevSet}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {cardSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSet(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSet ? 'bg-accent-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSet}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceCarouselSection 