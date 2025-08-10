"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Mail, Linkedin } from 'lucide-react'
import { teamData } from "../data/teamData"
import { useRef, useState } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

export default function TeamGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageLoad = (memberId: number) => {
    setLoadedImages(prev => new Set([...prev, memberId]))
  }

  // Get all members in a flat array
  const allMembers = teamData.flatMap(sector => 
    sector.members.map(member => ({ ...member, sectorInfo: sector }))
  )

  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal()

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Unified Background - Seamless continuation */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate via-storm/40 to-lightSlate"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-parchment/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 geometric-overlay opacity-10"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Team Members</h2>
          <p className="text-xl text-deep max-w-2xl mx-auto">
            Meet the dedicated students who drive our investment success across all sectors.
          </p>
        </motion.div>

        {/* Simple Members Grid - All Members */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {allMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden h-full flex flex-col card-lift">
                {/* Sector Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${member.sectorInfo.color} shadow-lg`}>
                    {member.sectorInfo.name}
                  </div>
                </div>

                {/* Member Photo */}
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg?height=300&width=300"}
                    alt={member.name}
                    fill
                    className={`object-cover group-hover:scale-110 transition-all duration-700 ${
                      loadedImages.has(member.id) ? 'image-fade-in loaded' : 'image-fade-in'
                    }`}
                    onLoad={() => handleImageLoad(member.id)}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        className="p-3 bg-white/95 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={18} className="text-blue-600" />
                      </motion.a>
                    )}
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="p-3 bg-white/95 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
                      aria-label={`Email ${member.name}`}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail size={18} className="text-navy" />
                    </motion.a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-deep transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-deep mb-3 uppercase tracking-wide">
                      {member.role}
                    </p>
                    
                    <div className="flex items-center text-sm text-slate mb-4 bg-lightSlate/30 rounded-lg px-3 py-2">
                      <span className="font-medium">{member.year}</span>
                      <span className="mx-2 text-storm">•</span>
                      <span>{member.major}</span>
                    </div>
                    
                    <p className="text-sm text-deep leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Contact Button */}
                  <motion.button
                    className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-navy to-deep text-white rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = `mailto:${member.email}`}
                  >
                    Get in Touch
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-storm/20 mb-16"
        >
          <h3 className="text-2xl font-bold text-navy text-center mb-8">Team Overview</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Members", value: allMembers.length, color: "text-deep" },
              { label: "Active Sectors", value: teamData.length, color: "text-slate" },
              { label: "Leadership Roles", value: teamData.find(s => s.name === "Leadership")?.members.length || 0, color: "text-navy" },
              { label: "Years Experience", value: "3+", color: "text-mist" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={gridVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
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
