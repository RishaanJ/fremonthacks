"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Prizes", href: "#prizes" },
    { name: "Schedule", href: "#schedule" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/90 backdrop-blur-sm border-b border-black/10" : "py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on left */}
        <Link href="#" className="font-bold text-lg">
          FREMONT<span className="font-light">HACKS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm hover:opacity-70 transition-opacity">
              {link.name}
            </Link>
          ))}
        </nav>


        {/* Mobile menu button */}
        <button className="md:hidden ml-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="w-6 flex flex-col gap-1.5">
            <motion.div
              className="h-0.5 bg-black"
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
            />
            <motion.div className="h-0.5 bg-black" animate={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <motion.div
              className="h-0.5 bg-black"
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.nav
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="py-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  )
}

