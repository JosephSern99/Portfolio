'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBuilding, FaCalendarAlt, FaChevronDown, FaCode, FaLightbulb } from 'react-icons/fa'

const experiences = [
  {
    title: 'Fullstack Software Engineer',
    company: 'dJava Factory Sdn Bhd',
    period: 'JAN 2025 – PRESENT',
    tag: 'Fintech',
    tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    summary:
      'Leading end-to-end delivery of enterprise and fintech products. Rapidly self-onboarded onto .NET and delivered production-ready features across mobile, web, and internal platforms while coordinating with external stakeholders and managing AWS deployments.',
    projects: [
      {
        name: 'Cashku – Fintech Unit Trust Mobile App',
        details: [
          'Co-led end-to-end revamp delivering a React Native + .NET solution under aggressive timelines',
          'Integrated Paynet payment gateway, enabling secure financial transactions and unblocking a critical revenue path',
          'Coordinated closely with external partner Kenanga to hit launch milestones',
        ],
      },
      {
        name: 'Trackr – Internal Operations Platform',
        details: [
          'Modernized codebase from Java 11 to Java 24, improving maintainability and unlocking newer language features',
          'Built and deployed real-time chat, attendance tracking, leave & claims, and admin dashboards used company-wide',
          'Managed AWS deployment, led code reviews, and resolved production bugs',
        ],
      },
      {
        name: 'Procurehere V8 – Proof of Concept',
        details: [
          'Delivered frontend and backend features on a compressed 1–2 week timeline to support a client demo',
          'Resolved blocking bugs under tight deadlines, contributing to a successful client presentation',
        ],
      },
      {
        name: 'Cross-project Contributions',
        details: [
          'Upgraded a legacy Angular application from v11 to v20 in 3 days, resolving compatibility issues and markedly improving performance',
          'Refactored core modules of a large-scale healthcare inventory system across PostgreSQL and Oracle databases',
          'Translated Figma designs into a library of reusable React components, cutting UI implementation time for subsequent features',
          'Owned OpenAPI documentation and large-scale system integrations',
        ],
      },
    ],
  },
  {
    title: 'System Developer',
    company: 'LGMS Berhad',
    period: 'MAY 2024 – NOV 2024',
    tag: 'Cybersecurity',
    tagColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    summary:
      'Gained firsthand exposure to the cybersecurity industry and developed stronger cross-department communication skills working in an Agile environment. Witnessed how security engineering creates real-world impact at scale.',
    projects: [
      {
        name: 'Vulnerability Scanning Platform',
        details: [
          'Built frontend interfaces improving data visualization and usability for security analysts',
          'Authored technical documentation that reduced onboarding time for new developers joining the team',
          'Partnered with cross-functional teams to translate security requirements into scalable product features',
        ],
      },
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'AlphaCloud Sdn Bhd',
    period: 'SEP 2023 – APR 2024',
    tag: 'Product House',
    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    summary:
      'First experience owning a module fully end-to-end — from design through deployment and production support. Gained practical knowledge of payment gateway integrations and third-party APIs, plus hands-on production incident response.',
    projects: [
      {
        name: 'Traditional Chinese Medicine System',
        details: [
          'Designed and shipped the Price Management module end-to-end for a TCM clinic system',
          'Diagnosed and resolved production issues, improving system reliability and shortening incident response cycles',
          'Worked with stakeholders to identify and implement optimization opportunities across the product',
        ],
      },
      {
        name: 'Pawning System',
        details: [
          'Integrated iPay88 Payment Gateway into the existing system, enabling digital payment processing',
        ],
      },
      {
        name: 'Auction Bidding System',
        details: [
          'Maintained, optimized, and enhanced the existing bidding system',
        ],
      },
      {
        name: 'API Integration',
        details: [
          'Integrated TouchPos API to connect point-of-sale data with the core system',
        ],
      },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Comptrac Systems Sdn Bhd',
    period: 'MAR 2021 – SEP 2023',
    tag: 'Enterprise',
    tagColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    summary:
      'Built engineering fundamentals over 2+ years on a live enterprise system. Gained exposure to Sage CRM used in medium-to-large enterprises, developed production support discipline, and learned to sustain and evolve a complex system aligned with growing business needs.',
    projects: [
      {
        name: 'Enterprise Ticketing System',
        details: [
          'Delivered fullstack features covering backend architecture, REST APIs, and responsive frontend interfaces',
          'Sustained production stability by triaging and resolving live issues, keeping downtime to a minimum',
          'Implemented new features contributing to consistent quarter-over-quarter product growth',
        ],
      },
      {
        name: 'Sage CRM System',
        details: [
          'Designed and implemented CRM pages for client-customer relationship management at medium-to-large enterprise scale',
        ],
      },
      {
        name: 'Healthcare Management System',
        details: [
          'Developed and maintained features for Sales, Purchase, and Invoice Management',
        ],
      },
    ],
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <motion.section
      id="experience"
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">Experience</h2>
      <p className="section-subheading">My professional journey</p>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-px" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0
          return (
            <div
              key={index}
              className={`relative flex items-start mb-10 pl-16 md:pl-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full
                  bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white dark:border-gray-900
                  z-10 mt-5 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring' }}
              />

              {/* Card */}
              <motion.div
                className={`w-full md:w-[46%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                  {/* Card header (clickable) */}
                  <button
                    className="w-full p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setExpanded(expanded === index ? null : index)}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-base font-bold">{exp.title}</h3>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${exp.tagColor}`}>
                            {exp.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm mb-1">
                          <FaBuilding className="text-blue-500 flex-shrink-0" />
                          <span className="truncate">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-xs">
                          <FaCalendarAlt className="flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expanded === index ? 180 : 0 }}
                        transition={{ duration: 0.22 }}
                        className="mt-1 flex-shrink-0"
                      >
                        <FaChevronDown className="text-gray-400 text-sm" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {expanded === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-3 border-t border-gray-100 dark:border-gray-700 space-y-4">
                          {/* Summary / learnings */}
                          <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3">
                            <FaLightbulb className="text-blue-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {exp.summary}
                            </p>
                          </div>

                          {/* Project involvement */}
                          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                            <FaCode /> Project Involvement
                          </p>
                          {exp.projects.map((project, pi) => (
                            <div key={pi} className="pl-3 border-l-2 border-blue-200 dark:border-blue-800">
                              <p className="font-semibold text-sm mb-1.5">{project.name}</p>
                              <ul className="space-y-1">
                                {project.details.map((detail, di) => (
                                  <li
                                    key={di}
                                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                  >
                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
