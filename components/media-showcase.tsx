'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export function MediaShowcase() {
  const photos = [
    {
      title: 'War Zone Reporting',
      category: 'Photography',
      icon: '📸',
    },
    {
      title: 'International Summit',
      category: 'Photography',
      icon: '🌍',
    },
    {
      title: 'Ground Zero Coverage',
      category: 'Photography',
      icon: '📍',
    },
    {
      title: 'Crisis Documentation',
      category: 'Photography',
      icon: '🎬',
    },
  ]

  const videos = [
    {
      title: 'Russia-Ukraine War Report',
      views: '2.3M',
      icon: '🎥',
    },
    {
      title: 'White House Interview',
      views: '1.8M',
      icon: '🎙️',
    },
    {
      title: 'Nuclear Plant Documentary',
      views: '3.1M',
      icon: '🔴',
    },
    {
      title: 'Middle East Analysis',
      views: '1.5M',
      icon: '🎬',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photos Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
            <p className="text-lg text-muted-foreground">Visual stories from across the globe</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
                variants={itemVariants}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/40 to-muted/40"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-card/50 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 border border-border group-hover:border-primary">
                  <div className="text-center space-y-3">
                    <p className="text-5xl">{photo.icon}</p>
                    <p className="text-sm font-semibold text-primary uppercase">{photo.category}</p>
                    <p className="text-foreground font-bold text-lg">{photo.title}</p>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.button
                    className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔍
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Videos</h2>
            <p className="text-lg text-muted-foreground">Watch my most-viewed documentaries and reports</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="group relative h-48 rounded-xl overflow-hidden cursor-pointer"
                variants={itemVariants}
              >
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-card to-card/50 border border-border group-hover:border-primary transition-all duration-300 p-6 text-center">
                  <p className="text-4xl mb-3">{video.icon}</p>
                  <p className="text-foreground font-bold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{video.views} views</p>
                </div>

                <motion.div
                  className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.button
                    className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={24} fill="currentColor" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
