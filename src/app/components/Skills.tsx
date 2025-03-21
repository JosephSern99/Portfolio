'use client'

import { motion } from 'framer-motion'
import { FaPython, FaHtml5, FaJs, FaDatabase, FaCode, FaTasks, FaGitlab, FaBitbucket, FaAngular, FaReact, FaDocker } from 'react-icons/fa'
import { SiLaravel, SiQuarkus, SiSpringboot, SiSymfony } from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: "Back-End Development Tools",
      skills: [
        { name: "Symfony", icon: <SiSymfony /> },
        { name: "Laravel PHP Framework", icon: <SiLaravel /> },
        { name: "Spring Framework", icon: <SiSpringboot /> },
        { name: "Quarkus Framework", icon: <SiQuarkus /> },
        { name: "Python", icon: <FaPython /> }
      ]
    },
    {
      title: "Front-End Development Tools",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Classic ASP", icon: <FaCode /> },
        { name: "Twig Template", icon: <FaCode /> },
        { name: "Blade Template", icon: <FaCode /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "React", icon: <FaReact /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "MSSQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Code Editors",
      skills: [
        { name: "Visual Code", icon: <FaCode /> },
        { name: "PHPStorm", icon: <FaCode /> },
        { name: "Sublime", icon: <FaCode /> }
      ]
    },
    {
      title: "Productivity Tools",
      skills: [
        { name: "Notion Productivity Software", icon: <FaTasks /> },
        { name: "Wrike", icon: <FaTasks /> }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "GitLab", icon: <FaGitlab /> },
        { name: "BitBucket", icon: <FaBitbucket /> },
        { name: "Docker", icon: <FaDocker /> }
      ]
    }
  ]

  return (
    <motion.section 
      id="skills"
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-semibold mb-2">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <span className="mr-2">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

