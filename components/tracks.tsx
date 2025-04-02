"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lock } from "lucide-react"

export default function Tracks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // In a real implementation, this would be determined by the current date
  const isHackathonStarted = false

  const tracks = [
    { id: 1, name: "Track 1", description: "Details will be revealed during the hackathon" },
    { id: 2, name: "Track 2", description: "Details will be revealed during the hackathon" },
    { id: 3, name: "Track 3", description: "Details will be revealed during the hackathon" },
  ]

  const [hoveredVault, setHoveredVault] = useState<number | null>(null)

  return (
    <section ref={ref} id="tracks" className="py-24 px-4 md:px-8 border-y border-black/10 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tracks & Challenges</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Our hackathon tracks are kept secret until the event begins. Prepare to be challenged and inspired when the
            vaults unlock.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="relative aspect-square border-2 border-black bg-white flex flex-col items-center justify-center p-6 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredVault(track.id)}
              onMouseLeave={() => setHoveredVault(null)}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{
                  rotate: hoveredVault === track.id ? [0, -1, 1, -1, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  repeat: hoveredVault === track.id ? 1 : 0,
                }}
                className="flex flex-col items-center"
              >
                <Lock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{track.name}</h3>
                <p className="text-center text-sm opacity-70">
                  {isHackathonStarted ? "Track details revealed!" : "🔒 LOCKED"}
                </p>
              </motion.div>

              {/* Vault door effect */}
              <motion.div
                className="absolute inset-0 border-2 border-black bg-black/5"
                initial={{ opacity: 0.05 }}
                animate={{
                  opacity: hoveredVault === track.id ? 0.1 : 0.05,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

