"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, AlertTriangle } from 'lucide-react'
import { useState, useEffect, useCallback } from "react"
import { 
  sanitizeInput, 
  sanitizeEmail, 
  validateRequired, 
  validateEmail, 
  validateTextLength,
  formRateLimiter,
  generateFormToken,
  validateFormToken
} from '../utils/security'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactInfo() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formToken, setFormToken] = useState<string>("")
  const [rateLimitError, setRateLimitError] = useState<string>("")

  // Generate form token on component mount
  useEffect(() => {
    setFormToken(generateFormToken())
  }, [])

  const validateForm = useCallback((): boolean => {
    const errors: FormErrors = {}

    // Validate required fields
    const nameError = validateRequired(formData.name, "Name")
    if (nameError) errors.name = nameError

    const emailError = validateEmail(formData.email)
    if (emailError) errors.email = emailError

    const subjectError = validateRequired(formData.subject, "Subject")
    if (subjectError) errors.subject = subjectError

    const messageError = validateRequired(formData.message, "Message")
    if (messageError) errors.message = messageError

    // Validate text lengths
    const nameLength = validateTextLength(formData.name, "Name", 2, 100)
    if (nameLength) errors.name = nameLength

    const subjectLength = validateTextLength(formData.subject, "Subject", 5, 200)
    if (subjectLength) errors.subject = subjectLength

    const messageLength = validateTextLength(formData.message, "Message", 10, 2000)
    if (messageLength) errors.message = messageLength

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
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
        formToken: formToken,
        timestamp: Date.now(),
        userAgent: navigator.userAgent.slice(0, 200),
      }

      // Simulate secure form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real implementation, this would be sent to a secure backend endpoint
      console.log('Secure contact form submission:', sanitizedData)

      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setFormErrors({})
        setFormToken(generateFormToken())
        setRateLimitError("")
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      setFormErrors({ general: "An error occurred. Please try again later." })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Basic input sanitization on change
    let sanitizedValue = value
    
    if (name === 'email') {
      sanitizedValue = value.toLowerCase().trim()
    } else {
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
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-100 to-blue-100 mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-700 mb-4">Contact Us</h2>
          <p className="text-xl text-primary-600">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-1">Email</h4>
                  <p className="text-primary-600">info@dolphincapital.csi.cuny.edu</p>
                  <p className="text-primary-600">applications@dolphincapital.csi.cuny.edu</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-1">Phone</h4>
                  <p className="text-primary-600">(718) 982-2000 ext. 2345</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-1">Address</h4>
                  <p className="text-primary-600">
                    College of Staten Island
                    <br />
                    2800 Victory Boulevard
                    <br />
                    Staten Island, NY 10314
                    <br />
                    Business Building, Room 2S-123
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock size={24} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-1">Office Hours</h4>
                  <p className="text-primary-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Weekly Meetings: Wednesdays 3:00 PM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-6">Send us a Message</h3>

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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-primary-700 mb-2">Message Sent!</h4>
                <p className="text-primary-600">Thank you for your message. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Hidden form token */}
                <input type="hidden" name="formToken" value={formToken} />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-primary-700 ${
                        formErrors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-primary-700 ${
                        formErrors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                      autoComplete="email"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    maxLength={200}
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-primary-700 ${
                      formErrors.subject ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="What is this regarding?"
                    autoComplete="off"
                  />
                  {formErrors.subject && <p className="mt-1 text-sm text-red-600">{formErrors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-primary-700 ${
                      formErrors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Tell us how we can help you..."
                  />
                  {formErrors.message && <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>}
                  <p className="mt-1 text-xs text-gray-500">{formData.message.length}/2000 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !!rateLimitError}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
