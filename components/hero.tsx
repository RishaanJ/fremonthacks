"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none" />

      <motion.h1
        className={`text-6xl md:text-8xl font-black tracking-tighter mb-4 ${glitchActive ? "glitch" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="relative inline-block">
          FREMONT HACKS
          {glitchActive && (
            <>
              <span className="absolute top-0 left-0 w-full glitch-1">FREMONT HACKS</span>
              <span className="absolute top-0 left-0 w-full glitch-2">FREMONT HACKS</span>
            </>
          )}
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-8 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        DATE TBD, LOCATION TBD
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          href="#register"
          className="px-8 py-3 border-2 border-black font-medium transition-all duration-300 hover:bg-black hover:text-white"
        >
          Register Now
        </Link>
        <Link
          href="#sponsor"
          className="px-6 py-2 border border-black/50 font-medium transition-all duration-300 hover:border-black"
        >
          Sponsor Us
        </Link>
      </motion.div>
    </section>
  )
}

