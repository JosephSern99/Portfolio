'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "System Developer",
      company: "LGMS Berhad.",
      period: "MAY 2024 - NOV 2024",
      responsibilities: [
       
      ],
      projects: [
        {
          name: "Vulnerability Scanning System",
          details: [
            "Portal Upgrade: Spearheaded the upgrade of the company's portal from version 1 to version 2, streamlining operations and modernizing the user interface",
            "Suggested and implemented notable improvements to existing functions, increasing system performance by 10%, leading to faster load times"
          ]
        }
      ]
    },
    {
      title: "Software Engineer",
      company: "ALPHACLOUD SDN BHD.",
      period: "SEP 2023 - APR 2024",
      responsibilities: [
       
      ],
      projects: [
        {
          name: "Pawning System",
          details: ["Integrating Payment Gateway to the existing system (Ipay88)"]
        },
        {
          name: "Auction Bidding System",
          details: ["Maintaining, optimizing and enhancing existing system"]
        },
        {
          name: "Traditional Chinese Medicine System",
          details: ["Price Management System"]
        },
        {
          name: "API Integration",
          details: ["TouchPos"]
        }
      ]
    },
    {
      title: "Junior Software Engineer",
      company: "COMPTRAC SDN BHD.",
      period: "MAR 2021 - SEP 2023",
      responsibilities: [
       
      ],
      projects: [
        {
          name: "Staff Management System",
          details: ["Allow to track and manage staff activities using the web portal"]
        },
        {
          name: "Sage CRM System",
          details: ["Designing, Implementing CRM pages to allow clients to manage their relationship with their customers"]
        },
        {
          name: "Healthcare Management System",
          details: ["Maintain and develop features to existing HealthCare in terms of Sales Purchase, Invoice Management System"]
        },
      ]
    }
  ]

  return (
    <motion.section 
      id="experience"
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div 
          key={index} 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">{exp.period}</p>
          <ul className="list-disc list-inside mt-2">
            {exp.responsibilities.map((resp, respIndex) => (
              <li key={respIndex}>{resp}</li>
            ))}
          </ul>
          {exp.projects && (
            <div className="mt-2">
              <p className="font-semibold">Project Involvement:</p>
              {exp.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="ml-4 mt-1">
                  <p className="font-medium">{project.name}</p>
                  <ul className="list-disc list-inside">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.section>
  )
}

