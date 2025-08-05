'use client'

import { motion } from 'framer-motion'

const ThreeColumnSection = () => {
  const columns = [
    {
      heading: "About us",
      subText: "LEARN ABOUT OUR TEAM",
      href: "/about"
    },
    {
      heading: "Contact us",
      subText: "LET'S CONNECT",
      href: "/contact"
    },
    {
      heading: "Careers",
      subText: "GET STARTED TODAY",
      href: "/careers"
    }
  ]

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     {columns.map((column, index) => (
             <motion.a
               key={index}
               href={column.href}
               className="block text-left p-6 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               viewport={{ once: true }}
               whileHover={{ y: -5, scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               {/* Main Heading */}
               <motion.h3
                 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-accent-red transition-colors duration-300"
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                 viewport={{ once: true }}
               >
                 {column.heading}
               </motion.h3>

               {/* Sub Text */}
               <motion.p
                 className="text-lg text-gray-700 font-medium tracking-wide group-hover:text-gray-900 transition-colors duration-300"
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                 viewport={{ once: true }}
               >
                 {column.subText}
               </motion.p>

               {/* Arrow Icon */}
               <motion.div
                 className="mt-4 text-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 initial={{ x: -10, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 0 }}
                 transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                 viewport={{ once: true }}
               >
                 →
               </motion.div>
             </motion.a>
           ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeColumnSection 