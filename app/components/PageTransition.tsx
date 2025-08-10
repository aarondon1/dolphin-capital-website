"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1.02 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut",
          scale: { duration: 0.3 }
        }}
        className="min-h-screen"
      >
        <motion.div
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
