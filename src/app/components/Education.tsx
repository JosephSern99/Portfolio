'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'

export default function Education() {
  return (
    <motion.section
      id="education"
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">Education</h2>
      <p className="section-subheading">Academic background</p>

      <motion.div
        className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm p-6 md:p-8"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {/* Gradient accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600" />

        <div className="flex items-start gap-5 pl-2">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600
            flex items-center justify-center shadow-lg">
            <FaGraduationCap className="text-white text-2xl" />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              Bachelor&apos;s Degree
            </p>
            <h3 className="text-lg font-bold mb-1">
              Bachelor of Computer Science, Software Engineering
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm">
              <FaMapMarkerAlt className="text-purple-500 flex-shrink-0" />
              <span>University of Wollongong, Australia</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
