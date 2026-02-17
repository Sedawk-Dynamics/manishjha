'use client'

import { motion } from 'framer-motion'
import { Newspaper, Users, Zap, Target } from 'lucide-react'

export function CurrentProject() {
  const projects = [
    {
      icon: Newspaper,
      title: 'Executive Editor',
      organization: 'TV9 Bharatvarsh',
      description: 'Leading the foreign affairs desk, directing high-impact geopolitical coverage and managing editorial strategy for global narratives.',
      status: 'Active',
      statusColor: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Media Leadership',
      organization: 'International Forums',
      description: 'Speaking engagements at global media conferences and foreign policy events, shaping discourse on international journalism.',
      status: 'Ongoing',
      statusColor: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'War Zone Documentation',
      organization: 'Global Conflicts',
      description: 'Continuous ground reporting and firsthand documentation from conflict zones, ensuring authentic and unbiased coverage.',
      status: 'Active',
      statusColor: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Strategic Analysis',
      organization: 'Think Tanks & Forums',
      description: 'Contributing strategic analysis on geopolitics, defense, and international relations to major global policy institutions.',
      status: 'Active',
      statusColor: 'from-purple-500 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Current Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Active initiatives shaping global journalism and international discourse
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-card border border-border rounded-xl p-8 h-full hover:border-primary transition-all duration-300 overflow-hidden">
                  {/* Top accent line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.statusColor}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>

                    <motion.div
                      className={`px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.statusColor}`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {project.status}
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-widest">
                    {project.organization}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <motion.button
                    className="px-6 py-2 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-lg text-muted-foreground mb-6">Interested in collaboration or speaking opportunities?</p> */}
          <motion.button
            className="px-10 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
