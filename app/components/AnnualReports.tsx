"use client"

import { motion } from "framer-motion"
import { Download, FileText, Calendar, BarChart3 } from "lucide-react"

const reports = [
  {
    year: "2024",
    title: "Annual Performance Report",
    description: "Comprehensive analysis of portfolio performance, investment decisions, and market outlook.",
    size: "2.4 MB",
    pages: 45,
    highlights: ["12.8% Annual Return", "ESG Integration", "Risk Management"],
  },
  {
    year: "2023",
    title: "Impact & Growth Report",
    description: "Detailed review of fund growth, community impact, and educational initiatives.",
    size: "1.8 MB",
    pages: 38,
    highlights: ["Fund Growth to $2.4M", "New Member Program", "Community Outreach"],
  },
  {
    year: "2022",
    title: "Excellence in Education",
    description: "Focus on educational programs, student achievements, and academic partnerships.",
    size: "1.5 MB",
    pages: 32,
    highlights: ["Student Achievements", "Academic Partnerships", "Skills Development"],
  },
]

export default function AnnualReports() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-700 mb-4">Annual Reports</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Access our comprehensive annual reports detailing our performance, growth, and impact in the investment
            community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={report.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{report.year}</h3>
                  <FileText size={32} className="opacity-80 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{report.title}</h4>
                <p className="text-sm opacity-90 text-white">{report.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Report Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-primary-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{report.pages} pages</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 size={16} className="mr-1" />
                    <span>{report.size}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h5 className="font-semibold text-primary-700 mb-3">Key Highlights</h5>
                  <ul className="space-y-2">
                    {report.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-primary-600">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  <Download size={20} className="mr-2" />
                  Download Report
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">Need Historical Data?</h3>
            <p className="text-primary-600 mb-6">
              For reports from previous years or specific performance data, please contact our team directly.
            </p>
            <button className="btn-secondary">Contact Us for Archives</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
