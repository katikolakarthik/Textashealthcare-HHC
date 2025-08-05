'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const MeetingScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(6)
  const [currentMonth, setCurrentMonth] = useState('August 2025')

  // Generate calendar days for August 2025
  const availableDates = [6, 7, 11, 12, 13, 14, 18, 19, 20, 21, 25, 26, 27, 28]
  const calendarDays = [
    // First week (starting with Monday)
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, null, null, null, null, null, null]
  ]

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Calendar Icon */}
            <motion.div
              className="flex items-center justify-center w-16 h-16 mb-6"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/6527a38b7a8eb1c40548cab9_calendar_2693507.png"
                alt="Calendar icon"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            {/* Question */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-dark-blue mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Are you a home health provider?
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Book a call to find out how we can help you lower costs, improve coding accuracy, and achieve full compliance.
            </motion.p>
          </motion.div>

          {/* Right Side - Meeting Scheduler */}
          <motion.div
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Meeting Details */}
            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-600 mb-1">Dr. Anitha Arockiasamy</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Minute Meeting</h3>
              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>30 min</span>
              </div>
            </motion.div>

            {/* Calendly Banner */}
            <motion.div
              className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded transform rotate-90 origin-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              POWERED BY Calendly
            </motion.div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6"></div>

            {/* Calendar */}
            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900">Select a Day</h4>
              
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                </motion.button>
                <span className="font-medium text-gray-900">{currentMonth}</span>
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="text-center text-xs font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.flat().map((day, index) => (
                  <motion.button
                    key={index}
                    onClick={() => day && availableDates.includes(day) && setSelectedDate(day)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 ${
                      !day
                        ? 'invisible'
                        : availableDates.includes(day)
                        ? selectedDate === day
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                    whileHover={day && availableDates.includes(day) ? { scale: 1.1 } : {}}
                    whileTap={day && availableDates.includes(day) ? { scale: 0.9 } : {}}
                    disabled={!day || !availableDates.includes(day)}
                  >
                    {day}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Time Zone */}
            <motion.div
              className="mt-6 pt-6 border-t border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Time zone</span>
                <div className="flex items-center space-x-2">
                  <GlobeAltIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-900">India Standard Time (2:34am)</span>
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </motion.div>

            {/* Cookie Settings Link */}
            <motion.div
              className="mt-4 text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <a href="/cookie-settings" className="text-sm text-blue-600 hover:underline">
                Cookie settings
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MeetingScheduler 