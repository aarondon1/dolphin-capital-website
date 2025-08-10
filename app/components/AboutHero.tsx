"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function AboutHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trading_room.jpg-JCwpVLAWs7SJMHV6tmfmLEiLuE2VqL.jpeg"
          alt="Dolphin Capital Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-deep/70 to-slate/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-storm to-mist block">
              Dolphin Capital
            </span>
          </motion.h1>
          
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl mb-6 text-storm leading-relaxed">
              We are a collective of ambitious undergraduate students at the College of Staten Island 
              who manage a diversified investment portfolio spanning across multiple sectors.
            </p>
            <p className="text-lg text-mist leading-relaxed">
              Through rigorous analysis, collaborative decision-making, and real-world application, 
              we bridge the gap between academic theory and professional investment practice.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-24"
        >
          <path 
            d="M0,120 C300,60 900,60 1200,120 L1200,120 L0,120 Z" 
            fill="url(#gradient)" 
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E9ECEF" />
              <stop offset="50%" stopColor="#BCC0C8" />
              <stop offset="100%" stopColor="#E9ECEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
