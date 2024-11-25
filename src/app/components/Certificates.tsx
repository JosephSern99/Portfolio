'use client'

import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'

export default function Certificates() {
  const certificates = [
    "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
    "Google Cloud Fundamentals: Core Infrastructure",
    "MDEC NxForce CyberSecurity Capacity Building Program",
    "Machine Learning Project with Alliance Bank",
    "StudySection React.js Certified",
    "AWS Cloud Quest: Cloud Practitioner"
  ]

  return (
    <motion.section 
      id="certificates"
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <ul className="space-y-2">
        {certificates.map((cert, index) => (
          <motion.li 
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FaCertificate className="text-green-500 mr-2" />
            {cert}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}

