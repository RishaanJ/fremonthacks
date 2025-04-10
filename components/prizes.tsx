"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Prizes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const prizes = [
    { place: "1st Place", amount: "TBD", delay: 0 },
    { place: "2nd Place", amount: "TBD", delay: 0.2 },
    { place: "3rd Place", amount: "TBD", delay: 0.4 },
  ]

  // Organized sponsors by tier
  const sponsorTiers = {
    title: [{ name: "Title Sponsor", logo: "/placeholder.svg?height=120&width=300" }],
    gold: [
      { name: "Gold Sponsor 1", logo: "/placeholder.svg?height=100&width=240" },
      { name: "Gold Sponsor 2", logo: "/placeholder.svg?height=100&width=240" },
    ],
    silver: [
      { name: "Silver Sponsor 1", logo: "/placeholder.svg?height=80&width=200" },
      { name: "Silver Sponsor 2", logo: "/placeholder.svg?height=80&width=200" },
      { name: "Silver Sponsor 3", logo: "/placeholder.svg?height=80&width=200" },
    ],
    bronze: [
      { name: "AoPS", logo: "https://aimforsevausa.org/wp-content/uploads/2018/09/Copy-of-AoPS-Logo.jpg" },
      { name: "Interview Cake", logo: "https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/07/10170023/r-66-interview-cake-be-good-at-programming-interviews.jpg" },
      { name: ".XYZ", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/1200px-.xyz_logo.svg.png" },
      { name: "Bronze Sponsor 4", logo: "/placeholder.svg?height=60&width=160" },
    ],
  }

  return (
    <section ref={ref} id="prizes" className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50">
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

        {/* Prizes Section - Kept intact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className="border border-black/10 rounded-xl p-8 flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-md transition-all"
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

        {/* Sponsors Section - Redesigned with tiers */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold">Our Sponsors</h3>
          <p className="text-md opacity-80 max-w-2xl mx-auto mt-2">
            Thank you to our amazing sponsors for making this hackathon possible.
          </p>
        </motion.div>

        {/* Title Sponsors */}
        <div className="mb-16">
          <motion.h4
            className="text-xl font-semibold text-center mb-6 py-2 border-b border-black/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Title Sponsor
          </motion.h4>
          <div className="flex justify-center">
            {sponsorTiers.title.map((sponsor, index) => (
              <motion.div
                key={index}
                className="relative hover:opacity-90 transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={300}
                  height={120}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-14">
          <motion.h4
            className="text-lg font-semibold text-center mb-6 py-2 border-b border-black/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Gold Sponsors
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsorTiers.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                className="relative hover:opacity-90 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={240}
                  height={100}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <motion.h4
            className="text-lg font-semibold text-center mb-6 py-2 border-b border-black/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Silver Sponsors
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsorTiers.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                className="relative hover:opacity-90 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                whileHover={{ scale: 1.03 }}
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

        {/* Bronze Sponsors */}
        <div>
          <motion.h4
            className="text-lg font-semibold text-center mb-6 py-2 border-b border-black/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Bronze Sponsors
          </motion.h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
            {sponsorTiers.bronze.map((sponsor, index) => (
              <motion.div
                key={index}
                className="relative hover:opacity-90 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 + 0.05 * index }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={160}
                  height={60}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sponsor CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4 className="text-xl font-semibold mb-4">Interested in sponsoring?</h4>
          <p className="text-md opacity-80 max-w-2xl mx-auto mb-6">
            Join our growing list of sponsors and support the next generation of innovators.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/sponsor">Become a Sponsor</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
