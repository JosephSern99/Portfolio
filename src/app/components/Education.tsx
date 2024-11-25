'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <motion.section 
      id="education"
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="flex items-center">
        <FaGraduationCap className="text-3xl mr-4 text-blue-600 dark:text-blue-400" />
        <div>
          <p className="font-semibold">Bachelor of Computer Science, Software Engineering</p>
          <p>University of Wollongong, Australia</p>
        </div>
      </div>
    </motion.section>
  )
}

