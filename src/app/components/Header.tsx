'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header 
      className="sticky top-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Joseph Ch&apos;ng</h1>
        <nav className="flex items-center space-x-4">
          <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
          <Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</Link>
          <Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</Link>
          <Link href="#education" className="hover:text-blue-600 dark:hover:text-blue-400">Education</Link>
          <Link href="#certificates" className="hover:text-blue-600 dark:hover:text-blue-400">Certificates</Link>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
        </nav>
      </div>
    </motion.header>
  )
}

