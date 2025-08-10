"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, AlertTriangle, Shield, FileText } from "lucide-react"

const disclosures = [
  {
    id: 1,
    title: "Investment Risks",
    icon: AlertTriangle,
    content: `All investments carry inherent risks, including the potential loss of principal. Past performance does not guarantee future results. The fund's investments are subject to market volatility, economic conditions, and other factors that may affect performance. Students should be aware that investment values may fluctuate and that losses may occur.`,
  },
  {
    id: 2,
    title: "Educational Purpose",
    icon: FileText,
    content: `Dolphin Capital operates primarily for educational purposes as part of the College of Staten Island's finance curriculum. While we manage real capital, our primary objective is to provide students with hands-on learning experiences in investment management, portfolio construction, and financial analysis.`,
  },
  {
    id: 3,
    title: "Regulatory Compliance",
    icon: Shield,
    content: `The fund operates under the oversight of faculty advisors and in compliance with applicable regulations. All investment decisions are made collectively by student members under professional supervision. The fund is not registered as an investment advisor and does not provide investment advice to external parties.`,
  },
  {
    id: 4,
    title: "Performance Reporting",
    icon: FileText,
    content: `Performance figures are calculated using industry-standard methodologies and are reported net of fees and expenses. Benchmarks used for comparison purposes are selected based on the fund's investment strategy and asset allocation. All performance data is audited annually by independent third parties.`,
  },
  {
    id: 5,
    title: "Membership & Access",
    icon: Shield,
    content: `Membership in Dolphin Capital is limited to currently enrolled students at the College of Staten Island who meet academic and commitment requirements. The fund reserves the right to limit membership based on capacity and to maintain standards that support our educational mission.`,
  },
]

export default function Disclosures() {
  const [openDisclosure, setOpenDisclosure] = useState<number | null>(null)

  const toggleDisclosure = (id: number) => {
    setOpenDisclosure(openDisclosure === id ? null : id)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-700 mb-4">Important Disclosures</h2>
          <p className="text-xl text-gray-600">
            Please review these important disclosures regarding our fund operations and policies.
          </p>
        </motion.div>

        <div className="space-y-4">
          {disclosures.map((disclosure, index) => {
            const Icon = disclosure.icon
            const isOpen = openDisclosure === disclosure.id

            return (
              <motion.div
                key={disclosure.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleDisclosure(disclosure.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon size={20} className="text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-700">{disclosure.title}</h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={24} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">{disclosure.content}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl"
        >
          <div className="flex items-start">
            <AlertTriangle size={24} className="text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Important Legal Notice</h4>
              <p className="text-yellow-700 text-sm leading-relaxed">
                This website and its contents are for informational and educational purposes only. Nothing contained
                herein should be construed as investment advice or a recommendation to buy or sell any security. Please
                consult with qualified financial professionals before making any investment decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
