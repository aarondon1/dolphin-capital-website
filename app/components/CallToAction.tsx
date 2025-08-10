"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trading_room.jpg-JCwpVLAWs7SJMHV6tmfmLEiLuE2VqL.jpeg"
          alt="Trading Room Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Take the next step in your finance career. Join Dolphin Capital and gain hands-on experience managing real
            investments alongside dedicated peers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Apply Now
            </Link>
            <Link href="/team" className="btn-white-transparent">
              Meet the Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
