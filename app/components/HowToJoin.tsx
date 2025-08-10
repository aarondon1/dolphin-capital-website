"use client"

import { motion } from "framer-motion"
import { FileText, Users, Calendar, Award } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Complete our comprehensive application form with your academic background and investment interests.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Interview Process",
    description: "Participate in a structured interview with current fund managers and faculty advisors.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Orientation Program",
    description: "Attend our intensive orientation covering investment principles and fund operations.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Award,
    title: "Active Membership",
    description: "Begin contributing to investment decisions and portfolio management as a full member.",
    color: "from-orange-500 to-red-500",
  },
]

export default function HowToJoin() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-700 mb-4">How to Join</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these steps to become a member of Dolphin Capital and start your journey in student-managed
            investing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-primary-700 mb-6 text-center">Membership Requirements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-700 mb-4">Academic Requirements</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Currently enrolled at CSI
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Minimum 3.0 GPA preferred
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Sophomore standing or higher
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Business or related major preferred
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-700 mb-4">Commitment Expectations</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Weekly meetings attendance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Research and analysis contributions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Professional development participation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  One-year minimum commitment
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
