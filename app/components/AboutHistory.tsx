"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, TrendingUp, Award } from "lucide-react"
import { useScrollReveal } from "../hooks/useScrollReveal"

const missionPillars = [
  {
    title: "Our Beginning",
    description:
      "Founded as CSI's first Student-Managed Investment Fund, Dolphin Capital emerged from a vision to provide students with real-world investment experience and financial education.",
    icon: Lightbulb,
    highlight: "First SMIF at CSI",
  },
  {
    title: "Educational Excellence",
    description:
      "We bridge the gap between academic theory and practical application, offering members hands-on experience in portfolio management, financial analysis, and investment strategy.",
    icon: Award,
    highlight: "Real-World Learning",
  },
  {
    title: "Strategic Growth",
    description:
      "Our mission extends beyond managing assets—we're building a legacy of financial literacy, professional development, and investment acumen that will benefit generations of CSI students.",
    icon: TrendingUp,
    highlight: "Building Legacy",
  },
  {
    title: "Setting the Standard",
    description:
      "As pioneers in student-managed investing at CSI, we aim to establish Dolphin Capital as a benchmark for excellence, innovation, and responsible investment practices in higher education.",
    icon: Target,
    highlight: "Leading Innovation",
  },
]

export default function AboutHistory() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-parchment to-lightSlate relative overflow-hidden">
      <div className="absolute inset-0 geometric-overlay opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Mission</h2>
          <p className="text-xl text-deep max-w-3xl mx-auto leading-relaxed">
            As CSI's first Student-Managed Investment Fund, Dolphin Capital is committed to excellence in education,
            innovation in investment strategy, and setting the standard for student financial organizations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-navy via-deep to-slate rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {missionPillars.map((pillar, index) => {
              const Icon = pillar.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"} text-center lg:mb-0 mb-6`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-lift">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r from-navy to-deep flex items-center justify-center mr-4`}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-2xl font-bold text-navy">{pillar.title}</div>
                          <div className="text-lg font-semibold text-deep">{pillar.highlight}</div>
                        </div>
                      </div>

                      <p className="text-deep leading-relaxed mb-6">{pillar.description}</p>

                      <div className="flex justify-center lg:justify-start">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-navy">Join Our Mission</div>
                          <div className="text-sm text-slate">Be Part of CSI's Investment Future</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-4 h-4 bg-navy rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
