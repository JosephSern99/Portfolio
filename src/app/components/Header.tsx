'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      className="sticky top-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Joseph Khoo</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes className="text-gray-700 dark:text-gray-100" /> : <FaBars className="text-gray-700 dark:text-gray-100" />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white dark:bg-gray-800 md:static md:flex md:w-auto md:items-center text-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center">
            <li>
              <Link href="#about" className="block md:inline-block px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="block md:inline-block px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" className="block md:inline-block px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#education" className="block md:inline-block px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">
                Education
              </Link>
            </li>
            <li>
              <Link href="#certificates" className="block md:inline-block px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">
                Certificates
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="btn btn-primary mt-2 md:mt-0"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
