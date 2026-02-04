'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage:
            'linear-gradient(45deg, #d4af37 0%, transparent 50%, #d4af37 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                className="text-primary font-semibold tracking-widest uppercase text-sm"
                variants={itemVariants}
              >
                Welcome to My World
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                variants={itemVariants}
              >
                Manish Jha
              </motion.h1>
              <motion.p
                className="text-2xl text-muted-foreground italic font-light"
                variants={itemVariants}
              >
                Executive Editor, TV9 Bharatvarsh
              </motion.p>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Award-winning war correspondent and foreign affairs specialist with over 20 years of
              global reporting experience. Honored with Russia's prestigious Honest View Award 2025.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-6 pt-8 border-t border-border" variants={itemVariants}>
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-muted-foreground text-sm">Countries Covered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-muted-foreground text-sm">Award & Recognition</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image placeholder with animation */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="relative w-full aspect-square bg-gradient-to-br from-primary/20 to-muted rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎥</div>
                  <p className="text-primary font-semibold">War Correspondent</p>
                  <p className="text-muted-foreground">Global Affairs Specialist</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-card border border-primary rounded-xl p-4 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-xs text-primary font-bold">Honest View Award 2025</p>
              <p className="text-sm text-foreground font-semibold">Russia's Prestige</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
