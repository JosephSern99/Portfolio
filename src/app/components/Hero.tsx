'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), 800)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!started) return
    let frame = 0
    const totalFrames = Math.round(duration * 60)
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (frame === totalFrames) clearInterval(timer)
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [started, end, duration])

  return <>{count}</>
}

const orbs = [
  { size: 300, color: '#3b82f6', left: '5%', top: '10%', duration: 10 },
  { size: 200, color: '#8b5cf6', left: '70%', top: '5%', duration: 13 },
  { size: 250, color: '#6366f1', left: '45%', top: '55%', duration: 11 },
  { size: 180, color: '#a855f7', left: '80%', top: '60%', duration: 9 },
  { size: 220, color: '#2563eb', left: '20%', top: '70%', duration: 14 },
]

export default function Hero() {
  const yearsExperience = new Date().getFullYear() - 2021

  const stats = [
    { label: 'Years Experience', value: yearsExperience, suffix: '+' },
    { label: 'Positions Held', value: 3, suffix: '' },
    { label: 'Certifications', value: 6, suffix: '' },
    { label: 'Projects Built', value: 10, suffix: '+' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950">
      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-[0.15] blur-3xl pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            left: orb.left,
            top: orb.top,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 25, 0],
            scale: [1, 1.15, 0.92, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Spinning gradient ring */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-1 rounded-full bg-slate-900" />
              <Image
                src="/assets/profile/me.jpeg"
                alt="Joseph Khoo"
                fill
                className="rounded-full object-cover p-1.5"
                priority
              />
            </div>
            {/* Status badge */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Open to Work
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="text-white text-center md:text-left">
            <motion.p
              className="text-blue-400 font-mono text-sm tracking-widest mb-2 uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Joseph Khoo
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-blue-300 font-medium mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer', 2200,
                  'FullStack Developer', 2200,
                  'DevOps Enthusiast', 2200,
                  'A.I Enthusiast', 2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-gray-400 max-w-md mb-8 leading-relaxed text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Building scalable, user-focused software solutions with modern technologies.
              {new Date().getFullYear() - 2021}+ years of hands-on experience across full-stack, DevOps, and AI.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/JosephSern99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full
                  backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105 text-sm"
              >
                <FaGithub className="text-base" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-ch-ng-khoo/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  const ua = navigator.userAgent
                  const isInAppBrowser = /Instagram|FBAN|FBAV|FB_IAB|Twitter|Line|WeChat|MicroMessenger/i.test(ua)
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua)
                  if (isInAppBrowser) {
                    // In-app browsers block custom schemes — just go straight to web
                    e.preventDefault()
                    window.location.href = 'https://www.linkedin.com/in/joseph-ch-ng-khoo/'
                  } else if (isMobile) {
                    e.preventDefault()
                    const webUrl = 'https://www.linkedin.com/in/joseph-ch-ng-khoo/'
                    const appUrl = 'linkedin://in/joseph-ch-ng-khoo'
                    const fallback = setTimeout(() => {
                      window.location.href = webUrl
                    }, 1500)
                    window.addEventListener('blur', () => clearTimeout(fallback), { once: true })
                    window.location.href = appUrl
                  }
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full
                  transition-all duration-200 hover:scale-105 text-sm font-medium"
              >
                <FaLinkedin className="text-base" /> LinkedIn
              </a>
              <a
                href="mailto:josephcks.work@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full
                  backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105 text-sm"
              >
                <FaEnvelope className="text-base" /> Email Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                hover:bg-white/10 transition-colors duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={stat.value} />{stat.suffix}
              </p>
              <p className="text-blue-300 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors flex flex-col items-center gap-1 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <FaChevronDown />
      </motion.a>
    </section>
  )
}
