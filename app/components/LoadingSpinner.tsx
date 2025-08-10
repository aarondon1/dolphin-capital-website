"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  text?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'text-primary-600',
  text 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} ${color} animate-spin`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="31.416"
            strokeDashoffset="31.416"
            className="animate-spin"
            style={{
              animation: 'spin 2s linear infinite, dash 1.5s ease-in-out infinite'
            }}
          />
        </svg>
      </motion.div>
      {text && (
        <motion.p 
          className="mt-2 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lightSlate to-parchment">
      <LoadingSpinner size="lg" text="Loading..." />
    </div>
  )
}

export function ComponentSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 rounded-lg h-4 mb-2"></div>
      <div className="bg-gray-200 rounded-lg h-4 mb-2 w-3/4"></div>
      <div className="bg-gray-200 rounded-lg h-4 w-1/2"></div>
    </div>
  )
}
