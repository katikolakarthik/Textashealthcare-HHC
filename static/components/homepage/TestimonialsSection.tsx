'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      role: "Director, Clinical Excellence - Large Hospice Provider",
      quote: "The Red Road team are amazing partners! We are so grateful for their attention to detail, willingness and flexibility to multitask different job requests, and for providing valuable insights to assist our offices in providing quality care for our clients. Red Road is considered an important part of the Hospice practice."
    },
    {
      role: "Chief Compliance Officer - Mid-Sized Home Health Provider",
      quote: "The Red Road consulting team is committed to quality assurance and excellence. Red Road utilizes a team of experts who focus on the careful review of clinical documentation to assure necessary regulatory criteria are met and the record reflects quality patient care services. The Red Road reviewers provide prompt service with timely feedback and maintain a close working relationship with our quality assurance team."
    },
    {
      role: "Division Director, Clinical Support - Large Home Health Care Provider",
      quote: "Over the last several years, we have established a working relationship with Red Road on projects that included Face to Face (F2F) readiness, Pre-bill Chart Audits, New Clinician Documentation Review and Commercial Insurance, Managed Care, and Medicare ICD 10 coding. The initial results have been promising, the practice has expanded its collaboration with Red Road. This has helped with improving the quality of the documentation significantly. Our regular meetings with the Red Road leadership team helps in open communication, sharing feedback and improving the project outcomes."
    },
    {
      role: "Director, Medicare Case Management - Large Home Health Care Provider",
      quote: "Our Medicare Case Management department has had the pleasure of working with Red Road for over 2 years now. They have continued to demonstrate high quality, quick turnaround times, and effective communication with our team. They have worked very closely with us over the past 6 months increasing volumes month over month to meet the needs of our department through these challenging times."
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-20 bg-purple-50 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What <span className="text-accent-red">our clients</span> say
            </motion.h2>
            
            {/* Quotation Mark Icon */}
            <motion.div
              className="relative w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl font-bold text-gray-900">"</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-white rounded-lg shadow-lg p-8 lg:p-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Client Role */}
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {testimonials[currentTestimonial].role}
                </motion.h3>

                {/* Separator Line */}
                <motion.div
                  className="w-full h-px bg-gray-300 mb-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />

                {/* Quote */}
                <motion.blockquote
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="text-gray-900 hover:text-accent-red transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-accent-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="text-gray-900 hover:text-accent-red transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className="w-8 h-8" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 