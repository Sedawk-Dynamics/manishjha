'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

export function InternationalAssignments() {
  const assignments = [
    {
      country: 'Ukraine',
      region: 'Donbass',
      period: '2022-2025',
      highlights: 'War Zone Reporting, Conflict Analysis',
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      country: 'China & Taiwan',
      region: 'Beijing, Taipei',
      period: '2023-2025',
      highlights: 'Geopolitical Analysis, Cross-strait Relations',
      color: 'from-red-500/20 to-red-600/20',
    },
    {
      country: 'United States',
      region: 'Washington D.C.',
      period: '2019-2025',
      highlights: 'President Election, UNGA, Indian PM Visits',
      color: 'from-blue-500/20 to-indigo-600/20',
    },
    {
      country: 'South Asia',
      region: 'Bangladesh, Nepal, Sri Lanka',
      period: 'Ongoing',
      highlights: 'Regional Affairs, Security Analysis',
      color: 'from-orange-500/20 to-orange-600/20',
    },
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="assignments" className="py-20 bg-card/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">International Assignments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reporting from the world's most challenging regions and diplomatic centers
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {assignments.map((assignment, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${assignment.color} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              <div className="relative bg-background border border-border rounded-xl p-8 h-full hover:border-primary transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{assignment.country}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 text-sm">
                      <MapPin size={16} className="text-primary" />
                      {assignment.region}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    {assignment.period}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-primary font-semibold mb-2">Highlights</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{assignment.highlights}</p>
                  </div>
                </div>

                <motion.div
                  className="mt-4 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
