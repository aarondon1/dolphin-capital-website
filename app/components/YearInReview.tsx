"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Download } from 'lucide-react'
import Image from "next/image"
import { useRef } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

export default function YearInReview() {
  const { ref, isVisible } = useScrollReveal()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section ref={containerRef} className="py-12 bg-gradient-slate-storm relative overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 geometric-overlay opacity-30"></div>
      
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">2025 Annual Report</h2>
          <p className="text-xl text-deep max-w-2xl mx-auto">
            Our comprehensive annual report showcasing portfolio performance, strategic decisions, and fund growth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-parchment rounded-2xl shadow-2xl overflow-hidden card-lift"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Report Cover */}
              <div className="relative aspect-[3/4] lg:aspect-auto">
                <div className="absolute inset-0 bg-gradient-navy-deep flex flex-col justify-between p-8 text-white">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Image
                      src="/images/dolphin-capital-logo.png"
                      alt="Dolphin Capital Logo"
                      width={80}
                      height={80}
                      className="rounded-sm mb-6"
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white">
                      ANNUAL
                      <br />
                      REPORT
                    </h1>
                    <div className="text-6xl lg:text-7xl font-bold text-storm mb-4">2025</div>
                    <div className="w-16 h-0.5 bg-storm mx-auto"></div>
                  </motion.div>

                  {/* Footer */}
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <p className="text-sm text-mist">College of Staten Island</p>
                    <p className="text-xs text-storm mt-1">New York, NY</p>
                  </motion.div>
                </div>
              </div>

              {/* Report Details */}
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-navy mb-4">Performance Highlights</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Annual Return", value: "+15.2%", color: "text-green-600" },
                      { label: "Assets Under Management", value: "$2.8M", color: "text-navy" },
                      { label: "Active Members", value: "52", color: "text-navy" },
                      { label: "Report Pages", value: "48", color: "text-navy" }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="flex justify-between items-center py-2 border-b border-storm/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      >
                        <span className="text-deep">{item.label}</span>
                        <span className={`font-semibold ${item.color}`}>{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h4 className="font-semibold text-navy mb-3">Key Sections</h4>
                  <ul className="space-y-2">
                    {[
                      "Portfolio Performance Analysis",
                      "Sector Allocation & Strategy", 
                      "ESG Integration Progress",
                      "Student Development Programs"
                    ].map((item, index) => (
                      <motion.li 
                        key={item}
                        className="flex items-start text-deep"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-deep rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center w-full"
                >
                  <Download size={20} className="mr-2" />
                  Download Full Report
                </motion.button>

                <p className="text-xs text-slate mt-4 text-center">PDF • 2.8 MB • Published March 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
