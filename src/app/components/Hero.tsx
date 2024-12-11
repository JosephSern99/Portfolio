'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'; // Import the Image component

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16"> {/* Added padding */}
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-center md:justify-between"> {/* Improved container */}
       <motion.div className="md:w-1/2 flex justify-center">
        <Image
            src="/assets/profile/me.jpg" // Path relative to public directory
            alt="Your Name Profile Picture"
            width={200} // Set width and height for optimization
            height={200}
            className="rounded-full object-cover"
            priority // Prioritize loading of this image
          />
        </motion.div>

        <motion.div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left"> {/* Added width and margin for spacing */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4" // Added font-bold and margin
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TypeAnimation
              className="type-animation-wrapper text-primary"
              sequence={[
                'Software Engineer!',
                2000,
                'FullStack Software Engineer',
                3000,
                'FullStack Web Developer',
                3000,
                'DevOps',
                3000,
                'A.I Enthusiast', // Corrected spelling
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>
          <motion.div className="flex space-x-4">
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
        </motion.div>
      </div>
    </section>
  );
}