'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function About() {
  const contacts = [
    { icon: <FaPhone />, label: '+60196333419', href: 'tel:+60196333419' },
    { icon: <FaEnvelope />, label: 'josephcks.work@gmail.com', href: 'mailto:josephcks.work@gmail.com' },
    { icon: <FaMapMarkerAlt />, label: 'Malaysia', href: undefined },
  ]

  return (
    <motion.section
      id="about"
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">About Me</h2>
      <p className="section-subheading">Who I am</p>

      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-900/50 p-8 md:p-10">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-bl-full" />

        <div className="relative flex flex-col md:flex-row gap-8 items-start">
          {/* Quote / Bio */}
          <div className="flex-1">
            <div className="text-4xl text-blue-300 dark:text-blue-700 font-serif mb-2 leading-none">&ldquo;</div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              Dedicated software engineer with{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">{new Date().getFullYear() - 2021}+ years</span> of specialized experience,
              building scalable and user-focused software solutions using modern technology tools
              to ensure seamless integration and high-performance applications across projects.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3 min-w-[220px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Get in touch</p>
            {contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  {c.icon}
                </span>
                {c.href ? (
                  <a href={c.href} className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-sm text-gray-600 dark:text-gray-300">{c.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
