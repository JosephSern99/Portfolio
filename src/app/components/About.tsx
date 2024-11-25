'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
      id="about"
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        Dedicated software engineer with over 4 years of specialized experience with particular expertise in building scalable, and user-focused software solutions using modern technology tools to ensure seamless integration and high-performance applications across projects.
      </p>
      <div className="flex flex-col sm:flex-row justify-between">
        <p>📞 +60196333419</p>
        <p>📧 josephcks.work@gmail.com</p>
      </div>
    </motion.section>
  )
}

