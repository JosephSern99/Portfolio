'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaPython, FaHtml5, FaJs, FaDatabase, FaCode, FaTasks,
  FaGitlab, FaBitbucket, FaAngular, FaReact, FaDocker, FaMobileAlt,
} from 'react-icons/fa'
import { SiLaravel, SiQuarkus, SiSpringboot, SiSymfony } from 'react-icons/si'

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    skills: [
      { name: 'Symfony', icon: <SiSymfony /> },
      { name: 'Laravel', icon: <SiLaravel /> },
      { name: 'Spring', icon: <SiSpringboot /> },
      { name: 'Quarkus', icon: <SiQuarkus /> },
      { name: 'Python', icon: <FaPython /> },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800/50',
    iconColor: 'text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Classic ASP', icon: <FaCode /> },
      { name: 'Twig', icon: <FaCode /> },
      { name: 'Blade', icon: <FaCode /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <FaMobileAlt /> },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800/50',
    iconColor: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'MySQL', icon: <FaDatabase /> },
      { name: 'MSSQL', icon: <FaDatabase /> },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800/50',
    iconColor: 'text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'GitLab', icon: <FaGitlab /> },
      { name: 'BitBucket', icon: <FaBitbucket /> },
      { name: 'Docker', icon: <FaDocker /> },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    border: 'border-pink-200 dark:border-pink-800/50',
    iconColor: 'text-pink-600 dark:text-pink-400',
    skills: [
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'PHPStorm', icon: <FaCode /> },
      { name: 'Sublime', icon: <FaCode /> },
      { name: 'Notion', icon: <FaTasks /> },
      { name: 'Wrike', icon: <FaTasks /> },
    ],
  },
]

const filters = [
  { id: 'all', label: 'All' },
  ...skillCategories.map(c => ({ id: c.id, label: c.title })),
]

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const displayed =
    activeFilter === 'all'
      ? skillCategories
      : skillCategories.filter(c => c.id === activeFilter)

  return (
    <motion.section
      id="skills"
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">Skills & Technologies</h2>
      <p className="section-subheading">What I work with</p>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter.id
                ? 'text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {activeFilter === filter.id && (
              <motion.span
                layoutId="filterBg"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {filter.label}
          </button>
        ))}
      </div>

      {/* Category cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {displayed.map((category, i) => (
            <motion.div
              key={category.id}
              className={`rounded-2xl p-5 border ${category.bg} ${category.border}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <h3 className={`font-bold text-sm uppercase tracking-widest mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className={`flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-900 rounded-lg text-sm
                      shadow-sm border border-gray-100 dark:border-gray-700 ${category.iconColor}
                      cursor-default select-none`}
                    whileHover={{ scale: 1.06, y: -1 }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 + j * 0.03 }}
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}
