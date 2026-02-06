'use client'

import { motion } from 'framer-motion'
import { Play, Medal, Award } from 'lucide-react'
import Image from 'next/image'

export function AwardsShowcase() {
  const awardImages = [
    {
      src: '/awards/certificate.jpg',
      title: 'Honest View Award 2025',
      description:
        'International Competition Certificate - Awarded by prestigious Russian organization',
      icon: Award,
    },
    {
      src: '/awards/medal.jpg',
      title: 'Russian Federation Medal',
      description:
        'Official Medal from Ministry of Foreign Affairs - For Friendship and Cooperation',
      icon: Medal,
    },
    {
      src: '/awards/award-trophy.jpg',
      title: 'Media Excellence Trophy',
      description:
        'Honest View 2025 Media Award - Recognition for outstanding journalism',
      icon: Award,
    },
    {
      src: '/awards/medal-presentation.jpg',
      title: 'Official Presentation',
      description:
        'Medal presentation ceremony with government officials and international guests',
      icon: Medal,
    },
  ]

  const videos = [
    {
      title: 'Award Ceremony',
      description: 'Official announcement and ceremony video',
      src: '/videos/Award-video.mp4',
    },
    {
      title: 'Medal Announcement',
      description: 'Russian Federation Medal announcement video',
      src: '/videos/medel-announcement.mp4',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-card/50 to-background">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & Honors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            International recognition for excellence in journalism and global
            affairs reporting
          </p>
        </motion.div>

        {/* Award Images Section */}
        <motion.div
          className="mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Award Photos & Medals
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {awardImages.map((award, index) => {
              const IconComponent = award.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-96 w-full overflow-hidden bg-muted">
                    <Image
                      src={award.src}
                      alt={award.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      quality={90}
                    />
                  </div>

                  <div className="p-6 bg-card border-t border-primary/20">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="text-primary" size={20} />
                      </div>
                      <h4 className="text-lg font-bold">
                        {award.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Award Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Award Ceremony Videos
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative w-full aspect-video bg-black">
                 <video
  src={video.src}
  autoPlay
  loop
  muted
  playsInline
  controls
  className="w-full h-full object-cover"
  controlsList="nodownload"
/>

                </div>

                <div className="p-6 bg-card border-t border-primary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Play className="text-primary" size={20} />
                    </div>
                    <h4 className="text-lg font-bold">
                      {video.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
