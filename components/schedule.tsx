"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function Schedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [activeEvent, setActiveEvent] = useState<number | null>(null)

  const events = [
    { time: "8:00 AM", title: "Check-in & Breakfast", description: "Arrive, register, and enjoy breakfast" },
    { time: "8:30 AM", title: "Opening Ceremony", description: "Welcome address and announcements" },
    { time: "9:00 AM", title: "Hacking Begins", description: "Start working on your projects" },
    { time: "12:00 PM", title: "Lunch", description: "Take a break and refuel" },
    { time: "2:00 PM", title: "Workshop", description: "Special tech workshop" },
    { time: "6:00 PM", title: "Dinner", description: "Dinner is served" },
    { time: "8:00 PM", title: "Project Submission", description: "Submit your projects" },
    { time: "8:30 PM", title: "Judging", description: "Judges review submissions" },
    { time: "9:30 PM", title: "Awards Ceremony", description: "Winners announced" },
  ]

  return (
    <section ref={ref} id="schedule" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Plan your day with our hackathon schedule.</p>
        </motion.div>

        <div className="relative flex justify-center">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-black/20"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1 }}
          />

          <div className="relative w-full max-w-2xl">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                    <div className="mb-1 text-sm opacity-70">{event.time}</div>
                    <h3 className="text-lg font-bold">{event.title}</h3>

                    {/* Description only shows when active */}
                    <motion.p
                      className="text-sm opacity-80 mt-1"
                      initial={{ height: 0, opacity: 0 }}
                      animate={activeEvent === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {event.description}
                    </motion.p>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-1/2 w-4 h-4 rounded-full bg-black -translate-x-1/2 cursor-pointer"
                    whileHover={{ scale: 1.5 }}
                    animate={activeEvent === index ? { scale: 1.5 } : { scale: 1 }}
                    onClick={() => setActiveEvent(activeEvent === index ? null : index)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

