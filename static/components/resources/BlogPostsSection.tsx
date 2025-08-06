'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcade5e3337b9cf3a63b8_650994828fa84a0a37a3be03_granny.webp',
    title: 'The ROI of AI-Augmented Outsourcing in Home Health:',
    highlight: 'A Smarter Path to Scale and Compliance',
    link: '#',
  },
  {
    id: 2,
    image: 'https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcb9a73365696412ddd69_6516c2d2cb29002bb1cd5b39_Graphic%203.webp',
    title: 'AI in Home Health Coding:',
    highlight: 'Accuracy, Speed, and Compliance at Scale',
    link: '#',
  },
  {
    id: 3,
    image: 'https://cdn.prod.website-files.com/64f2ca4567e5504737a65591/684fcb9a1aedc78cec003eaa_651145145362c9652f8c03e7_GraphAl%204.webp',
    title: 'AI-Powered Clinical Documentation:',
    highlight: 'Enhancing Accuracy and Compliance in Home Health Care',
    link: '#',
  },
]

const BlogPostsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Blog')

  const filters = ['Blog', 'Case Studies', 'Calculators']

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Blogs Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Blogs
        </motion.h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  BLOG
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {post.title} <span className="text-red-600">{post.highlight}</span>
                </h3>
                <a
                  href={post.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center mt-4 transition-colors duration-300"
                >
                  Read now <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default BlogPostsSection 