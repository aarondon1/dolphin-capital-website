"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, TrendingUp, Target, Lightbulb, Award } from 'lucide-react'
import { useScrollReveal } from "../hooks/useScrollReveal"

const educationMethods = [
  {
    icon: BookOpen,
    title: "Theoretical Foundation",
    description: "Comprehensive study of investment principles, financial analysis, and market dynamics through academic coursework and research.",
    color: "from-navy to-deep"
  },
  {
    icon: TrendingUp,
    title: "Real-World Application",
    description: "Hands-on experience managing actual capital with real market consequences, bridging theory and practice.",
    color: "from-deep to-slate"
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Team-based decision making, peer mentoring, and cross-sector collaboration to develop leadership skills.",
    color: "from-slate to-storm"
  },
  {
    icon: Target,
    title: "Performance Analysis",
    description: "Regular portfolio reviews, risk assessment, and performance attribution to understand investment outcomes.",
    color: "from-storm to-mist"
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Exploration of emerging technologies, ESG investing, and alternative investment strategies.",
    color: "from-mist to-navy"
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Industry networking, guest speakers, and preparation for finance careers through practical experience.",
    color: "from-navy to-slate"
  }
]

export default function AboutEducation() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-lightSlate via-parchment to-storm/20 relative">
      <div className="absolute inset-0 geometric-overlay opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Education Methods</h2>
          <p className="text-xl text-deep max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines academic rigor with practical application, 
            creating a unique learning environment that prepares students for successful finance careers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-deep transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-deep leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-navy text-center mb-8">Learning Outcomes</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Job Placement Rate", color: "text-green-600" },
              { value: "15+", label: "Industry Partners", color: "text-blue-600" },
              { value: "50+", label: "Alumni Network", color: "text-purple-600" },
              { value: "3.8", label: "Avg GPA Improvement", color: "text-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-deep font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
