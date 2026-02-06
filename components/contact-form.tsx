'use client'

import React from "react"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'manish.jha@tv9.com',
      link: 'mailto:manish.jha@tv9.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-9871889081',
      link: 'tel:+919871889081',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'New Delhi, India',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.p>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
            variants={itemVariants}
          >
            Contact Me
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a question or proposal? Feel free to reach out. I respond to all inquiries within
            24 hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                placeholder="What is this about?"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                placeholder="Tell me about your inquiry..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </motion.button>
            </motion.div>

            {/* Status Messages */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: submitStatus !== 'idle' ? 1 : 0,
                y: submitStatus !== 'idle' ? 0 : -10,
              }}
            >
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300">
                  Thank you for your message! I will get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
