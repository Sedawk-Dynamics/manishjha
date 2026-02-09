'use client'

import { motion } from 'framer-motion'
import { Award, Globe, BookOpen, Briefcase } from 'lucide-react'

export function BioSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const highlights = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Russia\'s Honest View Award 2025, multiple international recognitions for journalism excellence',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Covered conflicts and diplomatic events in 25+ countries across 6 continents',
    },
    {
      icon: Briefcase,
      title: 'Executive Leadership',
      description: 'Executive Editor at TV9 Bharatvarsh, leading editorial and reporting initiatives',
    },
    {
      icon: BookOpen,
      title: 'Storytelling',
      description: '20+ years of in-depth reporting on international conflicts and global affairs',
    },
  ]

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About My Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two decades of fearless journalism covering the world's most critical stories, from war zones to diplomatic negotiations
            </p>
          </motion.div>

          {/* Main bio paragraph */}
          <motion.div
            variants={itemVariants}
            className="bg-background rounded-xl p-8 border border-border/50"
          >
            <p className="text-lg text-muted-foreground leading-relaxed space-y-4">
              With over 20 years of experience as a war correspondent and foreign affairs specialist, I've dedicated my career to bringing truth
              and clarity to the world's most complex geopolitical situations. Currently serving as Executive Editor at TV9 Bharatvarsh, I combine
              journalistic excellence with editorial leadership.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              My reporting spans conflict zones, international diplomacy, and humanitarian crises across six continents. I pride myself on delivering
              nuanced, ground-truth reporting that cuts through noise and misinformation. In 2025, I received Russia's prestigious Honest View Award,
              recognizing my commitment to unbiased, factual journalism.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-background rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Timeline/milestones */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Career Milestones</h3>
            <div className="space-y-4">
              {[
                { year: '2019-Present', event: 'Executive Editor, TV9 Bharatvarsh | Author at News9Live', links: { tv9: 'https://www.tv9hindi.com/author/manish', news9: 'https://www.news9live.com/author/manish-jha-2' } },
                { year: '2025', event: 'Awarded Russia\'s Prestigious Honest View Award for Unbiased Journalism' },
                { year: '2007-2019', event: 'Senior Correspondent, INDIA TV - Extensive Coverage of International Affairs' },
                { year: '2005-2007', event: 'Reporter, DD News - Foundation of Global Reporting' },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 items-start bg-background rounded-lg p-4 border border-border/30 hover:border-primary/20 transition-colors"
                >
                  <div className="w-24 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed">{milestone.event}</p>
                    {milestone.links && (
                      <div className="flex gap-3 mt-2 text-xs">
                        {milestone.links.tv9 && (
                          <a href={milestone.links.tv9} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            TV9 Hindi Profile
                          </a>
                        )}
                        {milestone.links.news9 && (
                          <a href={milestone.links.news9} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            News9Live Profile
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
