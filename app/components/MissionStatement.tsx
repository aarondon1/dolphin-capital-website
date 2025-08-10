"use client"

import { motion } from "framer-motion"
import { Target, Users, TrendingUp, BookOpen } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in all our investment decisions and educational pursuits.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of diverse perspectives and collaborative decision-making.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We embrace innovative investment strategies and cutting-edge financial technologies.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "We are committed to continuous learning and knowledge sharing within our community.",
  },
]

export default function MissionStatement() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-700 mb-8">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-primary-600 mb-8 leading-relaxed">
              Dolphin Capital exists to bridge the gap between academic finance theory and real-world investment
              practice. We provide students with the opportunity to manage actual capital while developing the
              analytical, decision-making, and leadership skills essential for success in the financial industry.
            </p>
            <p className="text-lg text-primary-600 leading-relaxed">
              Through rigorous research, collaborative analysis, and disciplined portfolio management, we aim to
              generate strong risk-adjusted returns while preparing the next generation of financial professionals to
              make meaningful contributions to the investment community.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary-700 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon size={32} className="text-primary-600 group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary-700 mb-3">{value.title}</h4>
                  <p className="text-primary-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-primary-700 text-center mb-8">Our History</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-primary-600 mb-6 leading-relaxed">
              Founded in 2018, Dolphin Capital began as a small group of finance students passionate about applying
              classroom knowledge to real-world investing. What started with a modest $50,000 allocation has grown into
              a sophisticated investment operation managing over $2.4 million in assets.
            </p>
            <p className="text-lg text-primary-600 leading-relaxed">
              Over the years, our alumni have gone on to prestigious positions at leading investment banks, asset
              management firms, and financial technology companies, carrying forward the analytical rigor and
              collaborative spirit that defines the Dolphin Capital experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
