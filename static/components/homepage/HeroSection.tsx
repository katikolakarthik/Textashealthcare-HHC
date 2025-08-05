'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const fullText = 'More Growth. More Precision. More Credibility.'
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [textIndex, fullText])

  return (
    <section className="relative min-h-screen bg-dark-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent-red rounded-full opacity-20"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            transform: 'translate(50%, -50%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)'
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-full h-64 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
          }} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Tagline */}
            <motion.div
              className="text-lg md:text-xl text-white/90 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="inline-block">
                {currentText}
                <motion.span
                  className="inline-block w-1 h-6 bg-white ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Choose the{' '}
              <span className="block">power of more</span>
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-dark-blue transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Know More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Graphical Elements */}
          <motion.div
            className="relative h-96 lg:h-full"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Large Red Shape */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-80 bg-accent-red rounded-full"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)',
                transform: 'translate(30%, -30%)'
              }}
            />
            
            {/* Diagonal Lines Pattern */}
            <motion.div
              className="absolute bottom-0 right-0 w-full h-64 opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 2, delay: 2 }}
            >
              <div className="w-full h-full" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.3) 5px, rgba(255,255,255,0.3) 10px)'
              }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 