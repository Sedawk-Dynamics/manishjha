'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
  ]

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

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-foreground mb-4">Manish Jha</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Award-winning war correspondent and Executive Editor covering global affairs and international conflicts.
            </p>
            <motion.div
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-foreground mb-4">Contact</h3>
            <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.a
                href="mailto:manish.jha@tv9.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>manish.jha@tv9.com</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-muted-foreground"
                variants={itemVariants}
              >
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+91-9871889081</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-muted-foreground"
                variants={itemVariants}
              >
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span>New Delhi, India</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
            <motion.ul className="space-y-2" variants={containerVariants} initial="hidden" whileInView="visible">
              {['Major Stories', 'International Assignments', 'Gallery', 'Awards', 'Current Projects'].map(
                (link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </motion.li>
                ),
              )}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>© {currentYear} Manish Jha. All rights reserved.</p>
          <motion.div className="flex gap-6" whileInView={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
