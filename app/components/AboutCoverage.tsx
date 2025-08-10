"use client"

import { motion } from "framer-motion"
import { TrendingUp, Cpu, Heart, Building, Leaf, DollarSign } from 'lucide-react'
import { useScrollReveal } from "../hooks/useScrollReveal"

const sectors = [
  {
    icon: Building,
    name: "Financial Services",
    description: "Banking, insurance, and fintech companies",
    allocation: "25%",
    color: "from-blue-600 to-blue-700",
    companies: ["JPMorgan", "Goldman Sachs", "Visa"]
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Software, hardware, and emerging tech",
    allocation: "30%",
    color: "from-purple-600 to-purple-700",
    companies: ["Apple", "Microsoft", "NVIDIA"]
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Pharmaceuticals and medical devices",
    allocation: "20%",
    color: "from-green-600 to-green-700",
    companies: ["Johnson & Johnson", "Pfizer", "Moderna"]
  },
  {
    icon: Leaf,
    name: "ESG & Sustainability",
    description: "Environmental and sustainable investments",
    allocation: "15%",
    color: "from-emerald-600 to-emerald-700",
    companies: ["Tesla", "NextEra Energy", "Waste Management"]
  },
  {
    icon: DollarSign,
    name: "Consumer Goods",
    description: "Retail and consumer products",
    allocation: "10%",
    color: "from-orange-600 to-orange-700",
    companies: ["Amazon", "Procter & Gamble", "Nike"]
  }
]

export default function AboutCoverage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-storm/20 via-parchment to-lightSlate relative">
      <div className="absolute inset-0 geometric-overlay opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Investment Coverage</h2>
          <p className="text-xl text-deep max-w-3xl mx-auto leading-relaxed">
            Our diversified portfolio spans multiple sectors, providing comprehensive market exposure 
            and valuable learning opportunities across various industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Portfolio Allocation Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">Portfolio Allocation</h3>
            
            <div className="space-y-4">
              {sectors.map((sector, index) => {
                const Icon = sector.icon
                return (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-lightSlate/30 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${sector.color} flex items-center justify-center mr-4`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy">{sector.name}</div>
                        <div className="text-sm text-slate">{sector.description}</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-deep">{sector.allocation}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Key Holdings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">Key Holdings</h3>
            
            <div className="space-y-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="border-l-4 border-gradient-to-b from-navy to-slate pl-4"
                >
                  <h4 className="font-semibold text-navy mb-2">{sector.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.companies.map((company, idx) => (
                      <span
                        key={company}
                        className="px-3 py-1 bg-lightSlate/50 rounded-full text-sm text-deep"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-navy to-deep rounded-2xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Performance Metrics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+15.2%", label: "Annual Return", sublabel: "vs S&P 500: +11.3%" },
              { value: "0.85", label: "Sharpe Ratio", sublabel: "Risk-adjusted returns" },
              { value: "12.4%", label: "Volatility", sublabel: "Standard deviation" },
              { value: "1.34", label: "Beta", sublabel: "Market correlation" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-storm mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-mist">
                  {metric.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
