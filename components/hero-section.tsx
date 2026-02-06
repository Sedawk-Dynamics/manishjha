'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: '/images/photo-1-press.jpg',
      alt: 'War Correspondent - Press Coverage',
      title: 'Press Coverage',
    },
    {
      src: '/images/photo-2-studio.jpg',
      alt: 'Studio Professional',
      title: 'Studio Professional',
    },
    {
      src: '/images/photo-3-international.jpg',
      alt: 'International Assignment',
      title: 'International Assignment',
    },
    {
      src: '/images/photo-4-award.jpg',
      alt: 'Award & Recognition',
      title: 'Award & Recognition',
    },
    {
      src: '/images/photo-5-reporting.jpg',
      alt: 'Global Reporting',
      title: 'Global Reporting',
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

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
                className="text-xl lg:text-2xl text-primary font-semibold leading-tight"
                variants={itemVariants}
              >
                Journalist | Global Affairs & Security Analyst | Strategic Advisor
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground font-medium"
                variants={itemVariants}
              >
                Executive Editor, TV9 Bharatvarsh | War Correspondent | International Assignments
              </motion.p>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Award-winning war correspondent and foreign affairs specialist with over 20 years of
              global reporting experience. Honored with Russia's prestigious Honest View Award 2025.
              Covering international conflicts, diplomacy, and critical global affairs from 25+ countries.
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

          {/* Right side - Image Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square">
              {/* Main image carousel */}
              <motion.div
                className="relative w-full h-full bg-card rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Image title overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  key={currentImageIndex}
                >
                  <p className="text-lg font-semibold">{images[currentImageIndex].title}</p>
                </motion.div>
              </motion.div>

              {/* Navigation buttons */}
              <motion.button
                onClick={prevImage}
                className="absolute -left-6 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-lg transition-shadow z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                onClick={nextImage}
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-lg transition-shadow z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-card border-2 border-primary rounded-xl p-4 shadow-2xl"
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
