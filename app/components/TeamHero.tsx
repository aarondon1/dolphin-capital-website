"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function TeamHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Unified Background that continues throughout the page */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep to-slate"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lightSlate/10"></div>
        <div className="absolute inset-0 geometric-overlay opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-storm/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-slate/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-mist/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-white"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-storm to-mist block">
              Investment Team
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-storm max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Dedicated students from diverse academic backgrounds, united by a passion for investment excellence 
            and collaborative financial analysis across multiple sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "45+", label: "Active Members" },
              { value: "5", label: "Sectors Covered" },
              { value: "$2.4M", label: "Assets Managed" },
              { value: "3+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-storm mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-mist font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
