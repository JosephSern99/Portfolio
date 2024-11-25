'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Joseph Ch'ng Khoo Sern
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Engineer
        </motion.h2>
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://github.com/JosephSern99" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/joseph-ch-ng-khoo/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="mailto:josephcks.work@gmail.com" className="text-3xl hover:text-gray-300">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

