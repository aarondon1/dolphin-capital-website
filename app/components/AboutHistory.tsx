"use client"

import { motion } from "framer-motion"
import { Calendar, TrendingUp, Users, Award } from 'lucide-react'
import { useScrollReveal } from "../hooks/useScrollReveal"

const milestones = [
  {
    year: "2018",
    title: "Foundation",
    description: "Dolphin Capital was established with an initial fund of $50,000 and 12 founding members.",
    icon: Calendar,
    stats: { members: 12, aum: "$50K" }
  },
  {
    year: "2020",
    title: "Growth Phase",
    description: "Expanded to 25 members and grew assets under management to $500,000 through strategic investments.",
    icon: TrendingUp,
    stats: { members: 25, aum: "$500K" }
  },
  {
    year: "2022",
    title: "Recognition",
    description: "Received the Outstanding Student Organization Award and reached $1.2M in managed assets.",
    icon: Award,
    stats: { members: 35, aum: "$1.2M" }
  },
  {
    year: "2024",
    title: "Excellence",
    description: "Currently managing $2.4M with 45+ active members across multiple investment sectors.",
    icon: Users,
    stats: { members: 45, aum: "$2.4M" }
  }
]

export default function AboutHistory() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="history" className="py-20 bg-gradient-to-br from-parchment to-lightSlate relative overflow-hidden">
      <div className="absolute inset-0 geometric-overlay opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our History</h2>
          <p className="text-xl text-deep max-w-3xl mx-auto leading-relaxed">
            From a small group of passionate finance students to a sophisticated investment operation, 
            our journey reflects dedication, growth, and unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-navy via-deep to-slate rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:mb-0 mb-6`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-lift">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-navy to-deep flex items-center justify-center mr-4`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-2xl font-bold text-navy">{milestone.year}</div>
                          <div className="text-lg font-semibold text-deep">{milestone.title}</div>
                        </div>
                      </div>
                      
                      <p className="text-deep leading-relaxed mb-6">
                        {milestone.description}
                      </p>
                      
                      <div className="flex justify-center lg:justify-start gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy">{milestone.stats.members}</div>
                          <div className="text-sm text-slate">Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy">{milestone.stats.aum}</div>
                          <div className="text-sm text-slate">AUM</div>
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
