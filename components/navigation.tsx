'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Stories', href: '#stories' },
    { label: 'Assignments', href: '#assignments' },
    { label: 'Media', href: '#media' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">MJ</span>
            </div>
            <span className="text-foreground font-bold text-lg hidden sm:inline">Manish Jha</span>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Blog
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-2 pb-4 border-t border-border pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="https://rajatsharma.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm"
            >
              Visit Blog
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
