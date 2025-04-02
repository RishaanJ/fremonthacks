"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function Prizes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const prizes = [
    { place: "1st Place", amount: "TBD", delay: 0 },
    { place: "2nd Place", amount: "TBD", delay: 0.2 },
    { place: "3rd Place", amount: "TBD", delay: 0.4 },
  ]

  const sponsors = [
    { name: "Sponsor 1", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Sponsor 2", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Sponsor 3", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Sponsor 4", logo: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <section ref={ref} id="prizes" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prizes & Sponsors</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Compete for exciting cash prizes and recognition from our sponsors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className="border border-black/10 p-8 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: prize.delay }}
            >
              <span className="text-sm uppercase tracking-wider opacity-70 mb-2">{prize.place}</span>
              <motion.span
                className="text-4xl md:text-5xl font-bold"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.5, delay: prize.delay + 0.3 }}
              >
                {prize.amount}
              </motion.span>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Our Sponsors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="relative grayscale hover:grayscale-0 transition-all duration-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={80}
                className="mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

