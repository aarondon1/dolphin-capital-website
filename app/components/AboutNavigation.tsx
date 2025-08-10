"use client"

import { motion } from "framer-motion"
import { History, BookOpen, TrendingUp, Users, Award, Target } from 'lucide-react'
import { useScrollReveal } from "../hooks/useScrollReveal"

const navigationItems = [
  {
    id: "history",
    title: "Our History",
    subtitle: "Foundation & Growth",
    icon: History,
    description: "From humble beginnings to managing $2.4M in assets",
    color: "from-navy to-deep"
  },
  {
    id: "education",
    title: "Education Methods",
    subtitle: "Learning Approach",
    icon: BookOpen,
    description: "Hands-on learning through real investment decisions",
    color: "from-deep to-slate"
  },
  {
    id: "coverage",
    title: "Investment Coverage",
    subtitle: "Sector Analysis",
    icon: TrendingUp,
    description: "Comprehensive coverage across multiple industries",
    color: "from-slate to-storm"
  },
  {
    id: "team",
    title: "Our Team",
    subtitle: "Student Leaders",
    icon: Users,
    description: "Dedicated students driving investment excellence",
    color: "from-storm to-mist"
  }
]

export default function AboutNavigation() {
  const { ref, isVisible } = useScrollReveal()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-lightSlate to-parchment relative">
      <div className="absolute inset-0 geometric-overlay opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group text-left p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-deep transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm font-medium text-slate mb-3 uppercase tracking-wide">
                  {item.subtitle}
                </p>
                
                <p className="text-sm text-deep leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-4 flex items-center text-deep group-hover:text-navy transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
