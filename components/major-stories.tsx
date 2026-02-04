'use client'

import { motion } from 'framer-motion'
import { Newspaper, Globe, Award, Zap } from 'lucide-react'

export function MajorStories() {
  const stories = [
    {
      icon: Newspaper,
      title: 'Russia-Ukraine Conflict',
      description: 'Groundbreaking reporting from the frontlines of the Russia-Ukraine war, including exclusive coverage from war zones.',
      category: 'War Reporting',
    },
    {
      icon: Globe,
      title: 'Israel-Gaza-Iran Crisis',
      description: 'In-depth coverage of the Middle East geopolitical tensions and diplomatic negotiations with multiple international perspectives.',
      category: 'International Affairs',
    },
    {
      icon: Zap,
      title: 'Zaporizhzhia Nuclear Report',
      description: 'First Indian journalist to report from the Zaporizhzhia Nuclear Power Plant, winning Russia\'s Honest View Award 2025.',
      category: 'Investigative',
    },
    {
      icon: Award,
      title: 'White House Interview',
      description: 'Direct questioning of President Donald Trump at the White House on international policy and foreign affairs.',
      category: 'Diplomatic',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Major Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Landmark reporting that shaped global narratives and broke new ground in international journalism
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary transition-colors duration-300">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                    {story.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{story.description}</p>

                  <motion.div
                    className="mt-4 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Read More →
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
