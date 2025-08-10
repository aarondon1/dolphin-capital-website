"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { X, User, Mail, Phone, Send, AlertTriangle } from 'lucide-react'
import { 
  sanitizeInput, 
  sanitizeEmail, 
  sanitizePhone, 
  validateRequired, 
  validateEmail, 
  validateGPA, 
  validateTextLength,
  formRateLimiter,
  generateFormToken,
  validateFormToken
} from '../utils/security'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  year: string
  major: string
  gpa: string
  experience: string
  motivation: string
}

interface FormErrors {
  [key: string]: string
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    year: "",
    major: "",
    gpa: "",
    experience: "",
    motivation: "",
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formToken, setFormToken] = useState<string>("")
  const [rateLimitError, setRateLimitError] = useState<string>("")

  // Generate form token when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormToken(generateFormToken())
      setRateLimitError("")
    }
  }, [isOpen])

  const validateForm = useCallback((): boolean => {
    const errors: FormErrors = {}

    // Validate required fields
    const nameError = validateRequired(formData.name, "Name")
    if (nameError) errors.name = nameError

    const emailError = validateEmail(formData.email)
    if (emailError) errors.email = emailError

    const yearError = validateRequired(formData.year, "Academic Year")
    if (yearError) errors.year = yearError

    const majorError = validateRequired(formData.major, "Major")
    if (majorError) errors.major = majorError

    const motivationError = validateRequired(formData.motivation, "Motivation")
    if (motivationError) errors.motivation = motivationError

    // Validate text lengths
    const nameLength = validateTextLength(formData.name, "Name", 2, 100)
    if (nameLength) errors.name = nameLength

    const majorLength = validateTextLength(formData.major, "Major", 2, 100)
    if (majorLength) errors.major = majorLength

    const experienceLength = validateTextLength(formData.experience, "Experience", 0, 2000)
    if (experienceLength) errors.experience = experienceLength

    const motivationLength = validateTextLength(formData.motivation, "Motivation", 50, 2000)
    if (motivationLength) errors.motivation = motivationLength

    // Validate GPA if provided
    if (formData.gpa) {
      const gpaError = validateGPA(formData.gpa)
      if (gpaError) errors.gpa = gpaError
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form token
    if (!validateFormToken(formToken)) {
      setFormErrors({ general: "Invalid form submission. Please refresh and try again." })
      return
    }

    // Check rate limiting
    const userIdentifier = formData.email || 'anonymous'
    if (!formRateLimiter.isAllowed(userIdentifier)) {
      const remainingTime = Math.ceil(formRateLimiter.getRemainingTime(userIdentifier) / 60000)
      setRateLimitError(`Too many attempts. Please wait ${remainingTime} minutes before trying again.`)
      return
    }

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setFormErrors({})

    try {
      // Sanitize all inputs before processing
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeEmail(formData.email),
        phone: sanitizePhone(formData.phone),
        year: sanitizeInput(formData.year),
        major: sanitizeInput(formData.major),
        gpa: formData.gpa ? parseFloat(formData.gpa).toString() : "",
        experience: sanitizeInput(formData.experience),
        motivation: sanitizeInput(formData.motivation),
        formToken: formToken,
        timestamp: Date.now(),
        userAgent: navigator.userAgent.slice(0, 200), // Limited user agent for logging
      }

      // Simulate secure form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real implementation, this would be sent to a secure backend endpoint
      console.log('Secure form submission:', sanitizedData)

      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          year: "",
          major: "",
          gpa: "",
          experience: "",
          motivation: "",
        })
        setFormErrors({})
        setFormToken("")
      }, 2000)
    } catch (error) {
      setIsSubmitting(false)
      setFormErrors({ general: "An error occurred. Please try again later." })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Basic input sanitization on change
    let sanitizedValue = value
    
    switch (name) {
      case 'email':
        sanitizedValue = value.toLowerCase().trim()
        break
      case 'phone':
        sanitizedValue = sanitizePhone(value)
        break
      case 'gpa':
        // Only allow numbers and decimal point
        sanitizedValue = value.replace(/[^\d.]/g, '')
        break
      default:
        sanitizedValue = value.slice(0, 2000) // Prevent extremely long inputs
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }))

    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-primary-700">
                {isSubmitted ? "Application Submitted!" : "Apply to Dolphin Capital"}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Rate Limit Error */}
              {rateLimitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertTriangle className="text-red-600 mr-3 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-red-800">Submission Limit Reached</h4>
                    <p className="text-red-700 text-sm">{rateLimitError}</p>
                  </div>
                </div>
              )}

              {/* General Error */}
              {formErrors.general && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{formErrors.general}</p>
                </div>
              )}

              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you for your application!</h3>
                  <p className="text-gray-600">
                    We've received your application and will be in touch within 5-7 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Hidden form token */}
                  <input type="hidden" name="formToken" value={formToken} />
                  
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                            formErrors.name ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                          autoComplete="name"
                        />
                      </div>
                      {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          maxLength={254}
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                            formErrors.email ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="your.email@csi.cuny.edu"
                          autoComplete="email"
                        />
                      </div>
                      {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          maxLength={20}
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="(555) 123-4567"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                        Academic Year *
                      </label>
                      <select
                        id="year"
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.year ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select year</option>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="graduate">Graduate</option>
                      </select>
                      {formErrors.year && <p className="mt-1 text-sm text-red-600">{formErrors.year}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
                        Major *
                      </label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        required
                        maxLength={100}
                        value={formData.major}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.major ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Finance, Economics, Business"
                        autoComplete="off"
                      />
                      {formErrors.major && <p className="mt-1 text-sm text-red-600">{formErrors.major}</p>}
                    </div>

                    <div>
                      <label htmlFor="gpa" className="block text-sm font-medium text-gray-700 mb-1">
                        GPA
                      </label>
                      <input
                        type="text"
                        id="gpa"
                        name="gpa"
                        maxLength={4}
                        value={formData.gpa}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.gpa ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="3.50"
                        autoComplete="off"
                      />
                      {formErrors.gpa && <p className="mt-1 text-sm text-red-600">{formErrors.gpa}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Relevant Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      maxLength={2000}
                      value={formData.experience}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        formErrors.experience ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Describe any finance, investment, or related experience..."
                    />
                    {formErrors.experience && <p className="mt-1 text-sm text-red-600">{formErrors.experience}</p>}
                    <p className="mt-1 text-xs text-gray-500">{formData.experience.length}/2000 characters</p>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to join Dolphin Capital? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={4}
                      required
                      maxLength={2000}
                      value={formData.motivation}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        formErrors.motivation ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your interest in investment management and what you hope to gain..."
                    />
                    {formErrors.motivation && <p className="mt-1 text-sm text-red-600">{formErrors.motivation}</p>}
                    <p className="mt-1 text-xs text-gray-500">{formData.motivation.length}/2000 characters</p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || !!rateLimitError}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
