"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { DollarSign, TrendingUp, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from "../hooks/useScrollReveal"

const highlights = [
  {
    icon: DollarSign,
    title: "Assets Under Management",
    value: "$2.4M",
    description: "Total portfolio value managed by our student analysts",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Annual Return",
    value: "+12.8%",
    description: "Outperforming market benchmarks through strategic analysis",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Active Members",
    value: "45",
    description: "Dedicated students from various academic backgrounds",
    color: "from-purple-500 to-pink-600",
  },
]

export default function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  return (
    <section className="py-12 bg-gradient-to-br from-lightSlate to-parchment relative overflow-hidden">
      {/* Geometric Pattern */}
      <div className="absolute inset-0 geometric-overlay opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Key Highlights</h2>
          <p className="text-xl text-deep max-w-2xl mx-auto">
            Our achievements speak to the dedication and expertise of our student-managed fund.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -300, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                {(() => {
                  const highlight = highlights[currentIndex]
                  const Icon = highlight.icon
                  return (
                    <div className={`bg-gradient-to-br ${highlight.color} p-12 text-white text-center relative overflow-hidden`}>
                      {/* Background Animation */}
                      <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{ 
                          background: [
                            "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)"
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      >
                        <Icon size={64} className="mx-auto mb-6 opacity-90" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl font-semibold mb-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {highlight.title}
                      </motion.h3>
                      
                      <motion.div 
                        className="text-5xl font-bold mb-4 text-white"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                      >
                        {highlight.value}
                      </motion.div>
                      
                      <motion.p 
                        className="text-lg opacity-90 max-w-md mx-auto text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {highlight.description}
                      </motion.p>
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous highlight"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Next highlight"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {highlights.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-deep scale-125" : "bg-slate hover:bg-deep/70"
                }`}
                aria-label={`Go to highlight ${index + 1}`}
                whileHover={{ scale: index === currentIndex ? 1.25 : 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
