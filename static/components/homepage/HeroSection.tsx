'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

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
    <section className="relative min-h-screen bg-gradient-to-br from-primary-900 via-secondary-800 to-accent-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-30 blur-lg"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full opacity-25 blur-lg"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
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
            {/* Tagline with gradient text */}
            <motion.div
              className="text-lg md:text-xl text-white/90 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="inline-block gradient-text-animated">
                {currentText}
                <motion.span
                  className="inline-block w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 ml-1 rounded-full"
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
              <span className="block gradient-text">power of more</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              Transform your healthcare business with cutting-edge solutions that drive growth, ensure precision, and build lasting credibility in the industry.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <Link href="/contact">
                <motion.button
                  className="btn-modern text-lg px-10 py-4 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visual */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Main visual card */}
            <div className="relative">
              <motion.div
                className="modern-card rounded-3xl p-8 md:p-12"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Healthcare icon or illustration */}
                <div className="text-center">
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Healthcare Excellence</h3>
                  <p className="text-white/80 text-lg">Innovative solutions for modern healthcare challenges</p>
                </div>
              </motion.div>
              
              {/* Floating elements around the card */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full"
                animate={{ 
                  y: [0, 15, 0],
                  scale: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 