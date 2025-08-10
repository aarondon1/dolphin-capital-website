"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ApplicationModal from "./ApplicationModal"

export default function JoinHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-primary-700 mb-6">Join Dolphin Capital</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Become part of an elite group of student investors. Gain real-world experience, build your network, and
              develop the skills that will define your finance career.
            </p>
            <div className="flex justify-center">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
