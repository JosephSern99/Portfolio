'use client'

import { motion } from 'framer-motion'
import { FaAws, FaGoogle, FaReact, FaShieldAlt, FaBrain, FaCloud, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa'

const certificates = [
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    short: 'AWS Cloud Quest',
    icon: <FaCloud />,
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800/50',
    iconBg: 'bg-amber-500',
    link: 'https://www.credly.com/badges/2f3c52e3-8e93-4c1e-b195-26abd5c3c53c/linked_in_profile',
  },
  {
    name: 'AWS Certified Solutions Architect Associate',
    short: 'SAA-C03',
    icon: <FaAws />,
    color: 'from-orange-400 to-amber-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800/50',
    iconBg: 'bg-orange-500',
    link: 'https://www.udemy.com/certificate/UC-dee8551e-75f9-49a0-9b7b-c9af6bb30ceb',
  },
  {
    name: 'Google Cloud Fundamentals: Core Infrastructure',
    short: 'GCP Fundamentals',
    icon: <FaGoogle />,
    color: 'from-blue-400 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800/50',
    iconBg: 'bg-blue-500',
    link: 'https://www.coursera.org/account/accomplishments/certificate/CVKCNRC2MNMV',
  },
  {
    name: 'MDEC NxForce CyberSecurity Capacity Building',
    short: 'CyberSecurity',
    icon: <FaShieldAlt />,
    color: 'from-red-400 to-rose-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800/50',
    iconBg: 'bg-red-500',
    link: 'https://drive.google.com/file/d/1nGcAgLWS0kYg_K5Un0jFpBh7QQcLNfB6/view?usp=drive_link',
  },
  {
    name: 'StudySection React.js Certified Developer',
    short: 'React.js',
    icon: <FaReact />,
    color: 'from-cyan-400 to-teal-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    border: 'border-cyan-200 dark:border-cyan-800/50',
    iconBg: 'bg-cyan-500',
    link: 'https://drive.google.com/file/d/1ecsATFXl_koe_N61vlUm7iQedfHp2xac/view?usp=sharing',
  },
  {
    name: 'Machine Learning Project with Alliance Bank',
    short: 'ML / AI',
    icon: <FaBrain />,
    color: 'from-purple-400 to-violet-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800/50',
    iconBg: 'bg-purple-500',
    link: 'https://drive.google.com/file/d/1_hKiMEteknDIa4VRKs0Sdkj0ki0U7a_1/view?usp=sharing',
  },
  {
    name: 'TNG Hackathon Participation - Joseph Khoo',
    short: 'TNG Hackathon',
    icon: <FaTrophy />,
    color: 'from-yellow-400 to-amber-500',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800/50',
    iconBg: 'bg-yellow-500',
    link: 'https://drive.google.com/file/d/1-PXnjblyANQZ1NiRqxb2kZBcZNSI6TvZ/view?usp=drive_link',
  },
]

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">Certifications</h2>
      <p className="section-subheading">Professional credentials</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative rounded-2xl p-5 border ${cert.bg} ${cert.border} overflow-hidden group cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            {/* Top gradient line */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color}`} />

            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${cert.iconBg} flex items-center justify-center
                text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-200`}>
                {cert.icon}
              </div>

              <div className="flex-1 min-w-0">
                <p className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-1`}>
                  {cert.short}
                </p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200 leading-snug">
                  {cert.name}
                </p>
              </div>

              {/* External link icon */}
              <FaExternalLinkAlt className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors text-xs mt-0.5" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
