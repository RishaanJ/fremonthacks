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
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-black">Leadership Roles Available</h2>
              <button onClick={closeModal} className="text-black text-2xl">&times;</button>
            </div>
            <p className="mt-4 text-gray-700">
              Leadership roles are available to apply!{' '}
              <a
                href="https://forms.gle/Z31TAb4cJSSwMjhi9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Apply here
              </a>
            </p>
          </div>
        </div>
      )}

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
