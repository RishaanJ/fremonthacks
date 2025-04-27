"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Tracks from "@/components/tracks"
import Prizes from "@/components/prizes"
import Schedule from "@/components/schedule"
import Team from "@/components/team"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import Navbar from "@/components/navbar"
import Head from 'next/head'


import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="relative min-h-screen bg-white text-black">


      <CursorEffect />
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Prizes />
      <Schedule />
      <Team />
      <Faq />
      <Footer />
    </main>
  )
}
