'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Medal, Zap } from 'lucide-react'

export function Achievements() {
  const awards = [
    {
      icon: Trophy,
      year: '2025',
      title: 'Honest View Award 2025',
      description: 'Russia\'s most prestigious media honor for ground report from Zaporizhzhia Nuclear Power Plant. First Indian journalist to receive this award.',
      highlight: true,
    },
    {
      icon: Medal,
      year: '2025',
      title: 'Medal for Friendship & International Cooperation',
      description: 'Presented at the Bolshoi Theatre, Moscow by Yevgeny Primakov for contributions to international relations.',
      highlight: true,
    },
    {
      icon: Star,
      year: '2024',
      title: 'Ground Zero Reporting Recognition',
      description: 'Recognized globally by multiple international forums for fearless war zone reporting and documentation.',
      highlight: false,
    },
    {
      icon: Zap,
      year: '2024',
      title: 'Global Media Speaker',
      description: 'Invited to speak at prestigious international media conferences and foreign policy forums worldwide.',
      highlight: false,
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-card/50 relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Awards & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized internationally for excellence in journalism and contributions to global understanding
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, index) => {
            const Icon = award.icon
            return (
              <motion.div
                key={index}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
                  award.highlight
                    ? 'border border-primary bg-gradient-to-r from-primary/10 to-transparent'
                    : 'border border-border bg-background hover:border-primary'
                }`}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="p-8 flex items-start gap-6">
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center ${
                      award.highlight
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-widest">{award.year}</p>
                        <h3 className="text-2xl font-bold text-foreground mt-1">{award.title}</h3>
                      </div>
                      {award.highlight && (
                        <motion.div
                          className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Prestigious
                        </motion.div>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                  </div>
                </div>

                {award.highlight && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Years Active', value: '20+' },
            { label: 'Countries', value: '25+' },
            { label: 'Awards', value: '100+' },
            { label: 'Publications', value: '500+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4 rounded-xl border border-border bg-card"
              whileHover={{ scale: 1.05, borderColor: '#d4af37' }}
            >
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
