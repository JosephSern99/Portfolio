'use client'

import { GitHubProject } from '../types/github'
import { Star, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: GitHubProject
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  JavaScript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  Python: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  PHP: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Java: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  HTML: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  CSS: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const langClass = project.language
    ? (languageColors[project.language] ?? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300')
    : ''

  return (
    <motion.div
      className="group relative flex flex-col h-full bg-white dark:bg-gray-800/80 rounded-2xl border
        border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md overflow-hidden transition-shadow duration-300"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 flex-1 leading-relaxed mb-4 line-clamp-3">
          {project.description ?? 'No description provided.'}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            {project.language && (
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${langClass}`}>
                {project.language}
              </span>
            )}
            <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-xs">
              <Star className="w-3.5 h-3.5" />
              <span>{project.stargazers_count}</span>
            </div>
          </div>

          <Link
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400
              hover:underline"
          >
            View <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
