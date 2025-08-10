"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2M-Atrium.jpg-Ul2uF21XxlElcgqQRXYr4u6pChet36.jpeg"
          alt="CSI Campus Building"
          fill
          className="object-cover parallax-bg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-navy-deep opacity-80" />
      </motion.div>

      {/* Ocean Wave Animation */}
      <div className="absolute inset-0 z-10 opacity-0">
        <div className="wave-animation ocean-wave"></div>
        <div className="wave-animation ocean-wave" style={{ animationDelay: '4s', opacity: 0.6 }}></div>
        <div className="wave-animation ocean-wave" style={{ animationDelay: '8s', opacity: 0.4 }}></div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center text-white max-w-5xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empowering Students
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-storm to-mist">
              for Success
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 text-storm max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A student-led investment fund at the College of Staten Island managing a diversified portfolio of $2.4
            million AUM
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/join" className="btn-white-transparent text-lg px-8 py-4">
              LEARN MORE
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          className="w-6 h-10 border-2 border-storm rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-storm rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
