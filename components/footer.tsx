"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Schedule", href: "#schedule" },
    { name: "Team", href: "#team" },
    { name: "Donate", href: "https://hcb.hackclub.com/donations/start/fremont-hacks-b85ecc83-17ce-4445-9727-0f71c418b769" },
  ]

  return (
    <footer ref={ref} className="py-12 px-4 md:px-8 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm opacity-70 mb-4 md:mb-0">Built with ❤️ by FremontHacks Team</p>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link href={link.href} className="text-xs font-mono hover:underline underline-offset-4">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  )
}

