"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: "150+", label: "Hackers" },
    { value: "12", label: "Hours" },
    { value: "TBD", label: "Cash Prizes" },
    { value: "10+", label: "Workshops" },
  ]

  return (
    <section ref={ref} id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is FremontHacks?</h2>
          <p className="text-lg leading-relaxed opacity-80">
            FremontHacks is a 12-hour high school hackathon where students collaborate to build innovative projects.
            Whether you're a coding expert or just starting out, our inclusive environment welcomes all skill levels.
            Join us for a day of learning, creating, and connecting with like-minded peers passionate about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 border border-black/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
              <span className="text-sm uppercase tracking-wider mt-2 opacity-70">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

